<template>
  <div id="tab-bar">
    <slot></slot>
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
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  /* width: 100%; */
  left: 0px;
  right: 0px;
  bottom: 0px;

  box-shadow: 0px -2px 3px rgba(178, 173, 173, 0.2);
}

</style>
