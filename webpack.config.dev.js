const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/'),
    filename: 'passcryptor.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
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
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'html', 'index.html')
    })
  ]

}