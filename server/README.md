# aris-web backend

aris-web backend application

<br>

## Configuration

Make a .env.local .env.dev .env using .env.sample

- `.env.local` : for local envrionment
- `.env.dev` : for dev server environment
- `.env` : for production server environment

<br>

## Installation

### (Local Environment)

**Install packages**

```shell
$ yarn install
```

<br>

**Run backend server**

```shell
$ yarn local

or

$ yarn dev
```

<br>

### (Dev or Production Environment)

**Install packages**

```shell
$ yarn install
```

<br>

**Build javascript bundle files**

```shell
$ yarn tsc
```

<br>

**Run backend server**

```shell
$ yarn start:dev

or

$ yarn start:prod
```

<br>

# Deployment

**Move to the current directory**

```shell
$ cd /node/aris-server/server
```

<br>

**Install packages**

```shell
$ npm install
```

<br>

**Build javascript bundle files**

```shell
$ npm run tsc
```

<br>

**Generate prisma client files to use prisma**

```shell
$ npm run generate
```

<br>

**Run the backend server using pm2**

```shell
$ NODE_ENV=development pm2 start dist/server.js --name=aris
```

or

```shell
$ pm2 start dist/server.js --name=aris
```

<br>

**Open the web**

```
https://aris.club
```

<br>
