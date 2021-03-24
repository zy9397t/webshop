<template>
  <div>
      <el-container class="container">
        <el-header style="height:30px">Header</el-header>
        <el-main>
          <div class="top">
            <div class="img"></div>
            <span>我的购物车</span>
          </div>
          <hr color="gray"/>
          <div class="mainContent">
            <div class="banner">
              <div style="width:5%"></div>
              <div style="width:10%"></div>
              <div style="width:30%"></div>
              <div style="width:20%"></div>
              <div style="width:10%">单价</div>
              <div style="width:20%">数量</div>
              <div style="width:10%">总价</div>
              <div style="width:5%">操作</div>
            </div>
            <ShopCarShop :shop="shop"></ShopCarShop>
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import ShopCarShop from 'components/ShopCarShop'
  export default {
      components:{
        ShopCarShop
      },
      data(){
        return {
          shop:{
          id:0,
          unitPrice:89,
          shopCount:1,
          shopDescription:"【倪萍欧尼酱】妮维雅男士洗面奶控油抗痘啊吧啊吧",
          shopDetails:"化妆品净含量：150g",
          shopPicUrl:"https://img.alicdn.com/bao/uploaded/i3/1123492339/O1CN019gPwFd1T9J45HBKyy_!!0-item_pic.jpg_80x80.jpg"
        }
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .el-header, .el-footer {
    width:100%;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 30px;
  }

  .el-main {
    width 90%
    background-color: #e5f2fc;
    color: #333;
    text-align: center;
    // line-height: 160px;
    padding: 0px
    min-height:600px
  } 

  .container
    display flex
    flex-direction column
    align-items center
  .mainContent
    padding 10px
    .banner 
      display flex 
      justify-content space-evenly
      align-items center
      padding 10px
      font-size 12px
      font-weight bolder 
      div
        text-align center
  .top 
    height 100px
    background #c9e5fb
    display flex
    align-items center
    .img
      background-image url("./img/shopCar.jpg")
      width 100px
      height 80%
      background-size cover
      background-position 0 50%
      margin-left 100px
      border-right 1px solid skyblue
    span 
      color black 
      font-weight bolder 
      font-size 14px
      transform  translateY(30px)
      margin-left 30px
      
  

</style>
