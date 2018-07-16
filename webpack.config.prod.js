const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
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
          presets: ["react"]
        }
      }
    ]
  },
  plugins: [new cleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new copyWebpackPlugin([indexHtmlCopyConf])
  ]
}