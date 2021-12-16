<template>
  <div class="padding" :style = "{height:paddingHeight+'px'}"></div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'padding',
  data() {
    return {};
  },
  components: {},
  props:{
    paddingHeight:{
      type:Number,
      default:44
    }
  }
};
</script>

<style>

</style>
