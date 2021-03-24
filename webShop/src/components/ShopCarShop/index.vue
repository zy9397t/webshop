<template>
  <div class="shopCarShop" >
      <h1>倪萍欧尼酱店铺</h1>
      <div class="shopInfo">
          <el-checkbox v-model="isChecked"  style="width:5%"></el-checkbox>
          <div class="img" style="width:10%">
              <img :src="shop.shopPicUrl" alt="商品图片">
          </div>
          <div class="shopDescription" style="width:30%">{{shop.shopDescription}}</div>
          <div class="shopDetails" style="width:20%">{{shop.shopDetails}}</div>
          <div class="unitPrice" style="width:10%">￥{{shop.unitPrice}}元</div>
          <el-input-number v-model="shopCount" @change="handleChange" :min="0" :max='99' label="描述文字" size="mini" style="width:20%"></el-input-number>
          <div class="allPrice" style="width:10%">￥{{allPrice}}元</div>
          <!-- <div class="del" @click="del" style="width:5%">删除</div> -->
          <div class="del" @click="del" style="width:5%">
              <el-button type="primary" icon="el-icon-delete" size="mini" class="but"></el-button>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:{
          shop:Object
      },
      mounted(){

      },
      data(){
          return{
              isChecked:true,
          }
      },
      methods:{
          handleChange(value){
            //   console.log(value)
          },
          del(){
             this.$confirm('此操作不可逆, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.shop = {}
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消删除'
                    // });            
                });
          }
      },
      computed:{
          allPrice:{
              get(){
                  return this.shop.shopCount * this.shop.unitPrice
              }
          },
          shopCount:{
              get(){
                  if(!this.shop.shopCount){
                      return 0
                  }
                  return this.shop.shopCount
              },
              set(value){
                  if(!value){
                      this.shop.shopCount = 0
                  }else{
                      this.shop.shopCount = value
                  }
              }
          }
      },
    //   watch:{
    //       shop(){
              
    //               if(Number.isNaN(this.shop.shopCount) || !this.shop.shopCount){
    //                   console.log(1)
    //                   this.shop.shopCount = 0
    //               }
             
    //       }
    //   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopCarShop
    text-align left
    h1 
        color black 
        font-weight bolder
    .shopInfo
        margin-top 10px 
        border 1px solid black
        display flex 
        padding 10px
        justify-content space-evenly
        align-items center
        .del 
            cursor pointer
            .but 
                transform scale(0.8)
                // background rgba(0,0,0,0.3)
                background transparent
                color skyblue
        div 
            text-align center
</style>
