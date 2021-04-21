<template>
  <div class="container">
    <div class="basic-attribute">
      <el-form
        :model="editForm"
        size="small"
        label-width="150px"
        ref="editForm"
      >
        <el-row>
          <el-form-item label="商品名称" prop="shopname">
            <el-input
              v-model="editForm.name"
              :minlength="6"
              :maxlength="200"
              style="width: 90%"
              clearable
              aria-required="true"
              placeholder="请输入商品名"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="商品价格(新)" prop="newshopprice">
            <el-input
              v-model="editForm.newshopprice"
              :minlength="6"
              :maxlength="200"
              style="width: 90%"
              clearable
              aria-required="true"
              placeholder="请输入新价格"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="商品价格(旧)" prop="oldshopprice">
            <el-input
              v-model="editForm.oldshopprice"
              :minlength="6"
              :maxlength="200"
              style="width: 90%"
              clearable
              aria-required="true"
              placeholder="请输入旧价格"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="分类" prop="category">
            <el-input
              v-model="editForm.category"
              :minlength="6"
              :maxlength="200"
              style="width: 90%"
              clearable
              aria-required="true"
              placeholder="请输入商品分类"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="总量" prop="count">
            <el-input
              v-model="editForm.count"
              :minlength="6"
              :maxlength="200"
              style="width: 90%"
              clearable
              aria-required="true"
              placeholder="请输入商品总量"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="备注" prop="remark">
            <el-input
              v-model="editForm.remark"
              :minlength="6"
              :maxlength="200"
              style="width: 90%"
              clearable
              aria-required="true"
              placeholder="请输入备注"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-row>


<!-- https://jsonplaceholder.typicode.com/posts/ -->
      </el-form>
      <el-row>
        <el-upload
          class="upload-demo"
          action="http://localhost:4000/img"
          list-type="picture"
          :before-upload="beforeUpload"
          :auto-upload="true"
          :on-remove="removeImg"
          ref="upload"
        >
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
          <!-- <el-button
            style="margin-left: 10px"
            size="small"
            type="success"
            @click="submitUpload"
            >上传到服务器</el-button
          > -->
          <div slot="tip" class="el-upload__tip">
            只能上传png/jpg文件，且不超过20MB
          </div>
        </el-upload>
      </el-row>
    </div>
    <div slot="footer" class="dialog-footer right">
      <el-button size="small" @click="closeDialog('editForm')">取消</el-button>
      <el-button
        type="primary"
        size="small"
        @click="btnOk('editForm')"
        :loading="btnLoading"
        >确认</el-button
      >
    </div>
  </div>
</template>

<script>
import { img2Base64 } from "utils";
import { mapState } from "vuex";
export default {

  data() {
    return {
      fileList: [],
      btnLoading: false,
      editForm: {
        name: "",
        oldshopprice: "",
        newshopprice: "",
        remark:'',
        category:'',
        count:''
      },
    };
  },
  computed: {
    ...mapState({
      myStore:state => state.store.myStore
    })
  },
  methods: {
    //关闭弹窗
    closeDialog(formName) {
      this.$emit("close");
    },

    btnOk() {
      // console.log(this.fileList);
      let shop = {
        // id:this.myStore.id,
        name:this.editForm.name,
        oldshopprice:this.editForm.oldshopprice,
        newshopprice:this.editForm.newshopprice,
        remark:this.editForm.remark,
        count:this.editForm.count,
        category:this.editForm.category,
        imgs:this.fileList.map((img)=>{
            
          return {imgPath:img.fileName}
        })
      }
      // console.log(shop)
      // this.$store.dispatch('ADDSHOP')
      // if(!this.myStore.shop){}
      // this.myStore.shops.push(shop)
      if(!shop.name || !shop.oldshopprice || !shop.newshopprice || !shop.category || !shop.count){
        this.$message.error('数据不能为空')
      }else{
        let rz = /^\d+$/
        if(!rz.test(shop.newshopprice) || !rz.test(shop.oldshopprice) || !rz.test(shop.count)){
          this.$message.error('价格或数量只能为数字')
        }else{
          this.$store.commit('UPDATASHOPS',shop)
          // console.log(this.myStore.shops[0].imgurel)
          // console.log(this.myStore.shops[2].imgurel)
          this.closeDialog()
        }
      }
    },

    removeImg(file, fileList) {
      this.fileList.forEach((img, index) => {
        if (img.fileName === file.raw.name) {
          this.fileList.splice(index, 1);
        }
      });
    },

    async beforeUpload(file) {
      let flag = true;
      // let rz = new RegExp('/*[\.png|\.jpg|\.jpge]/')
      let re = /(\.png|\.jpg)$/i;
      if (!re.test(file.name)) {
        this.$message.error("仅支持png格式文件'");
        this.$refs["upload"].abort(file);
        return;
      }
      this.fileList.forEach((img) => {
        if (file.name === img.fileName) {
          this.$message.error("已传入相同图片");
          flag = false;
          this.$refs["upload"].abort(file);
        }
      });
      if (flag) {
        // let result = await img2Base64(file);
        this.fileList.push({
          fileName: file.name,
          // base64URL: result,
        });
      }
    },
  },
};
</script>

<style  scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.container {
  background: #fff;
  padding: 16px;
}
.header {
  display: flex;
  justify-content: space-between;
}
</style>