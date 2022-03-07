<template>
  <div>
    <van-nav-bar title="用户注册" left-arrow 
    right-text="登录"
      @click-right="$router.push('/login')"
    />
    <!-- 表单项 -->
    <div class="wrap">
        <img src="../assets/images/orange.png" alt="">
    <van-form @submit="register">
      <van-field
        v-model="regList.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, validator, message: '请填写手机号' }]"
      />
      <van-field
        v-model="regList.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="regList.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
    </div>
  </div>
</template>
<script>
import {Reg} from '../util/axios'
import { Toast } from "vant";
export default {
  data() {
    return {
      regList: {
        phone: "", //手机号
        nickname: "", //昵称
        password: "" //密码
      }
    };
  },
  methods: {
    //自定义验证器 返回一个true 或者false  true就是验证成功，false验证失败
    validator(val) {
      return /1\d{10}/.test(val);
    },
    register(){
        Reg(this.regList).then(res=>{
            if(res.code==200){
                Toast.success(res.msg);
                this.$router.push("/login");
            }else{
                Toast.fail(res.msg);
            }
        })

    }
  }
};
</script>
<style scoped>

.van-nav-bar {
  background: #ff6040;
  opacity: 0.8;
  font-family: Helvetica;
  font-size: 0.34rem;
  color: #ffffff;
}
.van-button{
    background: #FF6040;
    outline: none;
    border: 0;
    width: 6rem;
    height: 1rem;
    border-radius: 0;
    margin: 0 auto;
    
}
.wrap {
  width: 7.1rem;
  height: 13.4rem;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 0.2rem;
  overflow: hidden;
}
img{
    width: 3.6rem;
    height: .9rem;
    margin: 0 auto;
    margin-top: 3.8rem;
}
</style>