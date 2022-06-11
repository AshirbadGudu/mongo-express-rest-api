# MongoDB Express TypeScript REST API

## Steps to setup

### Init `package.json` file

```sh
npm init -y
```

### Add `typescript` as a dev dependency

```sh
npm install --save-dev typescript
```

### Create `tsconfig.json` file

```sh
npx tsc --init
```

### Create `development` and `production` directories

```sh
mkdir server src
```

### Define `outDir` in `tsconfig.json` file

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./server",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### For development purposes install `ts-node` package as a dev dependency

```sh
npm install --save-dev ts-node
```

### Add dev script to `package.json` file

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts"
  }
}
```

### Install `express`

```sh
npm i express
```

### Install types for `express`

```sh
npm i @types/express --save-dev
```

### Install `dotenv` package for environment variables

```sh
npm i dotenv
```

### Install `mongoose` package for interacting with MongoDB

```sh
npm i mongoose
```

### Create following directories

```sh
mkdir test # for holding API test files
mkdir ./src/types # for holding types for project
mkdir ./src/routes # for holding routes of API endpoints
mkdir ./src/controllers # for holding controllers of API endpoints
mkdir ./src/models # for holding models of MongoDB
mkdir ./src/schemas # for holding schemas of MongoDB
```
