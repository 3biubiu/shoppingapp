<template>
  <div class="">
      <tab-bar>
      <tab-bar-item activeColor = "red" path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:item-text >
          <p>首页</p>
        </template>
      </tab-bar-item>
      <tab-bar-item activeColor = "red" path="/categoy">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:item-text >
          <p>分类</p>
        </template>
      </tab-bar-item>
      <tab-bar-item activeColor = "red" path="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <template v-slot:item-text >
          <p>购物车</p>
        </template>
      </tab-bar-item>
      <tab-bar-item activeColor = "red" path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
          
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:item-text >
          <p>我的</p>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import TabBar from "../../content/tabbar/TabBar.vue";
import tabBarItem from "../../content/tabbar/tabbaritem.vue";
export default {
  data() {
    return {

    }
  },
  components: {
      TabBar,
      tabBarItem
  }
}
</script>

<style>

</style>
