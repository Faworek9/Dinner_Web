# Skrypt uruchamiający jednocześnie backend FastAPI oraz frontend React (Vite)
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  Uruchamianie serwisu Ewidencja Obiadów Szkolnych        " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

$projectRoot = $PSScriptRoot
$venvPython = Join-Path $projectRoot ".venv\Scripts\python.exe"

# Dodanie Node.js do ścieżki PATH w bieżącej sesji jeśli nie ma go w PATH
$vsNodePath = "C:\Program Files\Microsoft Visual Studio\18\Community\MSBuild\Microsoft\VisualStudio\NodeJs"
if (Test-Path $vsNodePath) {
    $env:Path = "$vsNodePath;$env:Path"
}

Write-Host "`n[1/2] Uruchamianie backendu FastAPI na porcie 8000..." -ForegroundColor Green
$backendJob = Start-Process -FilePath $venvPython -ArgumentList "-m uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000" -WorkingDirectory $projectRoot -PassThru

Start-Sleep -Seconds 2

Write-Host "[2/2] Uruchamianie frontendu React (Vite) na porcie 5173..." -ForegroundColor Green
$frontendJob = Start-Process -FilePath "npm.cmd" -ArgumentList "run dev" -WorkingDirectory (Join-Path $projectRoot "frontend") -PassThru

Write-Host "`nObydwa serwery zostały pomyślnie uruchomione!" -ForegroundColor Cyan
Write-Host "-> Frontend (Strona internetowa): http://localhost:5173" -ForegroundColor White
Write-Host "-> Backend API (Swagger / Dokumentacja): http://localhost:8000/docs" -ForegroundColor White
Write-Host "`nAby zatrzymać aplikację, zamknij otwarte okna terminali." -ForegroundColor Yellow
