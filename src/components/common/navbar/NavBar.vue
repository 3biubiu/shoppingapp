<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.nav-bar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;
  /* background-color: #ff8198;这样设置颜色不好 */
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 1000;
  /* color:white */
}
.left,
.right {
  width: 60px;
  /* background-color: red; */
}
.center {
  flex: 1;
  /* background-color: blueviolet; */
}
</style>
