<template>
  <div>
   <p class='avatar-content'>
    <img :src='avatar'/>
    <span>我的账号</span>
   </p>
   <p>
   <div class='user-details'>
    <div class='avatar-wrapper'>
     <div class='avatar'><img :src='avatar2'/></div>
     <span>loram</span>
     <span class='identify'>已认证</span>
     <span class='race-details'>战绩详情 ></span>
    </div>    
   </div>
   </p>
   <div class=banner-content>
    <div class='banner'>banner</div>
    <div class='missions'>
      <div class='mission-details'>
        <div class='avatar'><img :src='avatar2'/></div>
        <span class='mission-title'>我的任务</span>
        <span class='mission-info'>3个任务未完成</span>
        <span class='mission-arrow'>></span>
      </div>
      <div class='mission-details'>
        <div class='avatar'><img :src='avatar2'/></div>
        <span class='mission-title'>专题活动</span>
        <span class='mission-arrow'>></span>
      </div>
    </div>
   </div>
  <p class='avatar-content'>
    <img :src='avatar'/>
    <span>我的关注</span>
   </p>
   <div>
    <div v-for="(item, index) in players" :key="index" class='players-contents'>
     <div class='avatar'><img :src='item.avatarUrl'/></div>
     <span class='players-name'>{{item.playersName}}</span>
     <span class='game-status' v-bind:class="{ lost: item.status=='失败' }">{{item.status}}</span>
     <span class='game-level' :class="classObject(item.level)">{{item.level}}</span>
     <span class='game-data'>{{item.kills}}/{{item.assist}}/{{item.death}}</span>
     <span class='game-time'>{{item.time}}</span>
    </div>
   </div>
</div>
</template>

<script>
export default {
  name:'me',
  data(){
    return{
      avatar:'../static/footer/logo.png',
      avatar2:'../static/footer/avatar.png',
      players:[
        {
          playersName:'loram',
          status:'失败',
          time:'14小时前',
          level:'VeryHigh',
          kills:10,
          assist:5,
          death:3,
          avatarUrl:'../static/footer/logo.png',
          heroImageUrl:'../static/footer/logo.png',
        },
        {
          playersName:'loram2',
          status:'胜利',
          time:'14小时前',
          level:'Normal',
          kills:10,
          assist:5,
          death:3,
          avatarUrl:'../static/footer/logo.png',
          heroImageUrl:'../static/footer/logo.png',
        },
        {
          playersName:'loram3',
          status:'胜利',
          time:'14小时前',
          level:'High',
          kills:10,
          assist:5,
          death:3,
          avatarUrl:'../static/footer/logo.png',
          heroImageUrl:'../static/footer/logo.png',
        },
        {
          playersName:'loram3',
          status:'失败',
          time:'14小时前',
          level:'VeryHigh',
          kills:10,
          assist:5,
          death:3,
          avatarUrl:'../static/footer/logo.png',
          heroImageUrl:'../static/footer/logo.png',
        },
        {
          playersName:'loram3',
          status:'胜利',
          time:'14小时前',
          level:'VeryHigh',
          kills:10,
          assist:5,
          death:3,
          avatarUrl:'../static/footer/logo.png',
          heroImageUrl:'../static/footer/logo.png',
        },
        {
          playersName:'loram3',
          status:'胜利',
          time:'14小时前',
          level:'VeryHigh',
          kills:10,
          assist:5,
          death:3,
          avatarUrl:'../static/footer/logo.png',
          heroImageUrl:'../static/footer/logo.png',
        },
        {
          playersName:'loram3',
          status:'胜利',
          time:'14小时前',
          level:'VeryHigh',
          kills:10,
          assist:5,
          death:3,
          avatarUrl:'../static/footer/logo.png',
          heroImageUrl:'../static/footer/logo.png',
        },
        {
          playersName:'loram3',
          status:'胜利',
          time:'14小时前',
          level:'VeryHigh',
          kills:10,
          assist:5,
          death:3,
          avatarUrl:'../static/footer/logo.png',
          heroImageUrl:'../static/footer/logo.png',
        }
      ]
    }
  },
  methods: {  //v-for 绑 class obj 大法 
        classObject(level) {
            let obj = {};
            if (level=='VeryHigh')  obj['very-high']=true;
            if (level=='Normal')  obj['normal']=true;
            return obj
            },
        }
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.avatar-content{
  height:30px;
  line-height:30px;
  padding-bottom:0px;
  background:#f3f3f3;
  img{
    height:14px;
    width:14px;
    margin-left:7px;
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
    display:flex;
    align-items:center;
    width:90%;
    height:100%;
    position:relative;
    .avatar{
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
    span{
      margin-left:10px;
      font-size:12px;
    }
    .identify{
      display:inline-block;
      background:#00a1ff;
      height:15px;
      border-radius:5px;
      padding:2px 10px 2px 10px;
      font-size:10px;
      color:white;
    }
    .race-details{
      position:absolute;
      right:0;
      margin-left:0px;
      margin-right:10px;
    }
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
  .missions{
    display:flex;
    align-items:center;
    height:40px;
    width:90%;
    background:#f3f3f3;
    border-left:1px solid #f3f3f3;
    .mission-details{
      position:relative;
      flex:0.5;
      height:38px;
      background:#FFFFFF;
      margin:0 1px 0 0px;
      .avatar{
        position:absolute;
        left:7px;
        top:5px;
        height:30px;
        width:30px;
        border-radius:50%;
        overflow:hidden;
        img{
          height:100%;
          width:100%;
        }
      }
      .mission-title{
        font-size:14px;
        position:absolute;
        left:44px;
        top:5px;
      }
      .mission-info{
        color:#a2a2a2;
        font-size:10px;
        position:absolute;
        left:44px;
        top:20px;
      }
      .mission-arrow{
        float:right;
        line-height:40px;
      }
    }
  }
}
.players-contents{
  border-bottom:1px solid #f3f3f3;
  height:50px;
  width:100%;
  position:relative;
  .avatar{
        position:absolute;
        left:7px;
        top:10px;
        height:30px;
        width:30px;
        border-radius:50%;
        overflow:hidden;
        img{
          height:100%;
          width:100%;
        }
      }
      .players-name{
         position:absolute;
         left:45px;
         top:10px;
         font-size:12px;
      }
      .game-status{
         position:absolute;
         left:45px;
         top:30px;
         font-size:12px;
         color:green;
      }
      .game-level{
         position:absolute;
         right:45px;
         top:10px;
         font-size:12px;
      }
      .game-data{
         position:absolute;
         right:45px;
         top:30px;
         font-size:12px;
      }
      .game-time{
         position:absolute;
         left:80px;
         top:30px;
         font-size:12px;
         color:#a2a2a2;
      }
}
.lost{
  color:red !important;
  }
.very-high{
  color:orange !important;
  }
.normal{
  color:#a2a2a2 !important;
  }
</style>
