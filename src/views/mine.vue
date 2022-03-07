<template>
  <div>
    <div class="top">
      <h3>我的</h3>
    </div>
    <div class="wrap">
       <div class="login">
         <div class="left">
            <img src="https://img0.baidu.com/it/u=1395467271,2328643467&fm=26&fmt=auto&gp=0.jpg" alt="">
            <p>
              <span v-if="userInfo">欢迎大老板</span>
               <span v-else>未登录</span>
              <a href="#">完善资料让小U更懂您</a>
            </p>
         </div>
         <div class="right">
           <img src="../assets/images/red_envelopes.png" alt="">
           <span>每日签到</span>

         </div>
       </div>
       <div class="menu">
         <ul>
           <li>
             <p>12</p>
             <span>我的收藏</span>
           </li>
           <li>
             <p>12</p>
             <span>浏览记录</span>
           </li>
           <li>
             <p>￥0</p>
             <span>我的红包</span>
           </li>
           <li>
             <p>12</p>
             <span>优惠卷</span>
           </li>

         </ul>

       </div>
       <div class="order">
         <div class="title">
           <p>我的订单</p>
           <a href="#">全部订单 ></a>
         </div>
         <div class="content">
           <ul>
             <li>
               <img src="../assets/images/order/payment.png" alt="">
               <span>待付款</span>
             </li>
             <li>
               <img src="../assets/images/order/delivery.png" alt="">
               <span>待收货</span>
             </li>
             <li>
               <img src="../assets/images/order/evaluation.png" alt="">
               <span>评价</span>
             </li>
             <li>
               <img src="../assets/images/order/service.png" alt="">
               <span>售后/退款</span>
             </li>
           </ul>
         </div>

       </div>
    </div>
    <!--  -->
    <div class="list_content">
      <ul>
        <li>
          <p><img src="../assets/images/function/address.png" alt="">地址管理</p>
          <span>></span>
        </li>
        <li>
          <p><img src="../assets/images/function/wallet.png" alt="">我的钱包</p>
          <span> 剩余200U币 ></span>
        </li>
        <li>
          <p><img src="../assets/images/function/QR_code.png" alt="">我的二维码</p>
          <span>></span>
        </li>
        <li>
          <p><img src="../assets/images/function/partner.png" alt="">我的小伙伴</p>
          <span>></span>
        </li>
        <li>
          <p><img src="../assets/images/function/free.png" alt="">0元试用</p>
          <span>></span>
        </li>
      </ul>

    </div>
    <div class="tuichu">
      <van-button type="danger" @click="logout"  v-if="userInfo" >你确定要离我而去嘛？？？？？</van-button>
      <van-button type="primary"  @click="$router.push('/login')" v-else>快来点我登录吧</van-button>
    </div>




  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {},
    }
  },
    mounted() {
    //通过对存储的判断，然后渲染不同内容展示
    this.userInfo = sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : null;
  },
  methods: {
    logout(){
      sessionStorage.removeItem('user');
      this.$router.push('/login')
    }
  },
}
</script>

<style src="../assets/css/mine.css">

</style>
