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
BScroll.use(ObserveDOM);
BScroll.use(Pullup);

export default {
  data() {
    return {
      scroll: null,
    };
  },
  components: {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 2,
      pullUpLoad: true,
      observeDOM: true,
      click:true
    });
  },
};
</script>

<style>
</style>
