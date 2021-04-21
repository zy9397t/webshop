<template>
    
  <div class="container">
      <h1>用户管理</h1>
    <el-table
      :data="tableData4"
      style="width: 100%"
      max-height="100vh"
      :cell-style = "{'text-align':'center'}"
      :header-cell-style = "{'text-align':'center'}"

      class="table"
    >
      <el-table-column fixed prop="id" label="id" width="120">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="phone" label="电话" width="360"> </el-table-column>
      <el-table-column prop="pwd" label="密码" width="360"> </el-table-column>
      <!-- <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column> -->
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            class="btn"
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  computed: {
    tableData4() {
      let arr = [];
      for (let i = 0; i < 10; i++) {
        let obj = {
          id: "user" + Math.round(Math.random() * 1000),
          name: this.name[i],
          phone: Math.round(Math.random() * Math.pow(10, 11)),
          pwd: 123,
        };
        arr.push(obj)
      }

      return arr
    },
  },
  data() {
    return {
    //   tableData4: [],
    name:['芜湖','起飞','很难得辣','是个大佬','清云出月风景也',
          'ui设计','码农1号','示范工程','剑帝','盖亚'
    ]
    };
  },
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

.btn {
  cursor: pointer;
}
h1
    width 80vw
    height 10vh
    text-align center
    line-height 5vh
    font-size 20px
    font-weight bolder
    color #505050

</style>
