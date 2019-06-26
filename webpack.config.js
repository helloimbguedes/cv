const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    stats: "errors-only",
    overlay: true,
    host: process.env.HOST,
    port: process.env.PORT,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "BGuedes CV"
    })
  ]
};
