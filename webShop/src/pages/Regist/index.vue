<template>
  <div class="regist">
    <FormCard :config="userRegistConfig" :callback="userCallback"></FormCard>
    <FormCard :config="storeRegistConfig" :callback="storeCallback"></FormCard>
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
        title: "普通用户注册",
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
            this.$store.dispatch("STOREREGIST", {
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
</style>
