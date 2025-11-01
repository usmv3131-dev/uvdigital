# UVDigital

Моно-репозиторий с несколькими Vite-приложениями (главный фронт `MAIN` и витрины `50BOTS`, `AIMARKETING`, `BEAUTYAI`, `CONTENTAI`, кейсы в `CASES`).

## Docker

### Быстрый старт (dev)
1. Скопируйте `.env.example` в `.env` и при необходимости обновите PORT (по умолчанию `3000`).
2. Соберите и поднимите dev-сервис:
   ```bash
   docker compose up -d
   docker compose logs -f app
   ```
3. Dev-сервер слушает `http://localhost:${PORT}` и автоматически подхватывает изменения в исходниках.

### Продакшн
```bash
docker compose -f docker-compose.prod.yml up -d
```
Завершение:
```bash
docker compose -f docker-compose.prod.yml down
```

### Makefile
Для удобства доступны цели:
```bash
make build      # docker compose build
make up         # docker compose up -d
make logs       # docker compose logs -f app
make sh         # открыть shell в контейнере app
make prod-up    # docker compose -f docker-compose.prod.yml up -d
make prune      # docker system prune -f
```

### Настройка порта
Меняйте значение `PORT` в `.env` (или переменной окружения при запуске). Docker-compose автоматически пробрасывает новое значение.

### Откат изменений
```bash
git checkout -f main
git branch -D chore/docker-reset
# или для полного отката локальных файлов
git reset --hard
git clean -fd
```
