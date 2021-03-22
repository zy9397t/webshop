<template>
  <div>
    <!-- <sample></sample> -->

    <!-- <router-link to='/Msite'>首页</router-link> -->
      <router-view></router-view>

      <Guider/>
  </div>
</template>

<script type="text/ecmascript-6">
// import sample from 'components/sample'
import Guider from 'components/Guider'
  export default {
    name:'App',
    components:{
      // sample,
      Guider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>

