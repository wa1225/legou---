<template>
  <div>
    <!-- 标题 -->
    <div class="top">
      <h3>小U商城</h3>
    </div>
    <!-- 搜索栏 -->
    <div class="search_cation">
      <div class="search_content">
        <span class="iconfont">&#xe50b;</span>
        <input type="text" name="search" placeholder="按内容搜索" />
      </div>
      <!-- nav栏目 -->
      <div class="nav">
          <ul>
            <li class="active">综合推荐</li>
            <li>销量</li>
            <li>价格<span class="iconfont">&#xe692;</span> </li>
            <li>好评度</li>
            <li>店铺</li>
            <li><span class="iconfont">&#xe50e;</span>筛选</li>
          </ul>
      </div>
    </div>

    <!-- 筛选双11 -->
    <div class="double">
      <h1>筛选11.11大促商品</h1>
    </div>
    <!-- 商品列表 -->
    <div class="wrap">
      <div class="list" v-for="item in list" :key="item.id" @click="deil(item.id)">
        <div class="left">
          <img :src="item.img" alt="">
        </div>
        <div class="right">
          <h3>{{item.goodsname}}</h3>
          <p class="p1">敏感肌可用,控油祛痘、男女可用...</p>
          <font>
            <span class="sp1"><i>￥</i>{{item.price}}</span>
            <span class="sp2">￥{{item.market_price}}</span>
            <span class="sp3">999人已付款</span>
          </font>
          <p class="p2">
            11.11限时299元起
          </p>
          <p class="p3">
            <span>999条评论</span>
            <span>99.9%好评</span>
          </p>
        </div>

      </div>
      <!-- 2 -->
       <div class="list">
        <div class="left">
          <img src="../assets/images/commodity/02.png" alt="">
        </div>
        <div class="right">
          <h3>溪木原山茶花洁面泡沫 氨基酸...</h3>
          <p class="p1">敏感肌可用,控油祛痘、男女可用...</p>
          <font>
            <span class="sp1"><i>￥</i>999</span>
            <span class="sp2">￥1099</span>
            <span class="sp3">999人已付款</span>
          </font>
          <p class="p2">
            11.11限时299元起
          </p>
          <p class="p3">
            <span>999条评论</span>
            <span>99.9%好评</span>
          </p>
        </div>

      </div>
      <!-- 2 -->
       <div class="list">
        <div class="left">
          <img src="../assets/images/commodity/03.png" alt="">
        </div>
        <div class="right">
          <h3>溪木原山茶花洁面泡沫 氨基酸...</h3>
          <p class="p1">敏感肌可用,控油祛痘、男女可用...</p>
          <font>
            <span class="sp1"><i>￥</i>999</span>
            <span class="sp2">￥1099</span>
            <span class="sp3">999人已付款</span>
          </font>
          <p class="p2">
            11.11限时299元起
          </p>
          <p class="p3">
            <span>999条评论</span>
            <span>99.9%好评</span>
          </p>
        </div>

      </div>
      <!-- 2 -->
       <div class="list">
        <div class="left">
          <img src="../assets/images/commodity/04.png" alt="">
        </div>
        <div class="right">
          <h3>溪木原山茶花洁面泡沫 氨基酸...</h3>
          <p class="p1">敏感肌可用,控油祛痘、男女可用...</p>
          <font>
            <span class="sp1"><i>￥</i>999</span>
            <span class="sp2">￥1099</span>
            <span class="sp3">999人已付款</span>
          </font>
          <p class="p2">
            11.11限时299元起
          </p>
          <p class="p3">
            <span>999条评论</span>
            <span>99.9%好评</span>
          </p>
        </div>

      </div>
      <!-- 2 -->
       <div class="list">
        <div class="left">
          <img src="../assets/images/commodity/01.png" alt="">
        </div>
        <div class="right">
          <h3>溪木原山茶花洁面泡沫 氨基酸...</h3>
          <p class="p1">敏感肌可用,控油祛痘、男女可用...</p>
          <font>
            <span class="sp1"><i>￥</i>999</span>
            <span class="sp2">￥1099</span>
            <span class="sp3">999人已付款</span>
          </font>
          <p class="p2">
            11.11限时299元起
          </p>
          <p class="p3">
            <span>999条评论</span>
            <span>99.9%好评</span>
          </p>
        </div>

      </div>
       
    </div>
  </div>
</template>
<script>
import {getCateGoods} from '../util/axios'
export default {
  data() {
    return {
      list:[],
      goodlist: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
  },
 mounted() {
   this.getCateGoods();
 },
     methods: {
       deil(id){
         this.$router.push({
            path:'/detail',
            query:{
                id
            }
            })
       },
     async getCateGoods() {
      // console.log(res.list)
      this.list = await getCateGoods({
        fid:this.$route.query.id
      });
      console.log(this.list);
    },
  },
  
};
</script>

<style src='../assets/css/list.css' scoped>
</style>
