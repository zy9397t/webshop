<template>
  <div>
      <el-row>
          <el-col :span="20" :offset="2">
              <div class="grid-content bg-purple-dark mySet">
                  <el-container style="height:100%">
                        <el-container style="height:100%">
                            <el-main class="main">
                                <ShowCard v-for="(shop,index) in stores[2].shops" :key="index" :shop='shop' ></ShowCard>
                            </el-main>
                        </el-container>
                   </el-container>
              </div>
          </el-col>
      </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import ShowCard from 'components/ShowCard'
import {mapState} from 'vuex'

  export default {
      components:{
          ShowCard
      },
      computed:{
        ...mapState({
          stores:state => state.stores
        })
      },
      props:{
        //   shops:Object
      },
      methods:{
          showMore(){
              console.log("showMore")
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .el-row {
    margin-top:20px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  .el-col {
    border-radius: 0px;
  }
  .bg-purple-dark {
    background: #fff;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 0px;
    min-height: 36px;
    // height:500px
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    padding-left:20px;
    font-size 14px;
    display flex 
    align-items center
    // line-height: 60px;
  }
  
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    // line-height: 160px;
    padding 10px
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


  .mySet 
    height 500px

  .main 
    display flex 
    // justify-content space-evenly
    background #f5f5f5
    flex-wrap wrap
    overflow-y auto  

 
</style>
