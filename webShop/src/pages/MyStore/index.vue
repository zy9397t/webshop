<template>
  <div class="main">
    <div>
      <el-row :gutter="0" class="top">
        <el-col :span="24"
          ><div class="grid-content bg-purple">
            <!-- <h1>{{ position }}</h1> -->
            <div class="info">
              <span
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
    <div class="head">
      <div class="title">
        <span class="name">商店名称</span>
        <div>
          <el-button type="primary" size="mini" @click="add"
            >添加商品</el-button
          >
        </div>
      </div>
      <div></div>
    </div>
    <div class="body">
      <div class="bodycontainer">
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe
          :cell-style="{ 'text-align': 'center' }"
          :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
        >
          <el-table-column
            align="center"
            prop="id"
            label="序号"
            type="index"
            width="200"
          >
            <template slot-scope="scope">
              <span>{{
                scope.$index + (pagination.current - 1) * pagination.size + 1
              }}</span>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in columnData"
            align="center"
            :key="index"
            :label="item.label"
            :prop="item.prop"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作"
            width="180"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                size="small"
                v-if="scope.row.isSystemAdmin != 1"
                type="text"
                @click="edit(scope.row.id)"
                >编辑</el-button
              >
              <el-divider
                v-if="scope.row.isSystemAdmin != 1"
                direction="vertical"
              ></el-divider>
              <el-button
                size="mini"
                v-if="scope.row.isSystemAdmin != 1"
                type="text"
                title="删除"
                @click="del(scope.row.id)"
                >删除
              </el-button>
              <el-divider
                v-if="scope.row.isSystemAdmin != 1"
                direction="vertical"
              ></el-divider>
              <el-button
                v-if="scope.row.isSystemAdmin != 1"
                size="small"
                type="text"
                @click="resetPwd(scope.row.id)"
                >重置密码</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-dialog
        :title="editTitle"
        v-if="dialogedit"
        :visible="true"
        :close-on-click-modal="false"
        :show-close="false"
        ><Dialog @close="closeDialogEdit" @val-change="EditChange"></Dialog>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Dialog from "./dialog";

export default {
  components: {
    Dialog,
  },

  data() {
    return {
      tableData: [],
      dialogedit: false,
      editTitle: "",
      columnData: [
        { prop: "picture", label: "图片" },
        { prop: "userName", label: "商品名称" },
        { prop: "realName", label: "商品价格（新）" },
        { prop: "deptName", label: "商品价格（旧）" },
        { prop: "remark", label: "备注" },
      ],
    };
  },

  methods: {
    add() {
      this.dialogedit = true;
      this.editTitle = "商品添加";
    },
    //关闭弹窗
    closeDialogEdit() {
      this.dialogedit = false;
      setTimeout(() => {
        this.row_id = "";
      }, 500);
    },
    //发送新增和修改请求
    EditChange() {},
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
  display: flex;
  flex-direction: column;
}

.head {
  height: 10vh;
  display: flex;
  width: 100%;
  justify-content: center;
}

.title {
  align-content: center;
  line-height: 10vh;
  width: 80vw;
  justify-content: center;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
}

.name {
  font-weight: 700;
  font-size: 16px;
}

.body {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
}

.bodycontainer {
  width: 80vw;
  height: 70vh;
}
</style>