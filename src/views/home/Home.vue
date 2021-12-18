<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center><p>购物街</p></template></nav-bar
    >
    <!-- <padding padding-height = 44></padding> -->
    
        <scroll class="content">
          <home-swiper :banners="banners"></home-swiper>
          <recommend-view :recommends="recommends"></recommend-view>
          <feature-view></feature-view>
          <tab-control
            class="tab-control"
            :titles="['流行', '新款', '精选']"
            @tabClick="tabClick($event)"
          ></tab-control>
          <goods-list :goods="showGoods"></goods-list>
          <!-- 撑起底部内容高度 -->
          <padding :padding-height="8"></padding>
        </scroll>
        <!-- 原生监听属性 不加没反应 监听组件根元素的原生事件 -->
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
import padding from "components/common/padding/padding";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/tabControl";
import goodsList from "components/content/goods/goodsList";
import Scroll from "components/common/scroll/Scroll";
import backTop from "components/content/backTop/backTop";

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
    goodsList,
    Scroll,
    backTop
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
      currentType: "pop",
    };
  },
  created() {
    // 必须写this 包装一层
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    //事件监听
    tabClick(index) {
      this.currentType = index == 0 ? "pop" : index == 1 ? "new" : "sell";
    },
    backClick(){
      console.log('test');
    },

    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        // console.log(this.goods[type].list);
        // console.log('------');
        this.goods[type].list = this.goods[type].list.concat(res.data.list);
        this.goods[type].page++;
        // console.log(this.goods[type].list);
        // console.log(this.goods[type].page);
      });
    },
  },
};
</script>

<style scoped>
#home{
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  /* z-index: 1; */
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content{
  height:calc(100% - 94px);
  overflow: hidden;
}

</style>
