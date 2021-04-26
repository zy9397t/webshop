<template>
  <div class="container">
    <div class="switch" @click="QH">切换身份</div>
    <div class="regist">
      <FormCard :config="userRegistConfig" :callback="userCallback" v-if="isUserRegist"></FormCard>
      <FormCard
        v-else
        :config="storeRegistConfig"
        :callback="storeCallback"
      ></FormCard>
    </div>
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
      isUserRegist:true,
      userRegistConfig: {
        title: "普通用户注册",
        inputsInfo: [
          {
            type: "txt",
            placeholder: "请输入昵称",
            model: "",
          },
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
          {
            type: "password",
            placeholder: "请再次输入密码",
            model: "",
          },
        ],
      },
      userCallback: () => {
        let registInfo = {
          name: this.userRegistConfig.inputsInfo[0].model,
          phone: this.userRegistConfig.inputsInfo[1].model,
          pwd: this.userRegistConfig.inputsInfo[2].model,
          password2: this.userRegistConfig.inputsInfo[3].model,
        };
        if (registInfo.pwd !== registInfo.password2) {
          this.$message.error("两次密码不一致");
        } else {
          let rg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (rg.test(registInfo.phone)) {
            this.$store.dispatch("USERREGIST", {
              status:0,
              name: registInfo.name,
              phone: registInfo.phone,
              pwd: registInfo.pwd,
            });
          } else {
            this.$message.error("手机号非法");
          }
        }
      },
      storeRegistConfig: {
        title: "商家用户注册",
        inputsInfo: [
          {
            type: "txt",
            placeholder: "请输入店铺名",
            model: "",
          },
          {
            type: "txt",
            placeholder: "请输入手机号",
            model: "",
          },
          {
            type: "password",
            placeholder: "请输入店铺密码",
            model: "",
          },
          {
            type: "password",
            placeholder: "请再次输入密码",
            model: "",
          },
        ],
      },
      storeCallback: () => {
        let registInfo = {
          name: this.storeRegistConfig.inputsInfo[0].model,
          phone: this.storeRegistConfig.inputsInfo[1].model,
          pwd: this.storeRegistConfig.inputsInfo[2].model,
          password2: this.storeRegistConfig.inputsInfo[3].model,
        };
        if (registInfo.pwd !== registInfo.password2) {
          this.$message.error("两次密码不一致");
        } else {
          let rg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (rg.test(registInfo.phone)) {
            this.$store.dispatch("REGISTSTORE", {
              status:0,
              name: registInfo.name,
              phone: registInfo.phone,
              pwd: registInfo.pwd,
            });
          } else {
            this.$message.error("手机号非法");
          }
        }
      },
    };
  },
  methods:{
    QH(){
      this.isUserRegist = !this.isUserRegist
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.regist {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
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
