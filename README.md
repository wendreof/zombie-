# ZombiePlus

[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fwendreolf)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fwendreof%2Fzombie-%2F)
[![GitHub issues](https://img.shields.io/github/issues/wendreof/zombie-)](https://github.com/wendreof/zombie-/issues)
[![GitHub forks](https://img.shields.io/github/forks/wendreof/zombie-)](https://github.com/wendreof/zombie-/network)
[![GitHub stars](https://img.shields.io/github/stars/wendreof/zombie-)](https://github.com/wendreof/zombie-/stargazers)

-------
<p align="center">
    <a href="#motivation">Motivation</a> &bull;
    <a href="#installation">Installation</a> &bull;
    <a href="#starting">Starting</a>
</p>

## Motivation
This repository is about automated tests in NodeJS with Docker, Jenkins and NightwatchJS framework.

## Installation

- `docker run --name pgadmin --network=skynet -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=root@qaninja.io" -e "PGADMIN_DEFAULT_PASSWORD=qaninja" -d dpage/pgadmin4`

- `docker run --name pgdb --network=skynet -e "POSTGRES_PASSWORD=qaninja" -p 5432:5432 -v var/lib/postgresql/data -d postgres`

- `docker run --name zombie-api --network=skynet -e "DATABASE=pgdb" -p 3000:3000 -d papitoio/zombie-api`

- `docker run --name zombie-web --network=skynet -e "VUE_APP_API=http://localhost:3000" -p 5000:5000 -d papitoio/zombie-web`

## Starting
- `docker start pgadmin`
- `docker start pgdb`
- `docker start zombie-api`
- `docker start zombie-web`

- `yarn test` Running all tests
- `yarn run test:login` Running login tests
- `yarn run test:nologin` Running all except login tests
- `yarn run test:search` Running  search  tests
- `yarn run test:nosearch` Running all except search tests
- `yarn run test:sign-up` Running sign-up tests
- `yarn run test:nosign-up` Running all except sign-up tests

## License
This project is licensed under the terms of the MIT license. See the LICENSE file.
