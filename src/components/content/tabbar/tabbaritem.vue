<template>
  <div class="tab-bar-item" :style = "activeStyle" @click = 'itemClick'>
      <slot v-if = "!isActive" name = 'item-icon'></slot>
      <slot v-else name = 'item-icon-active'></slot>

    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" /> -->
    <slot name = 'item-text'></slot>
    <!-- <p>首页</p> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      
    };
  },
  computed:{
    isActive(){
      // console.log(this.$route.path);
      // console.log(this.path+'++++++');
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  components: {},
  methods: {
    itemClick(){
      this.$router.push(this.path)

    }
  },
};
</script>

<style>
.tab-bar-item img {
  width: 25px;
  vertical-align: middle;
}
.tab-bar-item {
  padding:6px 0;
  /* margin-top: 5px; */
  flex: 1;
  
  text-align: center;
  height: 49px;
  font-size: 13px;
  /* line-height: 49px; */
}
/* .active{
  color: this.activeColor;
} */
</style>
