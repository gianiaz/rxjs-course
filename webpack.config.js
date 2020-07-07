const path = require("path");

module.exports = {
  entry: "./src/code.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    port: 3000,
    watchOptions: {
      ignored: /node_modules/,
    },
  },

  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
