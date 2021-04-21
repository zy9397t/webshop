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
    },
    mounted(){
      window.onbeforeunload = ()=>{
       
        window.sessionStorage.setItem('state',JSON.stringify(this.$store.state))
        
      }
      
      window.onload = ()=>{
       
        let state = window.sessionStorage.getItem('state')
        
        // this.$store.state = JSON.parse(state)
        if(state){
          this.$store.replaceState(JSON.parse(state))
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>

