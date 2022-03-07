<template>
  <div>
    <!-- <h1>一级路由index</h1> -->
    <router-view></router-view>
    <div class="footer">
      <router-link to="/home" tag="div" active-class="active">
      <span class="iconfont">&#xe501;</span>
      <i>首页</i>
      </router-link>
      <router-link to="/cation" tag="div" active-class="active">
      <span class="iconfont">&#xe505;</span>
      <i>分类</i>
      </router-link>
      <router-link to="/shop" tag="div" active-class="active">
      <span class="iconfont">&#xe504;</span>
      <i>购物车</i>
      </router-link>
      <router-link to="/mine" tag="div" active-class="active">
      <span class="iconfont">&#xe502;</span>
      <i>我</i>
      </router-link>
       
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style src='../assets/css/footer.css' scoped>
/* @import "../assets/css/footer.css"; */

</style>
