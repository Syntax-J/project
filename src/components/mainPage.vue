<template>
    <div class="wrap">
      <header>
        <ul class="main_tabs">
          <li class="avatar"></li>
          <ul class="mid_tabs">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <li></li>
        </ul>
      </header>
      <nav>
        <ul>
          <li @click="homepage()">Home</li>
          <li @click="sonpage()">Son1</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
      </nav>
      <div class="router">
        <router-view/>
      </div>
      <footer>
      </footer>
    </div>
</template>
<script>
export default {
  data(){
    return {
      count:0
    }
  },
  methods:{
homepage(){
this.$router.push({path:'/home'})
},
    sonpage(){
    this.$router.push({name:'son'})
    }
  }
}
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding:0;
}
header{
  flex:0.1;
  background: #9354bc;
  width: 100%;
  .main_tabs{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .avatar{
      margin: 0.5rem;
      margin-right: 0;
      border-radius: 50%;
      padding: 1.5rem;
    }
    li{
      display: inline-block;
      background: white;
      padding: 1rem;
    }
    .mid_tabs{
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      li{
        display: inline-block;
        background: white;
        padding: 1rem
      }
    }
  }
}
footer{
  background: #9354bc;
  flex:0.1;
}
nav {
  flex:0.1;
    display: flex;

    ul{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      flex:0.25;
      background: #bcff05;
    }
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
  background: #08db98;
}
</style>
