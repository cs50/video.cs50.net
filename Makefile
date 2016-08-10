build:
	docker build -t video50 .

rebuild:
	docker build --no-cache -t video50 .

run:
	docker run -i --name video50 -p 8080:8080 --rm -v "$(PWD)":/srv/www -t video50

shell:
	#docker exec -it video50_web bash -l
	docker run -i -p 8080:8080 --rm -v "$(PWD)":/srv/www -t video50 bash -l

up:
	docker-compose up
