<template>
  <div class="main">
    <div id="header">
      <div class="title">
        <img src="../Msite/img/icon.jpg" alt="图标" class="icon" />
        <b>欢迎注册</b>
        <div class="login"></div>
      </div>
    </div>
    <div class="body">
      <div class="container">
        <div class="formcontainer">
          <el-form label-width="100px">
            <el-form-item label="用户名">
              <el-input size="mini" style="width: 95%"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input size="mini" style="width: 95%"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input size="mini" style="width: 95%"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input size="mini" style="width: 95%"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input size="mini" style="width: 95%"></el-input>
            </el-form-item>
          </el-form>
          <div class="elbutton">
            <el-button style="width: 60%" size="mini" type="danger"
              >立即注册</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
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
  height: 100vh;
}

#header {
  width: 100%;
  height: 13vh;
  border-bottom: 3px solid #f4f4f4;
  display: flex;
  justify-content: center;
  /* box-shadow: 0px 0px 20px #656B79; */
}

.title {
  width: 70vw;
  height: 10vh;
  margin-top: 2vh;
  display: flex;
}

.icon {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}

#header b {
  align-items: center;
  width: 6vw;
  font-size: 2.5vh;
  color: #333;
  margin-left: 1vw;
  margin-top: 3.5vh;
}

.body {
  width: 100vw;
  height: 73.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 60vw;
  height: 63.5vh;
  display: flex;
  border-bottom: 3px solid #f4f4f4;
  justify-content: center;
}

.formcontainer {
  width: 50%;
  height: 60.5vh;
  margin-top: 3vh;
  /* align-items: flex-end; */
}

.elbutton {
  width: 100%;
  display: flex;
  justify-content: center;
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