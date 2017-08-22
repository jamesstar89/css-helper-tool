var config = require('./webpack.config'),
    webpack = require('webpack'),
    dotenv = require('dotenv-webpack');

process.env.NODE_ENV = 'production';
config.output.filename = 'app.min.js';

config.plugins = [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true
      }),
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

module.exports = config;
