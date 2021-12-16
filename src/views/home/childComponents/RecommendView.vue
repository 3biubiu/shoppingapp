<template>
  <div class="recommends">
      <div v-for = "item in recommends" :key = "item.acm" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <p>{{item.title}}</p>
          </a>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'RecommendView',
  data() {
    return {

    }
  },
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {

  }
}
</script>

<style>
    .recommends{
        display: flex;
        /* width: 100%; */
        margin-top: 5px;
        padding-bottom: 20px;
        border-bottom: solid 8px #e9e9e9;
    }
    .recommend-item{
        flex: 1;
        width: 0;
        text-align:center;
        font-size: 11px;
    }
    .recommend-item img{
        width: 85%;
        margin-bottom: 5px;
        
    }
</style>
