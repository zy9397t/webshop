<template>
  <div class="main">
    <div class="head">
      <div class="title">
        <img src="./img/shopCar.jpg" alt="" style="width: 10vh; height: 10vh" />
        <div class="titlename">购物车</div>
      </div>
    </div>

    <div class="containerbody" >
      <div class="containermain">
        <div class="containertop">
          <div class="containertopmain">
           <div style="width: 15%"></div>
            <div style="width: 2%"></div>
            <div style="width: 10%">商品名称</div>
            <div style="width: 22%; text-align: center">商品描述</div>
            <div style="width: 11%">单价</div>
            <div style="width: 15%;margin-left:5vw">数量</div>
            <div style="width: 8%">操作</div>
          </div>
        </div>

        <div class="containercenter" v-if="Object.keys(shopCar).length"> 
          <div class="containercentermain">
            <div class="ordercontainer"  v-for='(store,key,indexOut) in shopCar' :key="indexOut" v-show="store.length">
              <div class="shopname">{{store[0].storeName}}</div>

              <div class="shoporder" v-for='(shop,index) in store' :key="index">
                <!-- <el-checkbox
                  v-model="shop.isChecked"
                  style="width: 5%"
                ></el-checkbox> -->
                <div style="width: 5%"></div>
                <div class="imgs">
                  <img
                    :src='getAddress(shop.imgurel)'
                    alt=""
                    style="width: 10vh; height: 10vh"
                  />
                </div>
                <div class="detail" >
                  <div class="detailcontainer" >{{shop.name}}</div>
                  <div class="detailcontainer2">
                    {{shop.remark}}
                  </div>
                  <div class="price">{{shop.newshopprice}}元</div>
                  <!-- <el-input-number
                    :v-model="info[key][index].shopCount"
                    @change="handleChange"
                    :min=0
                    :max=99
                    :step=1
                    size="mini"
                    style="width: 20%"
                    class="numberinput"
                    :value="shop.shopCount"
                  ></el-input-number> -->
                  <div class="shopcount">{{shop.shopCount}}</div>
                  <div class="del"  >
                    <el-button
                    @click="del(key,index)"
                      type="primary"
                      icon="el-icon-delete"
                      size="mini"
                      class="but"
                    ></el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="noShops" v-else> 
          购物车为空
        </div>
        <div class="containerbottom">
          

          <el-input
            placeholder="请输入收货地址"
            v-model="shopAddress"
            clearable>
          </el-input>


          <div class="subbutton">
            <el-button
              style="height: 6vh; line-height: 2vh;"
              type="primary"
              size="mini"
              :disabled="!Object.keys(shopCar).length"
            @click="apply"
            >
              ￥{{allPrice}}元去结算
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <Footer style="height: 20vh"></Footer>
  </div>
</template>

<script>
import Footer from "components/Footer";
import {mapState} from 'vuex'

export default {
  components: {
    Footer,
  },

  data() {
    return{
      shopAddress:''
    }
  },
  computed:{
    ...mapState({
      shopCar : state => state.user.shopCar,
      allPrice : state => state.user.allPrice
    })
  },
  methods:{
    getAddress(address){
      return `http://localhost:4000/public/${address}`
    },

    apply(){
      if(this.shopAddress){
        this.$store.dispatch('APPLY',this.shopAddress)
      }else{
        this.$message.error('请输入收获地址')
      }
    },
    del(storeID,index){
      // console.log(storeID,index)
      this.$forceUpdate();
             this.$confirm('此操作不可逆, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    // this.orders[storeID].splice(index,1)
                    this.$store.commit('DELSHOPCAR',{key:storeID,index})
                    // this.$forceUpdate()
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消删除'
                    // });            
                });
          },
     handleChange(value){
              console.log(value)
              // this.commot('SHOPCOUNTUPDATA')
          },
  }
};
</script>

<style scoped>
.main {
	width: 100%;
	display: flex;
	flex-direction: column;
}

.head {
	width: 100%;
	height: 10vh;
	display: flex;
}

.title {
	display: flex;
	width: 90%;
	line-height: 10vh;
	margin-left: 5vw;
	font-size: 20px;
	font-weight: 400;
	color: #757575;
	border-bottom: 2px solid orange;
}

.titlename {
	margin-left: 10px;
}

.containerbody {
	width: 100%;
	height: 100vh;
	background-color: #f5f5f5;
	display: flex;
	justify-content: center;
}

.containermain {
	width: 80%;
	height: 95vh;
	margin: 10px;
	display: flex;
	flex-direction: column;
}

.containertop {
	background-color: white;
	height: 8vh;
	padding: 5px;
}

.containertopmain {
	height: 8vh;
	display: flex;
	justify-content: space-evenly;
	line-height: 8vh;
	font-weight: 700;
	font-size: 12px;
	color: #757575;
}

.containerbody {
	height: 100vh;
}

.containercenter {
	background-color: white;
	margin-top: 10px;
	height: 75vh;
  /* margin-bottom: 5vh; */
}

.containerbottom {
	background-color: white;
	height: 6vh;
	margin-top: 10px;
	display: flex;
	justify-content: flex-end;
}

.subbutton {
	height: 6vh;
  
}

.containercentermain {
	padding: 6px 6px 0 6px;
}

.ordercontainer {
	width: 100%;
	/* height: 5vh; */
  margin-bottom: 5vh;
	line-height: 5vh;
	border: 1px solid #757575;
}
.ordercontainer:last-child{
  margin-bottom: 0;
}

.shopname {
	font-weight: 700;
	font-size: 12px;
	margin-left: 10px;
	color: #757575;
}

.shoporder {
	height: 12vh;
	width: 98.5%;
	display: flex;
	align-items: center;
	/* border-bottom: 1px solid #757575;
	border-left: 1px solid #757575;
	border-right: 1px solid #757575; */ 
  border-top: 1px solid #757575;
	padding: 0 5px;
}
.shoporder:nth-child(2n){
  background-color :snow
}

.imgs {
	width: 10vh;
	height: 10vh;
}

.detail {
	display: flex;
	padding: 0 4.5vw;
	/* line-height: 12vh; */
}

.detailcontainer {
	font-weight: 700;
	font-size: 10px;
	width: 13vw;
	/* height: 12vh; */
	overflow: hidden;
	text-overflow: ellipsis;
	display: inline-block;
/* line-height: 12vh; */
	word-break: break-all;
	/* line-height: 12vh; */
  margin: auto 0;
  white-space: nowrap;
  text-align: center;
}


.detailcontainer2 {
	font-weight: 700;
	font-size: 10px;
	width: 18vw;
  margin: auto 0;
  text-align: center;
	vertical-align: middle;
	overflow: hidden;
	text-overflow: ellipsis;
	display: inline-block;
	word-break: break-all;
}

.price {
	font-weight: 700;
	font-size: 10px;
  width: 5vw;
	margin-left: 1.5vw;
	margin-top: 3vh;
  margin: 2vh 0 0 1.5vw;
}

.numberinput {
	margin-top: 3vh;
	margin-left: 3vw;
}

.but {
	margin-left: 5vw;
	margin-top: 3vh;
}

.shopcount{
  width: 8vw;
  text-align: end;
  margin: 2vh 5vw 0 4vw;
}

.del{
  /* width: 10vw; */
  float: right;
}
.shopcount{
  font-weight: 700;
  font-size: 11px;
  color: #ccc;
}
.noShops{
  min-height: 60vh;
  background-color:white;
  line-height: 60vh;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  color:gray
}
</style>