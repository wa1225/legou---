<template>
  <div>
    <div class="top-nav">
      <div class="in-top">
        <span>代用名 &nbsp;188 **** 8888</span>
        <br />
        <span>北京 北京市 昌平区 朱辛庄中公教育实训基地IT教学楼 2号楼 2202室</span>
      </div>
    </div>

    <!-- 123 -->
    <div class="middle-a">
      <div class="top-one">
        <div>
          <i class="iconfont icongouwuche"></i>
          <span>品牌精选</span>
        </div>
        <div>
          <span>已免运费</span>
          <span></span>
          <span>
            <a href>领券</a>
          </span>
        </div>
      </div>
      <div class="goods-one">
        <a href="#">
          <img src="../assets/images/commodity/02.png" alt />
          <div class="bbox">
            <span>溪牧原山茶花洁面泡沫 氨基酸洗面奶150ML 浸透舒缓</span>

            <div class="pic clearfix">
              <span>¥</span>
              <span>999</span>
              <div class="fr">
                <i class="iconfont icon-chenghao"></i>
                <span class="span-1">1</span>
              </div>
            </div>
            <div>
              <div class="div3">7天无理由退货</div>
              <div class="div4">特价</div>
            </div>
          </div>
        </a>
      </div>

      <div class="goods-one">
        <a href>
          <img src="../assets/images/commodity/01.png" alt />
          <div class="bbox">
            <span>水肌美男士清爽控油洗面奶100g</span>

            <div class="pic clearfix">
              <span>¥</span>
              <span>999</span>
              <div class="fr">
                <i class="iconfont icon-chenghao"></i>
                <span class="span-1">1</span>
              </div>
            </div>
            <div>
              <div class="div3">7天无理由退货</div>
              <div class="div4">特价</div>
            </div>
          </div>
        </a>
      </div>

      <div class="div-aa">
        <span>发票类型</span>
        <div>
          <span class="www">不开发票</span>
          <i class="iconfont icongt"></i>
        </div>
      </div>

      <div class="div-aa">
        <span>售后免邮</span>
        <span>部分商家赠送</span>
      </div>

      <div class="div-aa">
        <span>买家留言</span>
        <span>填写内容需要与商家协商并确认，45字以内</span>
      </div>
    </div>
    <!-- 123 -->
    <div class="middle-b">
      <div class="div-aa">
        <span>商品金额</span>

        <span>¥1998</span>
      </div>
      <div class="div-aa div-ab">
        <span>优惠活动</span>
        <span>-¥200</span>
      </div>
      <div class="div-aa">
        <span>优惠券</span>
        <span>新人可用</span>
      </div>
      <div class="div-aa">
        <span>售后免邮</span>
        <span>部分商家赠送</span>
      </div>
      <div class="div-aa">
        <span>售后评价</span>
        <span>良好</span>
      </div>
    </div>
    <div class="fix-0">
      <div class="div-b">
        <span>合计</span>
        <span>已免运费</span>
      </div>
      <div class="div-c">
        <span>¥1998</span>
        <span>已优惠¥200元</span>
      </div>

      <div class="div-d">
        <a href>确认订单</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
@import "../assets/css/order.css";
html {
  width: 100%;
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
  background-color: #f2f2f2;
}
.fix {
  min-width: 320px;
  max-width: 750px;
  position: fixed;
  width: 100%;
  height: 1.66rem;
  background-color: #fff;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  padding: 0.1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.fix .text1 {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
}
.fix .text1 .sbox {
  width: 0.9rem;
  height: 0.78rem;
}
.fix .text1 .sbox a {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #999999;
}
.fix .text1 .sbox .tu {
  position: relative;
  width: 0.36rem;
  height: 0.4rem;
}
.fix .text1 .sbox img {
  width: 0.36rem;
  height: 0.4rem;
  background-color: #fff;
}
.fix .text1 .sbox span {
  /* position: absolute;
    bottom: 0;
     left: 50%;
    transform: translateX(-50%); */
  font-size: 0.24rem;
  transform: scale(0.8);
}
.fix .text1 .sbox .shang-bg {
  position: absolute;
  top: 0;
  left: 0;

  z-index: 2;
}
.fix .text1 .sbox .xia-bg {
  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;
}

.fix .text1 .sbox a:hover span {
  color: #ff6040;
}

.fix .text1 .sbox a:hover .shang-bg {
  z-index: -1;
}
.fix .text2 {
  width: 2.68rem;
  height: 0.68rem;
}
.fix .text2 img {
  width: 100%;
  height: 100%;
}
</style>