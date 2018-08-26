const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/..'),
    filename: 'index.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['../**/*'], {
    //   allowExternal: true,
    //   exclude: [
    //     'code',
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
