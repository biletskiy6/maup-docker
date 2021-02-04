build:
	docker-compose up --build $(c)
dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build $(c)