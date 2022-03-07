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
    <div class="sortInfo">
      <div class="left">
        <van-sidebar v-model="activeKey" @change="changeBar">
          <van-sidebar-item :title="item.catename" v-for="item in cart" :key="item.id" />
        </van-sidebar>
      </div>
      <div class="right">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in send" :key="item.id" :to="'/list?id='+item.id">
            <van-image class="imgUrl" :src="item.img" />
            <p>{{item.catename}}</p>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>-->
    </div>
  </div>
</template>
<script>
import { getTree } from "../util/axios";
export default {
  data() {
    return {
      cart: [],
      activeKey: 0,
      send: []
    };
  },
  mounted() {
    this.getTree();
  },

  methods: {
    changeBar() {
      console.log(this.activeKey, "activeKey");
      this.send = this.cart[this.activeKey].children;
    },
    //获取秒杀活动
    async getTree() {
      this.cart = await getTree({});
      this.send = this.cart[this.activeKey].children;
      console.log(this.cart);
    }
  }
};
</script>
<style src='../assets/css/ation.css' scoped>
</style>
