<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="" />
      <div class="goods-info">
        <p>{{ goodsItem.title }}</p>
        <span class="price">{{ goodsItem.price }}</span>
        <span class="cfav-icon"></span>
        <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "goodsListItem",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
};
</script>

<style scoped>
.goods-item {
  /* margin: 8px 0 0 8px; */
  width: 45%;
  /* flex: 1 1 1; */
  /* flex-basis: ; */
  text-align: center;
  position: relative;
  padding-bottom: 40px;
}
/* .goods-item:nth-child(2n+1) { order: 1; }
.goods-item:nth-child(2n) { order: 2; } */
/* .item:nth-child(3n)   { order: 3; } */
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  width: 100%;
  position: absolute;
  /* height: ; */
  bottom: 0px;
}
.goods-item p {
  /* width: 90%; */
  overflow: hidden;
  /* //超出的文本隐藏 */
  text-overflow: ellipsis;
  /* //溢出用省略号显示 */
  white-space: nowrap;
  /* //溢出不换行 */
  font-size: 5px;
  margin: 0 auto;
}
.price {
  font-size: 14px;
  color: var(--color-high-text);
}
.cfav-icon {
  display: inline-block;
  background: url(~assets/img/common/collect.svg) no-repeat center;
  background-size: contain;
  width: 10px;
  height: 10px;
  margin-left: 5px;
}
.collect {
  font-size: 12px;
}
</style>
