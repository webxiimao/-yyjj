/*
 * @Author: maoyuyu
 * @Date: 2020-06-20 16:56:18
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-20 17:36:11
 * @Description: 
 */ 

const util = require('../libs/utils/util')

process.env.VUE_CLI_SERVICE_CONFIG_PATH = util.getResolvePath('libs', 'config', 'vue.config.js')

require('@vue/cli-service/bin/vue-cli-service')