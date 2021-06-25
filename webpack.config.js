/* eslint-disable no-undef */
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  // !!!!!! MAKE SURE TO CHANGE MODE TO PRODUCTION WHEN DOPLOYING FOR PRODUCTION !!!!!!!!!
  mode: 'development',
  entry: {
    main:  {
      import: path.resolve(__dirname, './src/scripts/app.js'),
    },
    research: {
      import: path.resolve(__dirname, './src/scripts/research.js'),
    },
    purchase: {
      import: path.resolve(__dirname, './src/scripts/purchase.js'),
    },
    payment: {
      import: path.resolve(__dirname, './src/scripts/payment.js'),
    },
    cart: {
      import: path.resolve(__dirname, './src/scripts/cart.js'),
    },
    transaction: {
      import: path.resolve(__dirname, './src/scripts/transaction.js'),
    },
  },
  // devtool: 'inline-source-map', // ONLY FOR DEVLOPMENT MODE
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'deploy'),
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: './deploy',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'e-commerce',
      chunks: ['main'],
      favicon: './src/images/doelogo-favicon.png',
    }),
    new HtmlWebpackPlugin({
      title: 'e-commerce',
      filename: 'research.html',
      chunks: ['research'],
      favicon: './src/images/doelogo-favicon.png',
    }),
    new HtmlWebpackPlugin({
      title: 'e-commerce',
      filename: 'purchase.html',
      chunks: ['purchase'],
      favicon: './src/images/doelogo-favicon.png',
    }),
    new HtmlWebpackPlugin({
      title: 'e-commerce',
      filename: 'payment.html',
      chunks: ['payment'],
      favicon: './src/images/doelogo-favicon.png',
    }),
    new HtmlWebpackPlugin({
      title: 'e-commerce',
      filename: 'cart.html',
      chunks: ['cart'],
      favicon: './src/images/doelogo-favicon.png',
    }),
    new HtmlWebpackPlugin({
      title: 'e-commerce',
      filename: 'transaction.html',
      chunks: ['transaction'],
      favicon: './src/images/doelogo-favicon.png',
    }),
    new VueLoaderPlugin(),
    ],
};