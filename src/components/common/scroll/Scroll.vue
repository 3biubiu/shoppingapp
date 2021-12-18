<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";
BScroll.use(ObserveImage);
BScroll.use(ObserveDOM);
BScroll.use(Pullup);

export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    // return不出去啊😂
    // scrollPosition(){
    //   this.scroll.on('scroll',(position) => {
    //   return position
    // })
    // }
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 1. probeType 为 0，在任何时候都不派发 scroll 事件，
      // 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
      // 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
      // 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      click: true, //控制div元素点击而非button 按钮管不着
      observeImage:{
        debounceTime: 200//防抖
      }
        // 开启 observe-image 插件
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    //监听上拉事件
    this.scroll.on("pullingUp", () => {
      // console.log('test');
      this.$emit("pullingUp");
    });
  },
};
</script>

<style>
</style>
