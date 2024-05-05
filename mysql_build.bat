docker stop dbmysql
docker rm dbmysql
docker pull mysql:latest
docker run --name dbmysql -e MYSQL_ROOT_PASSWORD=gedRoTiCh29h3F1P7oJO -v %cd%/mysql-data:/var/lib/mysql -v D:/repos/developertest/oabmysql/init.sql:/docker-entrypoint-initdb.d/init.sql -p 3306:3306 -d mysql:latest


