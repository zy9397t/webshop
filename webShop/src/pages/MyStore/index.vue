<template>
  <div>
    <h1>我的店铺</h1>
    <div class="myStore" v-if="storeName">
        <div class="showShops">
            <!-- 这里面是商品展示 商品列表数组为shops(还没做目前是空，这里要有一个商品添加按钮,每个商品后要预留一个删除等操作按钮) -->
            <span class="addShop" @click="addShop">添加商品</span>
        </div>
    </div>
    <div class="noStore" v-else>
      <div class="msg">
        <div>
          您还没有商店,去<span class="toRegistStore" @click="isRegist = true">注册店铺</span
          >
        </div>
      </div>
    </div>
    <!-- 注册店铺页面 -->
    <div class="registStore" v-show="isRegist">
        <!-- 遮罩 -->
      <div class="mask"></div>
      
      <div class="content">
        <h1>给你的店铺取个名字吧：</h1>
        <input type="text" v-model="shopName" />
        <span @click="registStore">提交</span>
        <span @click="isRegist = false">关闭</span>
      </div>
    </div>
    <!-- 添加商品页面 -->
    <div class="addShop" v-show="isAddShop">
        <!-- 遮罩 -->
        <div class="mask"></div>
        <div class="content">
            <!-- 注册商品页面 商品信息要有：【图片、名、描述、旧价格、新价格、】（主要是你那个商品展示页面的所有信息） -->
            <!-- <input type="text" value="" v-model="">
            <input type="text" value="" v-model="">
            <input type="text" value="" v-model="">
            <input type="text" value="" v-model="">
            <input type="text" value="" v-model="">
            <input type="text" value="" v-model=""> -->
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
    //店铺注册页面开关
      isRegist: false,
    //注册时商品名称
      shopName: "",
    //添加商品页面开关
      isAddShop:false,
    //注册时商品信息
      shop:{}
    };
  },
  computed: {
    ...mapState({
      registStoreResult: (state) => state.store.registStoreResult,
      storeName: (state) => {{
              return state.store.myStore.name
      }},
      shops:state => state.store.myStore.shops
    })
  },
  methods: {
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

    addShop(){
        this.$store.dispatch('ADDSHOP',this.shop)
    }
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.toRegistStore
    cursor pointer
    &:hover
        color red
</style>
