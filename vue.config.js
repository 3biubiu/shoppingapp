const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", resolve("./src"))
  //     .set("components", resolve("./src/components"))
  //     .set("views", resolve("./src/views"))
  //     .set("assets", resolve("./src/assets"))
  //     .set("common", resolve("./src/common"))
  //     .set("network", resolve("./src/network"));

    configureWebpack: {
      resolve: {
        //extensions:[] 用来省略后缀名
        alias: {
          //'@':'src' 内部已经配置过
          'assets': "@/assets",
          'common': "@/common",
          'components': "@/components",
          'network': "@/network",
          'views' : '@/views',
          // 'router': "@/router",引用次数少
          // 'store': "@/store", this.$就能引用
        },
      },
  
  },
};
