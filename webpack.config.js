const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    }
    ]
  },
  plugins: [htmlPlugin, new Dotenv()]
};