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

### Статическая раздача
1. `npm run build` — в каталоге `dist/` появляются готовые статические файлы.
2. Раздайте `dist/` любым статическим сервером или загрузите на платформу (Netlify, Vercel, S3/CloudFront и т.д.).
   * Для Netlify: просто деплойте `dist/`, `_redirects` уже добавлен.
   * Для Nginx/Apache: настройте правило отдавать `index.html` на неизвестные пути, чтобы SPA-маршруты работали.

### Автодеплой на сервер (Docker + SSH)
CI/CD пайплайн в `.github/workflows/docker-deploy.yml` собирает контейнер, пушит его в GHCR и по SSH обновляет инстанс на хостинге (например, reg.ru).

1. Подготовьте сервер:
   - Установите Docker и Docker Compose Plugin.
   - Создайте каталог для проекта, например `/opt/uvdigital`.
   - Откройте внешнее соединение на выбранном порту (по умолчанию `3000`).
2. Сгенерируйте SSH-ключ (формат OpenSSH) и добавьте **публичную** часть на сервер.
3. В репозитории GitHub создайте секреты:
   - `DEPLOY_HOST` — IP или домен сервера.
   - `DEPLOY_PORT` — SSH-порт (опционально, по умолчанию `22`).
   - `DEPLOY_USER` — пользователь для подключения.
   - `DEPLOY_SSH_KEY` — приватный ключ (начинается с `-----BEGIN OPENSSH PRIVATE KEY-----`).
   - `DEPLOY_PATH` — абсолютный путь на сервере (например, `/opt/uvdigital`).
   - `DEPLOY_HOST_PORT` — внешний порт, который нужно пробросить (если не указать, используется `3000`).
   - `GHCR_USERNAME` — GitHub username или `github-actions`.
   - `GHCR_TOKEN` — персональный токен с правом `read:packages` (для `github-actions` подойдёт Fine-grained PAT).
4. Первый запуск (однократно, вручную на сервере):
   ```bash
   git init # не обязательно, главное — каталог существует
   cd /opt/uvdigital
   ```
   При первом пуше workflow сам загрузит `deploy/docker-compose.yml`, создаст `.env` и запустит контейнер.
5. Деплой происходит автоматически при каждом push в ветку `main`. Для ручного запуска используйте вкладку *Actions → Docker Deploy → Run workflow*.

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
