<template>
  <div class="main">
    <div>
      <el-row :gutter="0" class="top">
        <el-col :span="24"
          ><div class="grid-content bg-purple">
            <h1>{{ position }}</h1>
            <div class="info">
              <span v-show="!isLogin"
                >你好，请<span class="login cup" @click="redirect('Login')"
                  >登录</span
                >
                <span class="regist cup" @click="redirect('Regist')"
                  >注册</span
                ></span
              >
              <span class="cup">我的订单</span>
              <span class="cup">我的商店</span>
              <span class="cup">我的会员</span>
            </div>
          </div></el-col
        >

        <!-- <el-col :span="12"><div class="grid-content bg-purple"></div></el-col> -->
      </el-row>
    </div>
    <div class="body">
      <div class="header">
        <div class="title">
          <span>商品详情</span>
        </div>
      </div>
      <div class="container">
        <div class="container-left">
          <div class="block">
            <el-carousel
              height="55vh"
              style="width: 33vw; margin-left: 20px; margin-top: 20px"
            >
              <el-carousel-item v-for="item in 5" :key="item">
                <!-- <h3 class="small">{{ item }}</h3> -->
                <!-- <img src="../../components/ShowCard/img/Redmi-k30.png" style="width:100%" alt=""> -->
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <div class="container-right">
          <div class="container-title">
            <span>我是商品</span>
          </div>
          <div class="container-detail">
            <span>
              120Hz高帧率流速屏/ 索尼6400万前后六摄 / 6.67'小孔径全面屏 /
              最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 /
              4500mAh+27W快充 / 多功能NFC
            </span>
          </div>

          <div class="price">
            <span>限时价格：1599元</span>
            <span>累计销量:4000+</span>
          </div>

          <div class="shopdescribe">
            <div class="shopdetail">
              <span class="data">重量：0.66kg</span>
              <span class="data">配送时间：预计明天到达</span>
            </div>
          </div>

          <div class="shopbutton">
            <el-button type="danger" style="width: 30vw">加入购物车</el-button>
          </div>

          <div class="pro-policy">
            <ul>
              <li><i class="el-icon-circle-check"></i> 7天无理由退货</li>
              <li><i class="el-icon-circle-check"></i> 7天价格保护</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-top">
        <div class="pro-policy-bottom">
          <ul>
            <li><i class="el-icon-circle-check"></i> 7天无理由退货</li>
            <li><i class="el-icon-circle-check"></i> 7天价格保护</li>
            <li><i class="el-icon-circle-check"></i> 全场包邮</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footercontainer">
          <div v-for="(label, index) in footertitle" :key="index">
            <span>{{ label.label }}</span>
            <el-divider direction="vertical"></el-divider>
          </div>
          <div>联系我们</div>
        </div>
      </div>
      <div class="copyright">Copyright © 2004-2021 东东DD.com 版权所有</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footertitle: [
        { label: "关于我们" },
        { label: "联系我们" },
        { label: "人才招聘" },
        { label: "广告服务" },
        { label: "销售联盟" },
        { label: "销售联盟" },
        { label: "销售联盟" },
        { label: "销售联盟" },
      ],
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.cup {
  cursor: pointer;
}

.el-row {
  margin-bottom: 0px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 0px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  // width 100%
  border-radius: 0px;
  min-height: 2vh;
  display: flex;
  line-height: 20px;
  justify-content: space-evenly;
  color: #999;
  // cursor pointer
  box-sizing: border-box;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  // background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  // background-color: #d3dce6;
}

.top .grid-content {
  display: flex;

  h1 {
    width: 30%;
  }

  .info {
    width: 30%;
    display: flex;
    justify-content: space-evenly;

    &>span {
      width: 70px;
      text-align: center;

      .login:hover {
        color: red;
      }

      .regist:hover {
        color: red;
      }
    }
  }
}
</style>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}

.body {
  width: 70%;
  height: 67vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.header {
  height: 5vh;
  width: 100%;
}

.title {
  display: flex;
  align-items: center;
  line-height: 5vh;
  padding-left: 10px;
  font-weight: 700;
  font-size: 12px;
  border-bottom: 1px solid #e6e6e6;
}

.container {
  width: 100%;
  height: 65vh;
  display: flex;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.container-left {
  width: 50%;
  height: 60vh;
}

.container-right {
  display: flex;
  width: 50%;
  height: 60vh;
  flex-direction: column;
}

.container-title {
  height: 5vh;
  width: 100%;
  line-height: 5vh;
  font-size: 14px;
}

.container-detail {
  height: 5vh;
  margin-top: 10px;
  color: #b0b0b0;
  font-size: 10px;
}
.price {
  color: #ff6700;
  font-size: 14px;
  height: 10vh;
  line-height: 10vh;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
}

.shopdescribe {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9fa;
  height: 10vh;
}

.shopdetail {
  display: flex;
  flex-direction: column;
  font-size: 10px;
}

.data {
  margin-bottom: 10px;
}

.shopbutton {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.pro-policy {
  height: 5vh;
  width: 100%;
  margin-top: 15px;
  line-height: 5vh;
  padding-left: 5px;
}

.pro-policy li {
  color: #b0b0b0;
  font-size: 12px;
  width: 10vw;
  float: left;
}

.footer {
  width: 100%;
  height: 30vh;
  background-color: #2f2f2f;
}

.footer-top {
  height: 50%;
  border-bottom: 1px solid #444;
  line-height: 15vh;
}

.pro-policy-bottom {
  color: white;
  width: 100%;
  /* float: left; */
}
.pro-policy-bottom ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
}
.pro-policy-bottom li {
  color: #b0b0b0;
  font-size: 16px;
  /* width: 10vw; */
  /* float: left; */
  /* margin-left: 18vw; */
}

.footercontainer {
  margin-top: 10px;
  justify-content: center;
  display: flex;
  color: white;
}

.copyright {
  margin-top: 1vh;
  display: flex;
  justify-content: center;
  color: white;
}

span {
  font-weight: 600;
}
</style>