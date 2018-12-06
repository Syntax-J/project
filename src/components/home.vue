<template>
    <div class="wrap">
    <app-header></app-header>
    <transition name="fade">
    <app-slider v-if="toggle"></app-slider>
    </transition>
      <div class="router">
        <router-view/>
      </div>
    <app-footer></app-footer>
    </div>
</template>
<script>
import appHeader from '@/components/header'
import appFooter from '@/components/footer'
import appSlider from '@/components/slider'
export default {
  created() {
    console.log(this.$store)
  },
  data(){
    return{
      show: false,
    }
  },
  computed: {
    toggle () {
      return this.$store.state.show
    }
  },
   components: {
    appHeader,
    appFooter,
    appSlider,
  }
}
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding:0;
}
.wrap{
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;

}
.router{
  flex:1;
  overflow:auto;
  background: #FFFFFF;
  border-bottom:1px solid #f3f3f3;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ,transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform:translateX(-100%)
}
</style>
