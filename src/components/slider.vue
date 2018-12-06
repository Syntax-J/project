<template>
   <div class='slider'>
    <button @click="change">off</button>
   </div>
</template>

<script>
export default {
  methods:{
    change(){
      this.$store.commit('toggle')
    }
  },
  name:'appSlider'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.slider{
  position:absolute;
  z-index:9999;
  height:100%;
  width:100%;
  top:0;
  background:rgba(0,0,0,0.5);
}
</style>
