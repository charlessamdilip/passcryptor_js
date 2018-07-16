const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: 'passcryptor.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    port: 3000,
    watchOptions: {
      ignored: /node_modules/
    },
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
}