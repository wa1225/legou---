<template>
  <div>
    <!-- top栏和导航栏 -->
    <div class="top">
      <h3>小U商城</h3>
    </div>
    <div class="wrap">
      <div class="wrap_top">
        <div class="position">
          <span class="iconfont">&#xe6ee;</span>
        </div>
        <div class="logo">
          <img src="../assets/images/white.png" alt />
        </div>
        <div class="search">
          <span class="iconfont">&#xe50b;</span>
          <input type="text" placeholder="按内容搜索" />
        </div>
        <div class="bus">
          <span class="iconfont">&#xe651;</span>
        </div>
      </div>
      <div class="nav_bottom">
        <ul>
          <li>
            <a href="#">推荐</a>
          </li>
          <li v-for="item in cate" :key="item.id">
            <a href="#">{{item.catename}}</a>
          </li>
          <!-- <li>
            <a href="#">鞋包</a>
          </li>
          <li>
            <a href="#">居家</a>
          </li>
          <li>
            <a href="#">母婴</a>
          </li>
          <li>
            <a href="#">美妆</a>
          </li>-->
          <li>
            <span class="iconfont">&#xe6a3;</span>
            <a href="#">分类</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- banner -->
    <!-- <div class="banner">
      <ul>
        <li>
          <img src="../assets/images/mid.png" alt />
        </li>
      </ul>
      <p>
        <span class="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </div>-->
    <!-- 插件轮播图 -->
    <!-- <div class="swiper-container">
    <div class="swiper-wrapper">-->
    <!-- <div class="swiper-slide" v-for="item in bannerlist" :key="item.id"><img :src="item.img" alt=""></div> -->
    <!-- <div class="swiper-slide"><img src="../assets/images/mid.png" alt=""></div>
      <div class="swiper-slide"><img src="../assets/images/mid.png" alt=""></div>
      <div class="swiper-slide"><img src="../assets/images/mid.png" alt=""></div>
    <div class="swiper-slide"><img src="../assets/images/mid.png" alt=""></div>-->
    <!-- </div>
     <div class="swiper-pagination"></div>
    </div>-->
    <!-- vant轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerlist" :key="item.id">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 导购 -->
    <div class="guide">
      <ul>
        <li>
          <a href="#">
            <img src="../assets/images/kingkong/seckill.png" alt />
            <span>限时秒杀</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/kingkong/top.png" alt />
            <span>畅销商品</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/kingkong/brand.png" alt />
            <span>品质大牌</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/kingkong/selfsupport.png" alt />
            <span>小U自营</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/kingkong/integral.png" alt />
            <span>积分商城</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 每日活动 -->
    <div class="activity">
      <div class="a_left">
        <div class="title">
          <h3>限时秒杀</h3>
          <a href="#">查看更多 ></a>
        </div>
        <p class="p1">每天0点场 &nbsp;&nbsp;&nbsp; 好货秒不停</p>
        <p class="p2">
          <span>05</span>
          <i>:</i>
          <span>20</span>
          <i>:</i>
          <span>48</span>
        </p>
      </div>
      <div class="a_right">
        <div class="b_top">
          <h3>品牌上新</h3>
          <p class="p1">9点整,抢大牌</p>
          <p class="p2">疯抢红包 ></p>
        </div>
        <div class="b_bottom">
          <h3>日用好物</h3>
          <p class="p1">愿君多采摘</p>
          <p class="p2">塞满奖券 ></p>
        </div>
      </div>
    </div>
    <!-- 每日一看 -->
    <div class="daohang">
      <div class="daohang_content">
        <ul>
          <li v-for="(item,index) in nav" :key="item.id" @click="btn(index)" :class="[index==num?'active':'']">
           {{item.name}}
          </li>
          <!-- <li>
            <a href="#">新品上市</a>
          </li>
          <li>
            <a href="#">所有商品</a>
          </li> -->
          <!-- <li>
            <a href="#">只看商品</a>
          </li> -->
        </ul>
      </div>
    </div>
    <!-- 列表页 -->
    <div class="commodity"   v-for="(item,idex) in goods" :key="idex" v-show="num == idex">
      <div class="commodity_content" v-for="list in item.content" :key="list.id">
        <div class="com_left">
          <img :src="list.img" alt />
        </div>
        <div class="com_right">
          <div class="txt1">{{list.goodsname}}</div>
          <div class="txt2">
            ¥
            <span>{{list.price}}</span>
          </div>
          <div class="txt3">已售999件</div>
          <div class="txt4">立即抢购</div>
        </div>
      </div>
    </div>
    <!-- 列表页2 -->
      <!-- <div class="commodity">
      <div class="commodity_content" v-for="item in newlist" :key="item.id">
        <div class="com_left">
          <img :src="item.img" alt />
        </div>
        <div class="com_right">
          <div class="txt1">{{item.goodsname}}</div>
          <div class="txt2">
            ¥
            <span>{{item.price}}</span>
          </div>
          <div class="txt3">已售999件</div>
          <div class="txt4">立即抢购</div>
        </div>
      </div>
    </div> -->

    <!-- 列表三 -->
     <!-- <div class="commodity">
      <div class="commodity_content" v-for="item in hotlist" :key="item.id">
        <div class="com_left">
          <img :src="item.img" alt />
        </div>
        <div class="com_right">
          <div class="txt1">{{item.goodsname}}</div>
          <div class="txt2">
            ¥
            <span>{{item.price}}</span>
          </div>
          <div class="txt3">已售999件</div>
          <div class="txt4">立即抢购</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import Swiper from 'swiper'
