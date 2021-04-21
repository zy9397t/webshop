<template>
  <div class="main">
    <div class="head">
      <div class="title">我的订单</div>
    </div>
    <div class="body">
                <div class="container">
                  <div class="detail">
                    <div class="detaailtitle">
                      <div class="shopname">打飞机</div>
                      <div class="toptitle">待发货</div>
                    </div>
                    <div class="detailbottom">
                      <div class="pic">
                        <img src="" alt="" style="width: 100px; height: 100px" />
                      </div>
                      <div class="discribe">
                        <div class="discribedetail">商品介绍</div>
                        <div class="discribedetail">商品价格</div>
                        <div></div>
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
export default {
  components: {
    Footer,
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
  height: 80vh;
  display: flex;
  justify-content: center;
}

.container {
  width: 60vw;
  display: flex;
  flex-direction: column;
}

.detail {
  border: 1px solid #757575;
  height: 20vh;
}

.detail + .detail {
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
</style>