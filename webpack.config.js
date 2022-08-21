const path = require('path')

module.exports = {
  devServer: {
    static: path.resolve(__dirname),
    port: 8080,
    hot: true
  }
}
