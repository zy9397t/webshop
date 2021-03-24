<template>
  <div class="main">
    <div id="header">
      <div class="title">
        <img src="../Msite/img/icon.jpg" alt="图标" class="icon" />
        <b></b>
      </div>
    </div>
    <div class="body">
      <div class="container">
        <div class="loginform">
          <div class="l-title">账号登录</div>
          <div class="formcontainer">
            <div class="inputcontainer">
              <el-form>
                <el-input
                  prefix-icon="el-icon-user-solid"
                  size="mini"
                  placeholder="请输入账号"
                ></el-input>
                <el-input
                  prefix-icon="el-icon-lock"
                  size="mini"
                  placeholder="请输入密码"
                  style="margin-top: 10px; margin-bottom: 10px; width: 100%"
                ></el-input>
              </el-form>
            </div>
            <el-button style="width: 100%" size="mini" type="danger"
              >登录</el-button
            >
          </div>
          <div class="formfooter">
            <div>立即注册</div>
          </div>
        </div>
      </div>
    </div>

    <div id="footer">
      <div class="footercontainer">
        <div v-for="(label, index) in footertitle" :key="index">
          <span>{{ label.label }}</span>
          <el-divider direction="vertical"></el-divider>
        </div>
        <div>联系我们</div>
      </div>
    </div>
    <div class="copyright">Copyright © 2004-2021 狗东GD.com 版权所有</div>
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

<style scoped>
.main {
	display: flex;
	flex-direction: column;
	height: 80vh;
}

#header {
	width: 100%;
	height: 13vh;
  display: flex;
  justify-content: center;
}

.title {
	width: 50vw;
	height: 10vh;
	/* margin: 1vh 0 0 27vw; */
	/* text-align: left; */
	display: flex;
  margin-top: 2vh;
}

.icon {
	width: 60px;
	height: 60px;
	border-radius: 30px;
}

#header b {
	vertical-align: middle;
	width: 5.5vw;
	height: 4vh;
	background: url(../Msite/img/l-icon.png);
	margin-left: 1vw;
	margin-top: 1.5vw;
}

.body {
	background-color: #d1201b;
	height: 50vh;
}

.container {
	margin: 0 auto;
	width: 52vw;
	height: 50vh;
	background: url(../Msite/img/background.jpg);
}

.loginform {
	background-color: white;
	width: 18vw;
	height: 40vh;
	float: right;
	margin-top: 2vh;
	display: flex;
	flex-direction: column;
}

.l-title {
	color: #e4393c;
	font-size: 14px;
	font-weight: 700;
	text-align: center;
	height: 4vh;
	line-height: 4vh;
	border-bottom: 1px solid #f4f4f4;
}

.formcontainer {
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin: 0 auto;
	height: 25vh;
	border-bottom: 1px solid #f4f4f4;
}

.inputcontainer {
	height: 20vh;
}

.formfooter {
	text-align: right;
	margin-right: 1vw;
	margin-top: 1.5vh;
	color: #b61d1d;
}
#footer {
	margin-top: 2vh;
	text-align: center;
}

.footercontainer {
	justify-content: center;
	display: flex;
}

.copyright {
	margin-top: 1vh;
	display: flex;
	justify-content: center;
}

</style>