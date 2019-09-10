docker-compose -f docker-compose.prod.yml build
until docker-compose -f docker-compose.prod.yml push
do
    echo "Try again"
done

docker system prune