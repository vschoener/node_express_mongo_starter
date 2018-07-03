# Core Express Application using Mongo

Back-end assignment that use:
- Node
- Mongo
- Typescript
- Docker
- Makefile

## Requirements
- Node >= 10.x
- MongoDB >= 3.2.x

## Info
Project uses Typescript to type hint the code and enforce it.

## Common usage

Setting up the .env if required (Mandatory with Docker usage) and set your values
```bash
> cp .env.sample .env
```

## Installation

Project uses a Makefile to shortcut the commands, you are free to look inside and use
docker-compose command on its own.

``` bash
> make build
> make install
```

## RUN
```bash
> make start
```

### Developer

## Watch your code

```bash
> make watch
```

## Create new Model and Migrations

TODO

## Update Model

TODO

# API Documentation

Documentation can be see in the project, run

```bash
# Docker
> make apidoc
```

# Update packages

If you want to update some packages or everything, you can use this:
[https://www.npmjs.com/package/npm-check-updates](https://www.npmjs.com/package/npm-check-updates)