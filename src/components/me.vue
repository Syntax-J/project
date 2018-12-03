<template>
  <div>
   <p class='avatar-content'>
    <img :src='avatar'/>
    <span>我的账号</span>
   </p>
   <p>
   <div class='user-details'>
    <div class='avatar-wrapper'>
     <div class='avatar'>
     <img :src='avatar2'/>
     </div>
      <span>loram</span>
    </div>
    
   </div>
   </p>
   <div class=banner-content>
    <div class='banner'>banner</div>
    <div class='banner'>banner</div>
   </div>
  <p class='avatar-content'>
    <img :src='avatar'/>
    <span>我的关注</span>
   </p>
  </div>
</template>

<script>
export default {
  name:'me',
  data(){
    return{
      avatar:'../static/footer/logo.png',
      avatar2:'../static/footer/avatar.png',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.avatar-content{
   padding-bottom:0px;
  background:#DDDDDD;
  img{
    height:14px;
    width:14px;
    margin:12px 0 0 12px;
  }
  span{
    font-size:14px;
  }
}
.user-details{
  margin:10px 0 5px 0;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  width:100%;
  height:35px;

  .avatar-wrapper{
    width:90%;
    height:100%;
    .avatar{
  height:35px;
  width:35px;
  border-radius:50%;
  overflow:hidden;
  img{
    width:100%;
    height:100%;
  }
  }
  }
  span{
    position:absolute;
    left:60px;
    top:11.5px;
    font-size:12px;
  }
}
.banner-content{
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  .banner{
    color:white;
    line-height:100px;
    text-align:center;
    height:100px;
    width:90%;
    background:black;
    border-radius:10px;
    margin:7px 0 7px 0;
  }
}

</style>
