/*
 * @Author: maoyuyu
 * @Date: 2020-06-20 17:01:38
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-20 17:35:13
 * @Description: 
 */ 

const path = require('path')

const rootPath = path.join(__dirname, '../../')

const getResolvePath = (...p) => path.join(rootPath, ...p)

module.exports = {
  rootPath,
  getResolvePath
}

