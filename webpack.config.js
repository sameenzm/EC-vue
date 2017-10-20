const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    app: "./src/main"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    // publicPath: "/assets/"  // 开发环境中 编译后的文件所呆的路径 ??? 为什么加上这个 vue页面就出不来了?
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      "vue$": 'vue/dist/vue.common.js', //如果没有这一行，就报错：Vue is not a constructor
      "@": resolve('src'),
      '/components': resolve('src/components'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
    ]
  },
  devtool: "#cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: true
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // })
  ]
}
