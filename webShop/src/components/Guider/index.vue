<template>
  <div class="guider">
      <span @click="direct(0)">首页</span>
      <span @click="direct(1)">购物车</span>
      <span @click="direct(2)">订单</span>
      <span @click="direct(3)">客服</span>
  </div>
</template>

<script type="text/ecmascript-6">
// import router from
import {mapState} from 'vuex'
  export default {
      computed:{
          ...mapState({
              myStore: state => state.store.myStore,
              userInfo:state => state.user.userInfo
          })
      },
      methods:{
        direct(value){
            /* 0:首页 1:购物车 2:个人中心 3:客服 */
            if( !Number.isInteger(value) ){
                return
            }else{
                switch(value){
                    case 0:this.$router.replace(this.userInfo.userid ? '/Msite' : '/MyStore') ; break
                    case 1:this.$router.replace('/ShopCar') ; break
                    case 2:this.$router.replace('/Orders') ; break
                    case 3:this.$router.replace('/Service') ; break
                    default : break
                }
            }
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.guider
    width 50px
    height 200px
    position fixed
    top 200px
    right 10px
    display flex 
    flex-direction column
    justify-content space-evenly
    // background-color red
    // border 1px solid red
    color #fff
    font-font-weight border 
    font-size 12px
    cursor pointer
    span 
        // background-color green
        border-radius 50%
        background-color #ccc
        height 24%
        text-align center
        line-height 50px
        border 1px solid white
        &:hover 
            color #ccc 
            background-color white
            border 1px solid #ccc

</style>
