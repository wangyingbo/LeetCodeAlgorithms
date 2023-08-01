#!/bin/bash
# author wangyingbo
# date:2023-08-02 pm 23:45

# 执行 npm run yb_babel_es2015 时，需要改.babelrc的presets为es2015
# 执行 npm run yb_babel_es6 时，需要改.babelrc的presets为@babel/preset-env

npm install -g @babel/cli
npm install --save-dev babel-preset-es2015 rimraf
npm i -g @babel/core @babel/node
npm i @babel/preset-env @babel/core --save-dev

# 安装启动webpack server的包
npm i webpack-dev-server -D
# 安装ts相关
npm i -D webpack webpack-cli ts-loader