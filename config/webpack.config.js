const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: path.resolve(__dirname + "./../src/index.js"),
  output: {
    path: path.resolve(__dirname + "./../dist"),
    filename: "v-InputNumber.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
