const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/',
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      { 
        test: /\.css$/i, 
        use: [ 
          { loader: MiniCssExtractPlugin.loader }, 
          "css-loader"], 
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  devtool : 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({  
      filename: 'style/[name].css'  
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env')
    }),
  ],
};
