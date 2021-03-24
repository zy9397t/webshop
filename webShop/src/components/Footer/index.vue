<template>
  <div class="footer">
      <div class="top">
          <div>7天无理由退货</div>
          <div>满99全场包邮</div>
          <div>100%质量保证</div>
      </div>
      <div class="bottom">
          <div class="about">
              <span>首页|</span>
              <span>全部商品|</span>
              <span>关于我们</span>
          </div>
          <div>
              商城版权所有&copy;倪萍欧尼酱
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
    height 150px
    width 100%
    background-color gray
    .top   
        height 30%
        display flex 
        justify-content space-evenly
        align-items center
        font-size 15px
        font-weight bolder
        border-bottom 1px solid #909399
    .bottom
        height 70%
        display flex 
        flex-direction column
        justify-content center
        align-items center
        font-size 13px
        .about
            margin-bottom 10px
 
</style>
