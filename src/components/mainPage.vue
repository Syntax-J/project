<template>
    <div>
    <img src="../assets/logo.png"/>
    <p>main page</p>
    <router-view/>
    <footer>foot</footer>
    <button @click="signIn">SignIn</button>
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
    signIn(a){
      console.log(this.$router.push('/login'));
    }
  }
}
</script>

<style lang='scss' scoped>
$fontsize:1.5rem;
button{
  background: yellowgreen;
  border:none;
  border: 0.1rem solid white;
  border-radius: 1rem;
  color:white;
  font-size:$fontsize;
  transition: all 0.5s;
  &:hover{
    border: 0.1rem solid yellowgreen;

    background: white;
    color:yellowgreen;
  }
}
footer{
  display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    position: fixed;
    bottom: 0;
    height:5rem;
    left:0;
    color:orange;
    font-size: $fontsize;
    background:yellowgreen;
    justify-content: center;
    align-items: center;
  }

</style>
