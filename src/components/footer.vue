<template>
   <footer>
        <ul>
          <li v-for="(item, index) in footerBar" :key="index" @click='routerHandler(item.routerPath)'>
          <img v-if='item.routerPath==$route.name' v-bind:src='item.iconUrlActive'/>
          <img v-else v-bind:src='item.iconUrl'/>
          <p v-bind:class="{ active: item.routerPath==$route.name }">{{item.infoText}}</p>
          </li>
        </ul>
    </footer>
</template>

<script>
export default {
  data(){
    return {
      count:0,
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
        this.$router.push({path:path});
      },
  },
  name:'appFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
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
.active{
  color:red;
}
</style>
