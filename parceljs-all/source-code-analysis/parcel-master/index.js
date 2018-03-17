// Node 8 supports native async functions - no need to use compiled code!
// Node 8 以上版本的直接使用源码 src 目录下，Bundler.js
module.exports = parseInt(process.versions.node, 10) < 8
  ? require('./lib/Bundler')
  : require('./src/Bundler');