// import vtitle from "./components/title.vue";
import { getBanner, getCate, getCkill,getGoods} from "../util/axios";

export default {
  data() {
    return {
      nav:[
        {
          id:1,
          name:'热卖商品'
        },
        {
          id:2,
          name:'新品上市'
        },
        {
          id:3,
          name:'所有商品'
        }
      ],
      bannerlist: [],
      cate: [],
      ms:[],
      goods:[],
      hotlist:[],
      newlist:[],
      shoplist:[],
      num:0,
      // shoplist: [
      //   {
      //     id: "1",
      //     title: "雅诗兰黛染发膏60ml",
      //     pirce: "123.00",
      //     sales: "800",
      //     imgurl: require("../assets/images/shop_4.jpg")
      //   },
      //   {
      //     id: "2",
      //     title: "雅诗兰黛染发膏60ml",
      //     pirce: "123.00",
      //     sales: "800",
      //     imgurl: require("../assets/images/shop_4.jpg")
      //   },
      //   {
      //     id: "3",
      //     title: "雅诗兰黛染发膏60ml",
      //     pirce: "123.00",
      //     sales: "800",
      //     imgurl: require("../assets/images/shop_4.jpg")
      //   }
      // ]
    };
  },
  mounted() {
    // this.$axios
    //   .get("api/getbanner")
    //   .then((res) => {
    //     if(res.data.code==200){
    //       this.bannerlist = res.data.list;
    //       console.log(this.bannerlist)
    //     }
    //     console.log(res, "成功之后的响应");
    //   })
    //   .catch((err) => {
    //     console.log(err, "错误捕获");
    //   });
    this.getCate();
    this.getCkill();
    this.getGoods();
    getBanner().then(res => {
      if (res.code == 200) {
        this.bannerlist = res.list;
      }
    });
  },
  methods: {
    btn(id){
      this.num = id
      console.log(this.num)
      console.log(this.shoplist)
      console.log(this.goods)
    },
    //获取首页分类
    async getCate() {
      // console.log(res.list)
      this.cate = await getCate({});
      // console.log(this.cate);
    },
    //获取秒杀活动
     async getCkill() {
      // console.log(res.list)
      this.ms = await getCkill({});
      console.log(this.ms);
    },
    //获取商品信息
     async getGoods() {
      // console.log(res.list)
      this.goods = await getGoods({});
      // this.newlist = this.goods[1].content
      this.shoplist = this.goods[this.num].content
      // this.hotlist = this.goods[0].content
      console.log(this.goods);
    },

  }
  // updated() {
  //   new Swiper('.swiper-container',{
  //     loop:true,
  //     // autoplay:true//默认三秒一切换
  //     autoplay:{
  //       delay:3000
  //     },
  //     pagination:{
  //       el:'.swiper-pagination'
  //     }
  //   });

  // },
};
</script>
<style src="../assets/css/index.css" scoped>

/* @import "../assets/css/index.css"; */
</style>