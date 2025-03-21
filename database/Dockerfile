FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=urgent_news

COPY news.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
