const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const outFileName = 'bundle.js';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: outFileName,
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './'),// 本地服务器所加载文件的目录
    },
    port: '8088', // 设置端口号为8088
    historyApiFallback: true //不跳转
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node-modules/"
      }

      // {
      //   test: /\.css$/, // 正则匹配以.css结尾的文件
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.(scss|sass)$/, // 正则匹配以.scss和.sass结尾的文件
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ]
};