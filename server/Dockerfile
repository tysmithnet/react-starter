FROM mysql

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE app

EXPOSE 3306

ADD db.sql /docker-entrypoint-initdb.d
