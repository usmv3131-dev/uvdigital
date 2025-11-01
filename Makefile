SHELL := /bin/sh
DC := docker compose
DC_PROD := docker compose -f docker-compose.prod.yml

.PHONY: build up down logs sh prod-build prod-up prod-down prune

build:
	$(DC) build

up:
	$(DC) up -d

down:
	$(DC) down

logs:
	$(DC) logs -f app

sh:
	$(DC) exec app sh

prod-build:
	$(DC_PROD) build

prod-up:
	$(DC_PROD) up -d

prod-down:
	$(DC_PROD) down

prune:
	docker system prune -f
