<template>
  <div class="showcard" @click="redirect('/ShopDetail')">
      <img :src='indexImgUrl' alt="">
      <div class="shopName">{{shop.name}}</div>
      <div class="shopDetails">{{shop.remark}}</div>  
      <div class="shopPrice">
            <div class="newPrice">{{shop.newshopprice}}元</div>
            <div class="oldPrice"><strike>{{shop.oldshopprice}}元</strike></div>
      </div>  
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:[
          'shop'
      ],
      methods:{
          redirect(address){
              this.$store.commit('USERCHOOSE',this.shop)
              this.$router.push(address)
          }
      },
      computed:{
          indexImgUrl(){
              return  `http://localhost:4000/public/${this.shop.imgs[0].imgPath}`
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

<style scoped>
    .showcard:first-child{
        margin-top: 5px;
        margin-left: 5px;
    }

    .showcard+.showcard{
        margin-left: 5px;
        margin-top: 5px;
    }
</style>