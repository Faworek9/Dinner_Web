# =========================================================================
# Multi-stage Dockerfile dla serwisu Dinner_Web na Google Cloud Run
# 1. Buduje frontend React (Vite)
# 2. Tworzy lekki kontener Python z FastAPI i serwuje aplikację
# =========================================================================

# --- Etap 1: Budowanie frontendu ---
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

# Kopiowanie plików definicji pakietów
COPY frontend/package*.json ./
RUN npm install

# Kopiowanie kodu źródłowego frontendu i kompilacja (Vite build -> /app/frontend/dist)
COPY frontend/ ./
RUN npm run build

# --- Etap 2: Środowisko uruchomieniowe Python ---
FROM python:3.11-slim
WORKDIR /app

# Optymalizacja środowiska Pythona
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8080

# Instalacja zależności Pythona
COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r ./backend/requirements.txt

# Kopiowanie kodu backendu
COPY backend/ ./backend/

# Kopiowanie skompilowanego frontendu do katalogu static/
COPY --from=frontend-builder /app/frontend/dist ./static

# Cloud Run domyślnie nasłuchuje na porcie wskazanym przez zmienną środowiskową PORT (domyślnie 8080)
EXPOSE 8080

# Uruchomienie serwera FastAPI za pomocą Uvicorn
CMD exec uvicorn backend.main:app --host 0.0.0.0 --port ${PORT}
