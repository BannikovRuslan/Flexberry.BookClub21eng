docker build --no-cache -f SQL\Dockerfile.PostgreSql -t bookclub21eng/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t bookclub21eng/app ../..
