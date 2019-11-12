
# Just run it!
`docker start pgadmin`
`docker start pgdb`
`docker start zombie-api`
`docker start zombie-web`
 

# 1st builds

# 1
`docker run --name pgadmin --network=skynet -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=root@qaninja.io" -e "PGADMIN_DEFAULT_PASSWORD=qaninja" -d dpage/pgadmin4'`

# 2
`docker run --name pgdb --network=skynet -e "POSTGRES_PASSWORD=qaninja" -p 5432:5432 -v var/lib/postgresql/data -d postgres`

# 3
`docker run --name zombie-api --network=skynet -e "DATABASE=pgdb" -p 3000:3000 -d papitoio/zombie-api`

# 4
`docker run --name zombie-web --network=skynet -e "VUE_APP_API=http://localhost:3000" -p 5000:5000 -d papitoio/zombie-web`

# 5
`sudo yarn run test`
