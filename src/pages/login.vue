<template>
  <div>
    <van-nav-bar title='手机登录' left-arrow
    fixed 
    right-text="注册"
      @click-right="$router.push('/reg')"
    />
    <div class="wrap">
      <img src="../assets/images/login.jpg" alt="">
       <!-- 表单项 -->
    <van-form @submit="denglu">
      <van-field
        v-model="userInfo.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true,validator, message: '请填写手机号' }]"
      />
      <van-field
        v-model="userInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button
        >
      </div>
    </van-form>
    </div>
  </div>
</template>
<script>
import { Login } from "../util/axios";
import { Toast } from "vant";
export default {
   data() {
    return {
      userInfo: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
        validator(val) {
      return /1\d{10}/.test(val);
    },
    denglu(){
        Login(this.userInfo).then(res=>{
          if(res.code==200){
                sessionStorage.setItem("user", JSON.stringify(res.list));
                Toast.success(res.msg);
                this.$router.push("/mine");
            }else{
                Toast.fail(res.msg);
            }
        })
    }
  }
};
</script>
<style  scoped>
body {
  background-color: #999;
}
.wrap {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 0.2rem;
  overflow: hidden;
}
.van-nav-bar {
  /* background: #215aa5; */
  background: wheat;
  opacity: 0.8;
  font-family: Helvetica;
  font-size: 0.34rem;
  color: #ffffff!important;
}
.van-field{
    margin-top: .6rem;
}
.van-button{
    /* background: #FF6040; */
    outline: none;
    border: 0;
    width: 6rem;
    height: 1rem;
    border-radius: 0;
    margin: 0 auto;
    margin-top: 1rem;
    background-color:dodgerblue;
    border-radius: .3rem;
}
img{
    width: 3.6rem;
    height: 1.2rem;
    margin: 0 auto;
    margin-top: 4rem;
}
</style>