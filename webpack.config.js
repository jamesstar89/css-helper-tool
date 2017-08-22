var webpack = require('webpack');
var path = require('path');
var dotenv = require('dotenv-webpack');

process.env.NODE_ENV = 'dev';

var config = {
  entry: path.resolve(__dirname, './src/js/core/app.js'),
  output: {
    path: path.resolve(__dirname, './static'),
    publicPath: '/static',
    filename: 'app.min.js'
  },
  devServer: {
    disableHostCheck: true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      }
    ]
  },
  plugins: [
      new dotenv({
        path: './.env',
        safe: false
      }),
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
      })
    ]
}

module.exports = config;
