<template>
  <div>
      <h1>Msite</h1>
      <div>id:{{id}}</div>
      <button @click="test()">+</button>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    methods:{
      test(){
        this.$store.dispatch('add')
      }
    },
    computed:{
      ...mapState({
        id: state => state.test.id
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
h1 
 color red
 
</style>
