docker-build:
	@docker build -t node:rxjs docker/

shell:
	@docker-compose exec node zsh 


dev-server:
	@docker-compose run --rm --service-ports node zsh -c "node_modules/.bin/webpack-dev-server --mode development"
