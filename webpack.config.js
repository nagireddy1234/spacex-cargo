const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|js)x?$/,
            use: ['babel-loader', 'ts-loader'],
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(jpg|jpeg|png|woff|woff2|gif|eot|ttf|svg|mp3)$/,
            use: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
  ],
  devServer: {
    historyApiFallback: true,
  },
};

if (isDevelopment) {
  module.exports.plugins.push(
    new ReactRefreshPlugin(),
  )
}