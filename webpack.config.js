const path = require('path')
const nodeExternals = require('webpack-node-externals')

/** @type {import('webpack').Configuration} */

// const NODE_ENV = config.
// const PORT= config.port
module.exports = {
  name: 'express-server',
  entry: './src/index.ts',
  target: 'node',
  mode: 'development',

  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
