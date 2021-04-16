<template>
  <div class="Msite">
    <el-row :gutter="0" class="top">
      <el-col :span="24"><div class="grid-content bg-purple">
        <h1>{{position}}</h1>
        <div class="info">
          <span v-show="!isLogin">你好，请<span class="login cup" @click="redirect('Login')">登录</span> <span class="regist cup" @click="redirect('Regist')">注册</span></span>
          <span class="cup">我的订单</span>
          <span class="cup" @click="getMyStore()">我的商店</span>
          <span class="cup">我的会员</span>
        </div>
      </div></el-col>

    <!-- <el-col :span="12"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>


    <el-row class="top_search"> 
      <el-col :span="6" :offset="0" class="left">
        <div class="grid-content bg-purple">
          <div class="img">
            <img src="./img/icon.jpg" alt="">
          </div>
        </div>
      </el-col>

      <el-col class="center" :span="12">
      <div class="grid-content bg-purple">
          <div class="top">
            <!-- <div class="search"></div> -->
            <div class="search">
              <input type="text" v-model="searchkeyWords">
              <div @click="search" class="cup">搜索</div>
            </div>
            <div class="keys" >
              <span>点我和新茶</span>
              <span>品质家纺</span>
              <span>品质电脑</span>
              <span>满3减1</span>
              <span>芜湖起飞</span>
            </div>
          </div>
          <div class="bottom">
            <h1>秒杀</h1>
            <span>优惠券</span>
            <span>PLUS会员</span>
            <span>品牌</span>
            <span>种类1</span>
            <span>种类2</span>
          </div>
      </div>
    </el-col>
    </el-row>

    <div class="mainConetent">
      <el-row :gutter="2" class="main1">
        <el-col :span="4" :offset="2"><div class="grid-content bg-purple">
          <ul class="cotegories">
            <li v-for="(items,index) in cotegories" :key=" index">
              <ul class="cotegory">
                <li v-for="(cotegory,index) in items" :key="index">>{{cotegory}}</li>
              </ul>
            </li>
          </ul>
          </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
            <div class="swiper">
              <img src="./img/1.jpg" alt="">
            </div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">
            <div class="ads">
              <img src="./img/2.jpg" alt="图片1">
              <img src="./img/3.jpg" alt="图片2">
              <img src="./img/4.jpg" alt="图片3">
            </div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">
            <div class="more">
              <div class="top">
                <h1>HI,你好</h1>
                <h2><span @click="redirect('login')" class="cup">登录</span>|<span class="cup" @click="redirect('regist')">注册</span></h2>
                <div class="fuli"><span>新人福利</span><span>PLUS会员</span></div>
              </div>
               <div class="center">
                 <h1><span class="kb">快报</span> <span class="gd">更多>></span></h1>
                 <ul>
                   <li><span class="hot">HOT</span><span>热门信息1</span></li>
                   <li><span class="hot">HOT</span><span>热门信息2</span></li>
                   <li><span class="hot">HOT</span><span>热门信息3</span></li>
                 </ul>
               </div>
               <div class="bottom">
                 <div><span>话费</span><span>机票</span><span>酒店</span></div>
                 <div><span>游戏</span><span>加油卡</span><span>火车票</span></div>
                 <div><span>众筹</span><span>理财</span><span>白条</span></div>
                 <div><span>电影票</span><span>企业购</span><span>礼品卡</span></div>
                
               </div>

            </div>
          </div></el-col>
      </el-row>

      <el-row :gutter="2" class="main2">
        <el-col :span="4" :offset="2"><div class="grid-content bg-purple count_down">
            <div class="cd_title">限时秒杀</div>
            <div class="cd_icon">
              <!-- <div class="icon"></div> -->
              <i class="el-icon-time"></i>
              <h1 class="time">{{hour}}点场 倒计时</h1>
            </div>
            <div class="cd_time_now"><span>{{hour}}</span> : <span>{{minute}}</span> : <span>{{second}}</span></div>
          </div></el-col>

        <el-col :span="12"><div class="grid-content bg-purple">
             <el-carousel indicator-position="none" height="100%" style="width:100%" :autoplay='false'>
              <el-carousel-item v-for="item in 2" :key="item" class="cards">
                <div class="card" v-for="item2 in 4" :key="item2">
                  <img src="./img/shop.jpg" alt="item2">
                  <div class="info">
                    vivo X60系列5G手机
                  </div>
                  <div class="price">
                    ￥3798.00
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div></el-col>

          <el-col :span="4">
          <div class="grid-content bg-purple">
               <el-carousel  height="100%" style="width:100%" >
              <el-carousel-item v-for="item in 2" :key="item">
                  <div class="card2">
                    <img src="./img/bicycle.jpg" alt="">
                    <div class="info">
                      <h2>健身游泳春日趴</h2>
                      <h1>9.9元限量购</h1>
                      <span>品牌秒杀</span>
                    </div>
                  </div>
              </el-carousel-item>
            </el-carousel> 
          </div></el-col>
      </el-row>

      <ShowShops v-for="(shops,index) in 3" :key="index" :shops="shops"></ShowShops>
    </div>

    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import ShowShops from "components/ShowShops"
