const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const indexHtmlCopyConf = {
  from: path.resolve(__dirname, 'src', 'html', 'index.html'),
  to: path.resolve(__dirname, 'dist')
};

module.exports = {
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  mode: 'development',
  watch: false,
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'passcryptor.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["react"],
          plugins: [ "transform-class-properties" ]
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ]
  },
  plugins: [new cleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new copyWebpackPlugin([indexHtmlCopyConf]),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  ]
}