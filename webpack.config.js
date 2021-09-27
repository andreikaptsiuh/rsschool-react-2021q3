/* eslint-disable quotes */
// Generated using webpack-cli https://github.com/webpack/webpack-cli
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const clientConfig = {
  mode: "development",
  entry: "./src/client.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
    new ESLintPlugin({
      extensions: ["tsx", "ts", "js"],
      fix: false,
      failOnError: true,
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};

const serverConfig = {
  mode: "development",
  entry: "./src/server.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "server.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
    new ESLintPlugin({
      extensions: ["tsx", "ts", "js"],
      fix: false,
      failOnError: true,
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};

module.exports = [clientConfig, serverConfig];
