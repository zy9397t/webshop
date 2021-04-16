<template>
  <div class="showcard" @click="redirect('/ShopDetail')">
      <img src="./img/Redmi-k30.png" alt="">
      <div class="shopName">红米k-30</div>
      <div class="shopDetails">120hHz流速屏</div>  
      <div class="shopPrice">
            <div class="newPrice">1599元</div>
            <div class="oldPrice"><strike>2000元</strike></div>
      </div>  
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
          redirect(address){
              this.$router.push(address)
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.showcard 
    height 45%
    width 24%
    display flex 
    flex-direction column
    justify-content center
    align-items center
    background-color #fff
    cursor pointer
    &:hover
        box-shadow:5px 5px 5px #888
        // transform scale(1.01)
        transform translateY(-1px) scale(1.01)
    img
        width 80%
        // height 
    .shopName
        color black 
        font-size 10px
    .shopDetails
        color gray 
        margin-top 5px
    .shopPrice
        width 100%
        display flex 
        justify-content space-evenly
        align-items center
        margin-top 5px
        .newPrice 
            color red
            font-size 12px
        .oldPrice
            color gray 
            fot-size  10px
</style>
