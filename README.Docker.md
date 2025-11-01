## Build & Run with Docker Compose
- `docker compose up --build`
- Application serves from nginx at http://localhost:3000 (mapped to container port 80)

Compose automatically builds the production image and keeps it running in the foreground. Use `docker compose down` to stop the stack.

## Build & Run the Image Manually
- Build: `docker build -t uvdigital-web .`
- Run: `docker run --rm -p 3000:80 uvdigital-web`

If you need a specific CPU architecture, add `--platform=linux/amd64` (or another target) during the build command.

## Configuration Notes
- All static assets are built once via Vite (`npm run build`) and served by nginx with SPA routing (`docker/nginx.conf`).
- Provide any compile-time variables through `VITE_*` env vars when building (`docker compose build --build-arg VITE_API_URL=...`), or via a `.env.production` file that lives next to the Vite project before building.

## References
- [Docker Compose specification](https://docs.docker.com/go/compose-spec-reference/)
- [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)
