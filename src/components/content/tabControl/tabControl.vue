<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click = "itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "tanControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {},
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  height: 35px;
  line-height: 35px;
  background-color: #fff;
  /* margin-bottom: 10px; */
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
    /* width: 100%; */
  padding: 0px 10px 3px 10px;
}
.active span{
  border-bottom: solid 2px var(--color-tint);
  color: var(--color-high-text);
  font-weight: 800;
}
</style>
