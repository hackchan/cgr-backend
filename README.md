# ANALYZER BACKEND

## Express
Instalacion express
```bash
npm install express 
```
## Webpack
Instalacion webpack

```bash
npm install webpack webpack-cli -D 
```
## Babel
Instalacion babel

```bash
npm install @babel/core @babel/preset-env babel-loader 
```

## Webpackconfig

```js
const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
  name: 'express-server',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

```

## TYPESCRIPT

```bash
npm install typescript ts-loader @types/express -D
```

# MIGRATIONS


```bash
npm run migration:generate -- gestion-usuarios
npm run migration:generate src/migrations/db-diari
npm run migration:run
```