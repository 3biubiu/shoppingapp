<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.acm" :goods-item="item" />
  </div>
</template>

<script type="text/ecmascript-6">
import goodsListItem from "./goodsListItem.vue";

export default {
  name: "goodList",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    goodsListItem,
  },
};
</script>

<style scoped>
.goods {
  padding-top: 2px;
  /* margin-right: 8px; */
  /* width: 100%; */
  display: flex;
  flex-flow: row wrap;
  /* height: 3200px; */
  justify-content: space-evenly;
}
/* .goods::before, */
/* .goods::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 1;
} */

</style>
