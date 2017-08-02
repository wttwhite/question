var merge = require('webpack-merge')
var prodEnv = require('./prod.env')     

module.exports = merge(prodEnv, {    //这个为什么要module.exports?
  NODE_ENV: '"development"'
})
