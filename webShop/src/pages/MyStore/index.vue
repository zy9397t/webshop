<template>
  <div>
    <h1>我的店铺</h1>
    <div class="myStore" v-if="storeName"></div>
    <div class="noStore" v-else>
      <div class="msg">
        <div>
          您还没有商店,去<span class="registStore" @click="isRegist = true"
            >注册店铺</span
          >
        </div>
      </div>
    </div>

    <div class="registStore" v-show="isRegist">
      <div class="mask"></div>
      <div class="content">
        <h1>给你的店铺取个名字吧：</h1>
        <input type="text" v-model="shopName" />
        <span @click="registStore">提交</span>
        <span @click="isRegist = false">关闭</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  mounted() {
      this.$store.dispatch('GETMYSTORE',{phoneNum:'13996640244'})
  },
  data() {
    return {
      isRegist: false,
    //   isMyStore: false,
      shopName: "",
    };
  },
  computed: {
    ...mapState({
      registStoreResult: (state) => state.store.registStoreResult,
      storeName: (state) => {{
        //   if(state.store.mySstore){
              return state.store.myStore.name
        //   }else{
        //     //   console.log(1)
        //       return ''
        // }
      }}
    })
  },
  methods: {
    toRegistStore() {
      this.$router.push("/MyStore/toRegistStore");
    },
    registStore() {
      let store = {
        name: this.shopName,
        owner: "13996640244",
        shops: [],
      };

      this.$store.dispatch("REGISTSTORE", store).then(() => {
        //   console.log()
        if (!this.registStoreResult.code) {
          //   console.log("添加成功");
          this.$alert("注册成功", "成功", {
            confirmButtonText: "确定",
            callback:()=>{
                this.$store.dispatch('GETMYSTORE',{phoneNum:'13996640244'})
                .then(()=>{
                    this.isRegist =false
                })
            }
          });
        } else {
          this.$alert(`${this.registStoreResult.error}`, "注册失败", {
            confirmButtonText: "确定",
          });
        }
      });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>
