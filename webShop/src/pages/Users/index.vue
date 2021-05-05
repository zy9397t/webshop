<template>
  <div class="container">
    <h1>用户管理</h1>
    <div class="top">
      <el-input v-model="keyWords" placeholder="请输入内容"></el-input>
      <el-button @click="search"> 搜索 </el-button>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="普通用户管理" name="first">
        <div>
          <el-table
            :data="users"
            style="width: 100%"
            max-height="100vh"
            :cell-style="{ 'text-align': 'center' }"
            :header-cell-style="{ 'text-align': 'center' }"
            class="table"
          >
            <el-table-column fixed prop="id" label="id" width="230">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="200">
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="300">
            </el-table-column>
            <el-table-column prop="pwd" label="密码" width="300">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  class="btn"
                  @click="ChangUserStatus(scope.row.id, scope.row.status)"
                  type="text"
                  size="small"
                >
                  {{ scope.row.status ? "解封" : "封禁" }}
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="商家用户管理" name="second">
        <div>
          <el-table
            :data="stores"
            style="width: 100%"
            max-height="100vh"
            :cell-style="{ 'text-align': 'center' }"
            :header-cell-style="{ 'text-align': 'center' }"
            class="table"
          >
            <el-table-column fixed prop="id" label="id" width="230">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="200">
            </el-table-column>
            <el-table-column prop="owner" label="电话" width="300">
            </el-table-column>
            <el-table-column prop="pwd" label="密码" width="300">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  class="btn"
                  @click="ChangUserStatus(scope.row.id, scope.row.status)"
                  type="text"
                  size="small"
                >
                  {{ scope.row.status ? "解封" : "封禁" }}
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import { searchUsers, changUserStatus } from "api";
export default {
  mounted() {
    let str = this.$route.query.str;
    let a = window.sessionStorage.getItem([str]);
    if (!a) {
      this.$router.back();
    }
    searchUsers({ keyWords: "", type: "user" }).then((result) => {
      this.users = result.data.users;
    });
    searchUsers({ keyWords: "", type: "stores" }).then((result) => {
      this.stores = result.data.stores;
    });
    window.sessionStorage.removeItem([str]);
  },
  data() {
    return {
      activeName: "first",
      keyWords: "",
      users: [],
      stores: [],
      select: {},
    };
  },
  methods: {
    handleClick(tab, event) {},
    ChangUserStatus(id, status) {
      status = status ? 0 : 1;
      changUserStatus({ id, status }).then((result) => {
        if (!result.code) {
          this.search();
        }
      });
    },
    search() {
      if (this.activeName === "first") {
        //搜索普通用户
        searchUsers({ keyWords: this.keyWords, type: "user" }).then(
          (result) => {
            this.$message.success('操作成功')
            this.users = result.data.users;
          }
        );
      } else {
        //搜索商家用户
        searchUsers({ keyWords: this.keyWords, type: "stores" }).then(
          (result) => {
            // this.$message.success('操作成功')
            this.stores = result.data.stores;
          }
        );
      }
    },
  },

  computed: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container {
  width: 80vw;
  // padding 30px
  box-sizing: border-box;
  margin-left: 10vw;
  margin-top: 6vh;
}

.top {
  display: flex;
}

.btn {
  cursor: pointer;
}

h1 {
  width: 80vw;
  height: 10vh;
  text-align: center;
  line-height: 5vh;
  font-size: 20px;
  font-weight: bolder;
  color: #505050;
}
</style>
