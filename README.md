# UVDigital

Моно-репозиторий теперь собран в единое Vite-приложение с маршрутизацией (главная и витрины `50BOTS`, `AIMARKETING`, `BEAUTYAI`, `CONTENTAI`, а также кейсы).

## Запуск локально

```bash
npm install
npm run dev      # дев-сервер (порт 3000 по умолчанию)
npm run preview  # проверка продакшн-сборки локально
npm run build    # сборка в dist/
```

### Маршруты SPA
- `/` — главная страница UVDigital
- `/beautyai`
- `/contentai`
- `/aimarketing`
- `/50bots`
- `/cases/beautyaicase`
- `/cases/contentaicase`

Маршруты работают через `BrowserRouter`. Для статического хостинга добавлен файл `public/_redirects`, чтобы все запросы отдавали `index.html` (например, на Netlify). Для других хостов нужно настроить аналогичный fallback.

## Деплой
1. `npm run build` — в каталоге `dist/` появляются готовые статические файлы.
2. Раздайте `dist/` любым статическим сервером или загрузите на платформу (Netlify, Vercel, S3/CloudFront и т.д.).
   * Для Netlify: просто деплойте `dist/`, `_redirects` уже добавлен.
   * Для Nginx/Apache: настройте правило отдавать `index.html` на неизвестные пути, чтобы SPA-маршруты работали.

## Docker

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
