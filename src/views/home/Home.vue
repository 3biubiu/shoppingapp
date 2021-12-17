<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center><p>购物街</p></template></nav-bar
    >
    <!-- <padding padding-height = 44></padding> -->
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <goods-list :goods = "goods['pop'].list"></goods-list>
    <!-- 撑起底部内容高度 -->
    <padding :padding-height="800"></padding>
  </div>
</template>

<script>
import padding from "components/common/padding/padding";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/tabControl";
import goodsList from "components/content/goods/goodsList"

import { getHomeMultidata, getHomeGoods } from "network/home";

import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/Feature.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    padding,
    TabControl,
    goodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    // 必须写this 包装一层
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');



  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        // console.log(this.goods[type].list);
        // console.log('------');
        this.goods[type].list = this.goods[type].list.concat(res.data.list )
        this.goods[type].page ++
        // console.log(this.goods[type].list);
        // console.log(this.goods[type].page);
      });
    },
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;

  /* z-index: 1; */
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
