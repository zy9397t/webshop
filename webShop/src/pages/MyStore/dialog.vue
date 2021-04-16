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
              v-model="editForm.shopname"
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
      </el-form>
      <el-row>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture"
          :before-upload="beforeUpload"
          :auto-upload="true"
          :on-remove="removeImg"
          :ref="upload"
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
            只能上传jpg/png/jpge文件，且不超过20MB
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
import {getMyStore} from 'api'
export default {

  data() {
    return {
      fileList: [],
      btnLoading: false,
      editForm: {
        name: "",
        oldshopprice: "",
        newshopprice: "",
      },
    };
  },
  computed: {
    ...mapState({
      store:state => state.store.myStore
    })
  },
  methods: {
    //关闭弹窗
    closeDialog(formName) {
      this.$emit("close");
    },

    btnOk() {
      // console.log(this.fileList);
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
      let re = /(\.png|\.jpg|\.jpge)$/i;
      if (!re.test(file.name)) {
        this.$message.error("仅支持'png,jpg,jpge格式文件'");
        this.$refs["upload"].abort(file);
        return;
      }
      this.fileList.forEach((img) => {
        if (file.name === img.fileName) {
          this.$message.error("已传入相同图片");
          flag = !flag;
          this.$refs["upload"].abort(file);
        }
      });
      if (flag) {
        let result = await img2Base64(file);
        this.fileList.push({
          fileName: file.name,
          base64URL: result,
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