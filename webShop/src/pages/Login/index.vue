<template>
  <div class="login">
    <!-- <h1>登录页面</h1> -->
    <div class="switch" @click="QH" >切换身份</div>
    <FormCard :config="storeconfig" :callback="storecallback" class="login1" ref="login1" v-if="isUserLogin"></FormCard>
    <FormCard :config="userconfig" :callback="usercallback" class="login2" ref="login2" v-else></FormCard>
  </div>
</template>

<script type="text/ecmascript-6">
import FormCard from "components/FormCard";
export default {

  components: {
    FormCard,
  },
  data() {
    return {
      isUserLogin:false,
      userconfig: {
        title: "普通用户登录",
        inputsInfo: [
          {
            type: "txt",
            placeholder: "请输入手机号",
            model: "",
          },
          {
            type: "password",
            placeholder: "请输入密码",
            model: "",
          },
        ],
      },
      usercallback: () => {
        let data = {
          phone: this.userconfig.inputsInfo[0].model,
          pwd: this.userconfig.inputsInfo[1].model,
        };
        //   console.log(data)
        //普通用户登录
        let rg = /^[1][3,4,5,7,8][0-9]{9}$/
        if(!data.phone || !data.pwd){
          this.$message.error('手机号或密码为空')
        }else{
          let rg = /^[1][3,4,5,7,8][0-9]{9}$/
          if(!rg.test(data.phone)){
             this.$message.error('手机号不符合规范')
          }else{
             this.$store.dispatch("USERLOGIN", data);
          }
        }
        
      },



      storeconfig: {
        title: "商家用户登录",
        inputsInfo: [
          {
            type: "txt",
            placeholder: "请输入手机号",
            model: "",
          },
          {
            type: "password",
            placeholder: "请输入密码",
            model: "",
          },
        ],
      },
      storecallback: () => {
        let data = {
          phone: this.storeconfig.inputsInfo[0].model,
          pwd: this.storeconfig.inputsInfo[1].model,
        };
        //   console.log(data)
        //商家登录
        if(!data.phone || !data.pwd){
          this.$message.error('格式错误！')
        }else{
          let rg = /^[1][3,4,5,7,8][0-9]{9}$/
          if(!rg.test(data.phone)){
             this.$message.error('手机号不符合规范')
          }else{
             this.$store.dispatch("STORELOGIN", data);
          }
        }
        
      },
    };
  },
  methods:{
    QH(){
      this.isUserLogin = !this.isUserLogin
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.login {
  width: 100vw;
  height: 100vh;
  position relative
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.switch 
  position absolute
  left 45vw
  top 10vh
  width 7vw
  height 5vh
  border 1px solid white
  background-color #09c
  border-radius 5px
  text-align center 
  line-height 5vh
  font-size 12px
  font-weight bolder
  color white
  cursor pointer
  user-select none
  &:hover 
    color #09c 
    background-color white
    transform rotateZ(360deg)
    // transition transform .5 ease
    transition  all .5s ease

</style>
