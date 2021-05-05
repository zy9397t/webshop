<template>
  <div class="main">
    <div>
      <el-row :gutter="0" class="top">
        <el-col :span="24"
          ><div class="grid-content bg-purple">
            <!-- <h1>{{ position }}</h1> -->
            <div class="info">
              <span>你好，{{ myStore.name }}
                <span class="logout cup" @click="logout">退出登录</span>
              </span>
            </div>
          </div></el-col
        >

        <!-- <el-col :span="12"><div class="grid-content bg-purple"></div></el-col> -->
      </el-row>
    </div>
    <div class="head">
      <div class="title">
        <span class="name">商店列表</span>
        <div>
          <el-button type="primary" size="mini" @click="add"
            >添加商品</el-button
          >
          <el-button type="" size="mini" @click="addShops">上传</el-button>
        </div>
      </div>
      <div></div>
    </div>
    <div class="body">
      <div class="bodycontainer">
        <el-table
          :data="myStore.shops"
          style="width: 100%"
          stripe
          :cell-style="{ 'text-align': 'center' }"
          :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
        >
          <!-- <el-table-column
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
          </el-table-column> -->
          <el-table-column prop="imgurel" label="商品图片" align="center">
            <!-- <img :src="shop.shopPics[0].base64URL" alt="" v-show="shop.imgurl"> -->
            <template slot-scope="scope">
              <img 
                :src="scope.row.imgurel ? 'http://localhost:4000/public/'+scope.row.imgurel : ''"
                alt=""
                style="width: 100px; height: 100px"
              />
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
                @click="edit(scope.row)"
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
                @click="del(scope.$index)"
                >删除
              </el-button>
              <el-divider
                v-if="scope.row.isSystemAdmin != 1"
                direction="vertical"
              ></el-divider>
              <!-- <el-button
                v-if="scope.row.isSystemAdmin != 1"
                size="small"
                type="text"
                @click="resetPwd(scope.row.id)"
                >重置密码</el-button
              > -->
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

      <el-dialog
        :title="editTitle"
        v-if="dialogedit2"
        :visible="true"
        :close-on-click-modal="false"
        :show-close="false"
        ><Dialog @close="closeDialogEdit" @val-change="EditChange" :selectShop='selectShop'></Dialog>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import Dialog from "./dialog";
import { mapState } from "vuex";
// import {JsonFilter} from 'utils'
export default {
  mounted(){
    if(!this.$store.state.store.myStore.id){
      this.$router.back()
    }
  },
  components: {
    Dialog,
  },
  computed: {
    ...mapState({
      myStore: (state) => state.store.myStore,
    }),
  },
  data() {
    return {
      // tableData: [],
      dialogedit: false,
      dialogedit2:false,
      selectShop:{},
      editTitle: "",
      columnData: [
        { prop: "name", label: "商品名称" },
        { prop: "newshopprice", label: "商品价格（新）" },
        { prop: "oldshopprice", label: "商品价格（旧）" },
        { prop: "count", label: "数量" },
        { prop: "category", label: "分类" },
        { prop: "remark", label: "备注" },
      ],
    };
  },

  methods: {
    edit( shop ){
      console.log(shop)
      this.selectShop = shop
      this.dialogedit2 = true
      this.editTitle = '商品修改'
    },
    logout(){
      this.$store.commit('LOGOUT')
     
    },
    add() {
      this.dialogedit = true;
      this.editTitle = "商品添加";
    },
    //关闭弹窗
    closeDialogEdit() {
      this.dialogedit = false;
      this.dialogedit2 = false;
      setTimeout(() => {
        this.row_id = "";
      }, 500);
    },

    //发送新增和修改请求
    EditChange() {},
    del(value) {
      
      this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.$store.commit("DELSHOPS", value);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    addShops() {
      // console.log(JsonFilter( JSON.stringify(this.myStore.shops)))
      let obj ={
        shops:JSON.stringify(this.myStore.shops),
        id: this.myStore.id,
      };
        this.$store.dispatch("ADDSHOP", obj);
    },
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