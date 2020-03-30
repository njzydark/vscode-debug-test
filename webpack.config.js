const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devtool: "source-map",
  devServer: {
    compress: true,
    clientLogLevel: "none",
    quiet: true,
    host: "localhost",
    port: 8087
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        enforce: "pre",
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()]
};
