const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: process.env.PORT || 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
