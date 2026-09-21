from fastapi import APIRouter, Request, HTTPException, status
from fastapi.responses import RedirectResponse, FileResponse
import os
import logging

try:
    from backend.database import log_download, get_download_count
except ImportError:
    from database import log_download, get_download_count

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/download", tags=["downloads"])

# Domyślny adres pobierania instalatora z GitHub Releases
# Format GitHuba: https://github.com/{USER}/{REPO}/releases/latest/download/{FILENAME}
DEFAULT_DOWNLOAD_FILENAME = "Dinner_App_Instalator.exe"
DEFAULT_GITHUB_RELEASE_URL = (
    f"https://github.com/Faworek9/Dinner_Web/releases/latest/download/{DEFAULT_DOWNLOAD_FILENAME}"
)


def get_release_download_url() -> str:
    """Zwraca URL do pobrania z GitHub Releases (ze zmiennej środowiskowej lub domyślny)"""
    return os.environ.get("GITHUB_DOWNLOAD_URL", DEFAULT_GITHUB_RELEASE_URL)

def get_download_filename() -> str:
    """Zwraca nazwę pliku instalatora"""
    return os.environ.get("DOWNLOAD_FILENAME", DEFAULT_DOWNLOAD_FILENAME)

@router.get("/latest")
async def download_latest_installer(request: Request):
    """
    Pobiera najnowszą wersję instalatora aplikacji.
    Zlicza zdarzenie pobrania w bazie danych, a następnie przekierowuje
    przeglądarkę (HTTP 307) bezpośrednio do szybkiego serwera plików GitHub Releases.
    """
    filename = get_download_filename()
    user_agent = request.headers.get("user-agent", "")
    
    # 1. Zapis statystyki pobrania
    try:
        log_download(filename=filename, user_agent=user_agent)
    except Exception as err:
        logger.warning("Nie udało się zalogować zdarzenia pobrania: %s", err)

    # 2. Opcjonalny fallback na plik lokalny (np. w testach offline gdy USE_LOCAL_DOWNLOAD=true)
    if os.environ.get("USE_LOCAL_DOWNLOAD", "false").lower() in ("true", "1"):
        local_path = os.path.join(os.path.dirname(__file__), "..", "downloads", filename)
        if os.path.exists(local_path):
            return FileResponse(
                path=local_path,
                filename=filename,
                media_type="application/octet-stream"
            )

    # 3. Przekierowanie do GitHub Releases (bezpieczne, szybkie i nieobciążające Cloud Run)
    target_url = get_release_download_url()
    return RedirectResponse(
        url=target_url,
        status_code=status.HTTP_307_TEMPORARY_REDIRECT
    )

@router.get("/stats")
def get_download_statistics():
    """Zwraca liczbę pobrań programu oraz aktywny URL wydania"""
    return {
        "total_downloads": get_download_count(),
        "filename": get_download_filename(),
        "release_url": get_release_download_url()
    }
