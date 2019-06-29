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
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
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
  resolve: {
    mainFiles: ["index.js", "index.jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app.html"
    })
  ]
};
