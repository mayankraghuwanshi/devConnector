if(process.env.NODE_ENV === "production"){
  module.exports = require("./key_production")
}else{
  module.exports = require('./key_dev')
}