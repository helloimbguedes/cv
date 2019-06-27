const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    stats: "errors-only",
    overlay: true,
    host: process.env.HOST,
    port: process.env.PORT,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app.html"
    })
  ]
};
