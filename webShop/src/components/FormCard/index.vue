<template>
  <div class="formCard">
      <h1>{{config.title}}</h1>
      <div class="formItem" v-for="(inputinfo,index) in config.inputsInfo" :key="index">
          <input :type="inputinfo.type" v-model="inputinfo.model" :placeholder="inputinfo.placeholder">
      </div>
      <div class="formItem" @click="callback">
          <input type="button" value="提交" class="btn">
      </div>


      <div class="toRegist" @click="redirect('/Regist')" v-if="this.$route.path == '/Login' ? true:  false">立即注册-></div>
      <div class="toRegist" @click="redirect('/Login')" v-else>去登录-></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      mounted(){
        //   console.log(this.$route)
      },
      props:{
          config:Object,
          callback:Function
      },
      data(){
          return {

          }
      },
      methods:{
          redirect(address){
              this.$router.replace(address)
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.formCard
    box-shadow 0 2px 12px 0 rgb(0 0 0 / 60%)
    border-radius 5px
    width 40vw
    // border 1px solid black
    padding 10px
    display flex 
    flex-direction column
    align-items center
    background white
    justify-content center
    position relative
    .toRegist
        position absolute
        right 10px
        bottom 10px
        width 15%
        height 15px
        line-height 15px
        cursor pointer
        &:hover
            color skyblue
    h1 
        height 50px
        line-height 50px
        text-align center
        font-size 15px
        font-weight bolder
        color #2673bf
    .formItem 
        width 60%
        box-sizing border-box
        input 
            width 100%
            height 20px
            padding 3px 10px
            background transparent
            border none 
            outline  none 
            border-bottom 1px solid #666
            font-size 11px
            margin-bottom 10px
            &:focus
                border-bottom 1px solid blue
                transition all 1s ease
        .btn
            height 30px
            border 1px solid #333
            font-weight 600
            border-radius 5px
            
            &:hover
                background-color #333
                color white
                cursor pointer
                transition  all .5s ease 
</style>
