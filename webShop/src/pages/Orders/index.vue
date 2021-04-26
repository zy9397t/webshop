<template>
  <div class="main">
    <div class="head">
      <div class="title">我的订单</div>
      <div class="refresh">
        <el-button type="primary" @click="refresh">刷新</el-button>
      </div>
    </div>
    <div class="body">
      <div class="container" v-if="!myStore">
        <div class="detail" v-for="(order) in userOrders" :key="order.id">
          <div class="detaailtitle">
            <div class="shopname">订单编号：{{order.id}}</div>
            <div class="address" style="font-size:15px">地址：{{order.address}}</div>
            <div class="discribedetail">{{order.status ? '已发送':'等待处理'}}</div>
            <!-- <div class="deliverybutton" >
              <el-button
              size="mini"
              :disabled="!!order.status"
              @click="changeOrderStatus(order.id,order.shops[0].storeID)"
              v-if="myStore"
              >发货</el-button>
            </div> -->
          </div>
          <div class="detailbottom" v-for="shop in order.shops" :key="shop.imgurel">
            <div class="pic">
              <img
                :src="getImg(shop.imgurel)"
                alt=""
                style="width: 5vw; height: 10vh"
              />
            </div>
            <div class="discribe">
              <div class="discribedetail">商品名称:{{shop.name}}</div>
              <div class="discribedetail">
                <!-- 商品介绍:真的好用,极速充电，享受7天无理由退款 -->
                {{shop.remark}}
              </div>
              <div class="discribedetail">商品价格:{{shop.newshopprice}}元</div>
              
            </div>

          </div>

         
        </div>
      </div>

      <div class="container" v-else >
        <div class="detail" v-for="(order,orderIndex) in shopOrders" :key="order.id">
          <div class="detaailtitle">
            <div class="shopname">订单编号：{{order.id}}</div>
            <div class="address" style="font-size:15px">地址：{{order.address}}</div>
            <div class="discribedetail">{{order.status ? '已发送':'等待处理'}}</div>
            <div class="deliverybutton" >
              <el-button
              size="mini"
              :disabled="!!order.status"
              @click="changeOrderStatus(order.id,order.shops[0].storeID,order.userID,orderIndex)"
              >{{!!order.status ? '已发货':'发货'}}</el-button>
            </div>
          </div>
          <div class="detailbottom" v-for="shop in order.shops" :key="shop.imgurel">
            <div class="pic">
              <img
                :src="getImg(shop.imgurel)"
                alt=""
                style="width: 5vw; height: 10vh"
              />
            </div>
            <div class="discribe">
              <div class="discribedetail">商品名称:{{shop.name}}</div>
              <div class="discribedetail">
                <!-- 商品介绍:真的好用,极速充电，享受7天无理由退款 -->
                {{shop.remark}}
              </div>
              <div class="discribedetail">商品价格:{{shop.newshopprice}}元</div>
              
            </div>

          </div>

         
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "components/Footer";
import {mapState} from 'vuex'
export default {
  mounted(){
    let userInfo = this.$store.state.user.userInfo
    let storeInfo = this.$store.state.store.myStore
    if(userInfo){
      this.$store.dispatch('GETUSERORDERS',userInfo.userid)
    }else if(storeInfo){
      this.$store.dispatch('GETSTOREORDERS',storeInfo.id)
    }
    
  },
  computed:{
    ...mapState({
      userOrders : state => state.user.orders,
      shopOrders : state => state.store.orders,
      myStore : state => state.store.myStore
    })
  },
  components: {
    Footer,
  },

  data() {
    return {
      name: true,
    };
  },

  methods: {
    changeOrderStatus(orderID,storeID,userID,orderIndex){
      // console.log(orderID,storeID,userID)
      this.$store.dispatch('CHANGEORDERSTATUS',{orderId:orderID,storeId:storeID,userId:userID,orderIndex})
    },
    getImg(url){
      return `http://localhost:4000/public/${url}`
    },
    refresh() {
      // this.reload();
       let userInfo = this.$store.state.user.userInfo
      let storeInfo = this.$store.state.store.myStore
      if(userInfo){
        this.$store.dispatch('GETUSERORDERS',userInfo.userid)
      }else if(storeInfo){
        this.$store.dispatch('GETSTOREORDERS',storeInfo.id)
      }
    },
  },
};
</script>

<style scoped>
.main {
	width: 100vw;
	height: 100vh;
}
.head {
	height: 10vh;
	width: 100vw;
	display: flex;
}

.title {
	width: 90%;
	line-height: 10vh;
	margin-left: 5vw;
	font-size: 20px;
	font-weight: 400;
	color: #757575;
	border-bottom: 1px solid #e6e6e6;
}

.body {
	padding: 10px;
	width: 100vw;
	height: 90vh;
	display: flex;
	justify-content: center;
}

.container {
	width: 60vw;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	border: 1px solid #e6e6e6;
	padding: 10px;
}

.refresh {
	display: flex;
	justify-items: center;
}

.order {
	width: 95%;

/* height: 38vh; */
	border: 1px solid gray;
	padding: 0 20px 20px 20px;
}

.order + .order {
	margin-top: 10px;
}

.detail + .detail {
	margin-top: 10px;
  /* min-height: 200px; */
}

.orderlisthead {
	display: flex;
	justify-content: space-between;
	line-height: 5vh;
	font-size: 12px;
	font-weight: 700;
}

.ordernum {
	font-weight: bolder;
}

.sendstatus {
	font-weight: bolder;
}

.detail {
	border: 1px solid #757575;
	/* overflow-y: auto; */

/* max-height: 32vh; */
	margin: 10px;
}

.detail + .detail {
	margin-bottom: 20px;
}

.detail:first-child {
	margin-bottom: 20px;
}

.detaailtitle {
	border-bottom: 1px solid #757575;
	height: 5vh;
	line-height: 5vh;
	display: flex;
	justify-content: space-between;
	margin: 0 10px;
}

.toptitle {
	font-weight: 700;
	font-size: 14px;
}

.shopname {
	font-weight: 700;
	font-size: 14px;
}

.detailbottom {
	display: flex;
  /* height: 100%; */
  border-bottom: 1px solid #ccc;
}

.pic {
	margin: 15px;
}

.discribe {
	display: flex;
	flex-direction: column;
	padding: 20px;
}

.discribedetail + .discribedetail {
	margin-top: 10px;
}

.discribedetail {
	/* width: 41vw; */
	font-weight: 400;
	font-size: 12px;
}

.deliverybutton {

}



</style>