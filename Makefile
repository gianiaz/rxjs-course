docker-build:
	@docker build -t node:rxjs docker/

shell:
	@docker-compose run --rm node zsh