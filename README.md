# ZombiePlus

[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fwendreolf)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fwendreof%2Fzombie-%2F)
[![GitHub issues](https://img.shields.io/github/issues/wendreof/zombie-)](https://github.com/wendreof/zombie-/issues)
[![GitHub forks](https://img.shields.io/github/forks/wendreof/zombie-)](https://github.com/wendreof/zombie-/network)
[![GitHub stars](https://img.shields.io/github/stars/wendreof/zombie-)](https://github.com/wendreof/zombie-/stargazers)
[![GitHub license](https://img.shields.io/github/license/wendreof/zombie-)](https://github.com/wendreof/zombie-/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/wendreof/zombie-)](https://github.com/wendreof/zombie-/commits/master)

-------
<p align="center">
    <a href="#motivation">Motivation</a> &bull;
    <a href="#installation">Installation</a> &bull;
    <a href="#starting">Starting</a>
</p>

## Motivation
This repository is about automated tests in NodeJS with Docker, Jenkins and NightwatchJS framework.

## Installation

Running containers
- `docker run --name pgadmin --network=skynet -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=root@qaninja.io" -e "PGADMIN_DEFAULT_PASSWORD=qaninja" -d dpage/pgadmin4`

- `docker run --name pgdb --network=skynet -e "POSTGRES_PASSWORD=qaninja" -p 5432:5432 -v var/lib/postgresql/data -d postgres`

- `docker run --name zombie-api --network=skynet -e "DATABASE=pgdb" -p 3000:3000 -d papitoio/zombie-api`

- `docker run --name zombie-web --network=skynet -e "VUE_APP_API=http://localhost:3000" -p 5000:5000 -d papitoio/zombie-web`

- `docker run \
  -u root \ 
  --rm \ 
  -d \ 
  -p 8080:8080 \ 
  -p 50000:50000 \ 
  -v jenkins-data:/var/jenkins_home \ 
  -v /var/run/docker.sock:/var/run/docker.sock \ 
  jenkinsci/blueocean`

- `docker build -t wendreof/node-wd .`

## Starting

Running containers
- `docker start pgadmin`
- `docker start pgdb`
- `docker start zombie-api`
- `docker start zombie-web`

General tests
- `yarn test` Running all tests
- `yarn run test:headless ` Running all tests in headless mode

Login tests
- `yarn run test:login` Running login tests
- `yarn run test:nologin` Running all except login tests

Search tests
- `yarn run test:search` Running  search  tests
- `yarn run test:nosearch` Running all except search tests

Sign-up tests
- `yarn run test:sign-up` Running sign-up tests
- `yarn run test:nosign-up` Running all except sign-up tests

## License
This project is licensed under the terms of the MIT license. See the LICENSE file.
