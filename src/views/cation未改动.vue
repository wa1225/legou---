<template>
  <div>
    <!-- 标题 -->
    <div class="top">
      <h3>分类</h3>
    </div>
    <!-- 搜索栏 -->
    <div class="search_cation">
      <div class="search_content">
        <span class="iconfont">&#xe50b;</span>
        <input type="text" name="search" placeholder="按内容搜索" />
      </div>
    </div>
    <!-- 主体部分 -->
    <div class="wrapt">
      <div class="wrap_left">
        <h3>本周特惠</h3>
        <ul>
          <li class="active">美妆</li>
          <li>酒水</li>
          <li>小家电</li>
          <li>服饰</li>
          <li>鞋靴</li>
          <li>饰品</li>
          <li>箱包</li>
          <li>饰品</li>
          <li>家电</li>
          <li>厨卫</li>
          <li>汽配</li>
        </ul>
      </div>
      <div class="wrap_right">
        <div class="list">
          <h3>热门精选</h3>
          <ul>
            <li>
              <img src="../assets/images/commodity/01.png" alt />
              <p>热卖爆品</p>
            </li>
            <li>
              <img src="../assets/images/commodity/02.png" alt />
               <p>新品</p>
            </li>
            <li>
              <img src="../assets/images/commodity/03.png" alt />
               <p>好礼专区</p>
            </li>
            <li>
              <img src="../assets/images/commodity/04.png" alt />
               <p>美容馆</p>
            </li>
            <li>
              <img src="../assets/images/commodity/05.png" alt />
               <p>基础护肤</p>
            </li>
            <li></li>
          </ul>
        </div>
        <div class="list">
          <h3>面部护肤</h3>
          <ul>
            <li>
              <img src="../assets/images/commodity/01.png" alt />
              <p>热卖爆品</p>
            </li>
            <li>
              <img src="../assets/images/commodity/02.png" alt />
               <p>新品</p>
            </li>
            <li>
              <img src="../assets/images/commodity/03.png" alt />
               <p>好礼专区</p>
            </li>
            <li>
              <img src="../assets/images/commodity/04.png" alt />
               <p>美容馆</p>
            </li>
            <li>
              <img src="../assets/images/commodity/05.png" alt />
               <p>基础护肤</p>
            </li>
            <li></li>
          </ul>
        </div>
        <div class="list">
          <h3>个护工具</h3>
          <ul>
            <li>
              <img src="../assets/images/commodity/01.png" alt />
              <p>热卖爆品</p>
            </li>
            <li>
              <img src="../assets/images/commodity/02.png" alt />
               <p>新品</p>
            </li>
            <li>
              <img src="../assets/images/commodity/03.png" alt />
               <p>好礼专区</p>
            </li>
            <li>
              <img src="../assets/images/commodity/04.png" alt />
               <p>美容馆</p>
            </li>
            <li>
              <img src="../assets/images/commodity/05.png" alt />
               <p>基础护肤</p>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getTree} from '../util/axios'
export default {
  data() {
    return {
      cart:[],
      
    }
  },
  mounted() {
    this.getTree();
  },

  methods: {
    //获取秒杀活动
     async getTree() {
      // console.log(res.list)
      this.cart = await getTree({});
      console.log(this.cart);
    },
  },
  
}
</script>
<style src='../assets/css/ation.css' scoped>
/* @import "../assets/css/ation.css"; */
    
</style>
