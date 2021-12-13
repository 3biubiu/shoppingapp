module.exports = {
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