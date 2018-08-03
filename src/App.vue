<template>
    <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width:100%;
  	height:100%
}
#app {
  overflow: scroll;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
