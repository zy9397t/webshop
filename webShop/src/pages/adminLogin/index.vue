<template>
  <div class="adminLogin">
      <div class="loginContainer">
          <input type="txt" placeholder="请输入账号" v-model="id">
          <input type="password" placeholder="请输入密码" v-model="pwd">
          <input type="button" value="登录" class="btn" @click="adminLogin">
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {adminLogin} from 'api'
  export default {
      data(){
        return {
          id:'',
          pwd:''
        }
      },
      methods:{
        async adminLogin(){
          if(!this.id || !this.pwd){
            this.$message.error('请输入正确的账号密码！')
          }else{
            const result = await adminLogin({id:this.id,pwd:this.pwd})
            if(!result.code){
              
              let str = 'admin'+Math.round(Math.random() * 1000)
              window.sessionStorage.setItem([str],'1')
              this.$router.push({path:'/Users',query:{str}})
            }
          }
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.adminLogin
  width 100vw 
  height 100vh 
  box-size border-box 
  display flex 
  justify-content center 
  align-items center
  background-color snow
  .loginContainer 
    width 40vw 
    height 40vh
    border 1px solid #ccc
    display flex 
    flex-direction column 
    justify-content space-evenly 
    padding 0px 10px
    box-shadow 3px 3px 3px #ccc
    input 
      height 15%
      padding 0px 30px
      font-size 13px
      outline none 
      border 1px solid #000
      &:focus
        border-color skyblue
    .btn 
      &:hover
        cursor pointer
      
</style>
