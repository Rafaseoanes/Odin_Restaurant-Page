const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    watchFiles: ['./src/**/*.html', 'public/**/*'],
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Restaurant page",
    template: "./src/index.html",
  })],
};
