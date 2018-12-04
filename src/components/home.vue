<template>
    <div class="wrap">
      <header>
        <div><img :src='logo'/></div>
      </header>
      <div class="router">
        <router-view/>
      </div>
      <footer>
        <ul>
          <li v-for="(item, index) in footerBar" :key="index" @click='routerHandler(item.routerPath)'>
          <img v-if='item.routerPath==$route.name' v-bind:src='item.iconUrlActive'/>
          <img v-else v-bind:src='item.iconUrl'/>
          <p v-bind:class="{ active: item.routerPath==$route.name }">{{item.infoText}}</p>
          </li>
        </ul>
      </footer>
    </div>
</template>
<script>
export default {
  data(){
    return {
      num:0,
      count:0,
      logo:'../static/header/max_logo3.png',
      footerBar:[
        {
          iconUrl:'../static/footer/logo.png',
          iconUrlActive:'../static/footer/logo_active.png',
          infoText:'我',
          routerPath:'me'
        },
        {
          iconUrl:'../static/footer/logo.png',
          iconUrlActive:'../static/footer/logo_active.png',
          infoText:'数据',
          routerPath:'data'
        },
        {
          iconUrl:'../static/footer/logo.png',
          iconUrlActive:'../static/footer/logo_active.png',
          infoText:'赛事',
          routerPath:'race'
        },
        {
          iconUrl:'../static/footer/logo.png',
          iconUrlActive:'../static/footer/logo_active.png',
          infoText:'发现',
          routerPath:'explore'
        },
        {
          iconUrl:'../static/footer/logo.png',
          iconUrlActive:'../static/footer/logo_active.png',
          infoText:'直播',
          routerPath:'stream'
        },
      ]
    }
  },
  methods:{
    routerHandler(path){
        this.$router.push({path:path})
      },
  }
}
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding:0;
}
.active{
  color:red;
}
header{
  flex:0.1;
  background: rgb(33, 33, 33);
  width: 100%;
  div{
    height:100%;
    width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
        img{
          transform:scale(0.5,0.5)
          }
    }
}
footer{
  background: #FFFFFF;
    ul{
      margin:5px 0;
      display:flex;
      flex-direction:row;
      justify-content: space-around;
      list-style-type:none;
      font-family:'PingFangSC-Regular';
        li{
          text-align:center;
          color:#c3baba;
          font-size:12px;
           img{
             height:32px;
             width:32px;
           }
        }
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
  background: #FFFFFF;
  border-bottom:1px solid #f3f3f3;
}
</style>
