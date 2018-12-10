<template>
  <div>
    <header>
      <div class='header-outter'>
        <div class='header-wrapper'>
          <div class='avatar' @click="change"><img :src='avatar'/></div>
          <img class='main-logo' :src='logo'/>
        </div>
      </div>
   </header>
  </div>
</template>

<script>
import appSlider from '@/components/slider'
export default {
  name:'appHeader',
  data(){
    return {
      logo:'../static/header/max_logo3.png',
      avatar:'../static/footer/avatar.png',
    }
  },
  methods:{
    change(){
      this.$store.commit('SLIDER_BAR_TOGGLE')
    }
  },
   components: {
    appSlider,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
header{
  flex:0.1;
  background: rgb(33, 33, 33);
  width: 100%;
  .header-outter{
    width:100%;
    display:flex;
    justify-content:center;
  .header-wrapper{
    position:relative;
    height:100%;
    width:90%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    .avatar{
     position:absolute;
     left:0px;
     display:inline-block;
     height:30px;
     width:30px;
     border-radius:50%;
     overflow:hidden;
      img{
        width:100%;
        height:100%;
      }
    }
        .main-logo{
          transform:scale(0.5,0.5)
          }
    }
  }
}

</style>