import Footer from "components/Footer"
  export default {
    components:{
      ShowShops,
      Footer
    },
    mounted(){
      // let date = new Date()
      setInterval(()=>{
         this.timeNow = new Date() 
      },1000)
    },
    data(){
      return {
        position:'广东',
        timeNow:0,
        // msg:'你好，请'
        isLogin:false,
        searchkeyWords:'',
        cotegories:[["家电用器"],["手机","运营商","数码"],["电脑","办公"],["家居","家具","家装","厨具"],["男装",'女装','童装','内衣'],["美妆","个护清洁",'宠物'],["男鞋","运动","户外"],["房产","汽车","汽车用品"]]
      }
    },
    methods:{
      redirect(value){
        console.log(value)
        // switch (value){
        //   case 'login' : this.$router.push('/login');break
        //   case 'regist' : this.$router.push('/regist');break
        //   default : break
        // }
        this.$router.push(value)
      },
      getMyStore(){
        this.$router.push('/myStore')
      },
      search(){
        this.redirect('/AllShops')
      }
    },
    computed:{
      hour(){
        if(this.timeNow){
            let hours = this.timeNow.getHours()
            return hours < 10 ? '0'+hours : hours
        }else{
          return 0
        }
        
      },
      minute(){
        if(this.timeNow){
            let minutes = this.timeNow.getMinutes()
            return minutes < 10 ? '0'+minutes : minutes
        }else{
          return 0
        }
      },
      second(){
       if(this.timeNow){
            let seconds = this.timeNow.getSeconds()
            return seconds < 10 ? '0'+seconds : seconds
        }else{
          return 0
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cup{
    cursor pointer
  }
  .el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 0px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    // width 100%
    border-radius: 0px;
    min-height: 20px;
    display flex 
    line-height 20px
    justify-content space-evenly
    color #999
    // cursor pointer
    box-sizing border-box
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    // background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    // background-color: #d3dce6;
  }
  .top .grid-content
    display  flex 
    h1 
      width 30%
    .info
      width 30%
      display flex 
      justify-content space-evenly
      &>span 
        width 70px
        text-align center
        .login:hover
          color red
        .regist:hover
          color red
  .top_search
    .grid-content
      min-height 100px
      // border 1px solid red 
      background-color #fff
      // dispalay flex 
      // flex-direction column
      // justify-content space-between
    &>.left .grid-content
      padding-top 10px
      .img
        img 
          width 80px
          height 80px
    &>.center .grid-content
      // color red
      padding-top 10px
      display flex 
      flex-direction column
      align-items center
      .bottom
        width 100%
        height 20%
        display flex 
        justify-content space-evenly
        font-size 10px
        color #333
        h1
          font-weight bolder
          color red 
      .top 
        width 80%
        height 70%
        display  flex
        flex-direction column 
        justify-content center
        .keys
          width 100%
          display flex 
          span 
            margin-left 10px
        .search
          display flex 
          input 
            border 2px solid #e1251b
            width 80%
            height 20px
            box-sizing border-box
            padding-left  10px
            &:focus
              outline none
          div
            width 10%
            height 20px
            color #fff
            background-color #e1251b 
            font-weight bolder
            text-align center
  
  .mainConetent 
    background #D3dce6
    width 100%
    // height 500px
    padding 10px 0px
    .grid-content 
      background-color #fff
      padding-top 1px
      // height 270px
      box-sizing border-box
    .main2
      margin-top 20px
      .grid-content
        height 200px
      .card2
        // background-color green
        height 100%
        display flex 
        flex-direction column
        justify-content space-evenly
        align-items center
        img
          width 60%
        h2 
          color gray 
          font-size 10px
        h1 
          color #000
          font-size 10px
          font-weight bolder 
        span 
          display inline-block
          width 55px
          height 15px
          line-height 15px
          color #e1251b
          text-align center
          font-weight bolder 
          border 1px solid #e1251b
          border-radius 10px
      .cards 
        display flex 
        // height 100%
        align-items center
        .card 
          width 25%
          // height 100%
          display flex 
          flex-direction column
          justify-content center
          align-items center
          img 
            width 100%
          .info
            color red
            text-align center
          .price
            width 70%
            background-color #e83632
            color white
            text-align center
            font-size 13px 
            font-weight bolder
          
      .count_down
        background-color #e83632
        display flex 
        flex-direction column
        justify-content space-space-around
        align-items center
        .cd_title
          height 10%
          display flex 
          justify-content center
          align-items center
          font-weight bolder
          font-size 16px
          color white 
        .cd_icon
          height 50%
          text-align center
          color white
          i 
            font-size 50px
          .time
            font-size 12px
           
        .cd_time_now
          height 10%
          display flex 
          width 60%
          justify-content space-evenly
          font-size 14px
          color white
          span 
            background-color black
            width 20px
            text-align center 



    .main1
      // color #000
      // font-size 10px
      // height 300px
      .ads
        height 270px
        width 100%
        display flex 
        flex-direction column
        justify-content space-evenly
        img 
          width 100%
          height 33%
      .cotegories
        display flex 
        flex-direction column
        justify-content space-evenly
        height 270px
        .cotegory 
          display flex
          li 
            margin-left 5px 
      .swiper
        height 270px
        width 100%
        // height 300px
        img 
          width 100%
          height 100%
      .more 
        width 100%
        height 270px
        .top
          height 20%
          h1 
            text-align center
            height 35%
          h2 
            height 35%
            text-align center
          .fuli
            display flex 
            justify-content space-evenly
            span 
              width 35%
              // height 
              text-align center
              color #fff
              font-weight bolder
              background-color red
              border-radius 10px
              height 15px
              line-height 15px
        .center
          border-top 1px solid gray
          height 30%
          padding-top 10px
          h1 
            display flex 
            justify-content space-around
            .kb
              color black 
              font-weight bolder
              font-size 11px
          ul 
            li 
              padding-left  10px
              .hot
                color red 
                background rgba(225,37,27,.08)
                margin-right 10px
            
        .bottom
          border-top 1px solid gray
          height 50%
          display flex 
          flex-direction column
          justify-content space-evenly
          div 
            display flex 
            justify-content space-evenly
            span 
              display inline-block
              width 100%
              display flex 
              align-items center
              justify-content center
              
          
    
</style>
