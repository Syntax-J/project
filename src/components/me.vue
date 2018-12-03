<template>
  <div>
  <div class="content_block">
    <div class="avatar">
    </div>
    <p>item 1</p>
    <button name="button">click</button>
  </div>
  <div class="content_block">
    <div class="avatar">
    </div>
    <p>item 2</p>
  </div>
  <div class="content_block">
    <div class="avatar">
    </div>
    <p>item 3</p></div>
  <div class="content_block">
    <div class="avatar">
    </div>
    <p>item 4</p>
  </div>
  <div class="content_block">
    <div class="avatar">
    </div>
    <p>item 5</p></div>
  <div class="content_block">
    <div class="avatar">
    </div>
    <p>item 6</p></div>
  <div class="content_block">
    <div class="avatar">
    </div>
    <p>item 7</p></div>
  <div class="content_block"></div>
  <div class="content_block"></div>
  <div class="content_block"></div>
  <div class="content_block"></div>
  <div class="content_block"></div>
  <div class="content_block"></div>
  <div class="content_block"></div>
  <div class="content_block"></div>

  </div>
</template>

<script>
export default {
  name:'me'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
p{
  text-align: center;
  color:white;
}
div{
  display: flex;
  flex-wrap: wrap
}
$border:1px;
.content_block{
  position: relative;
  box-sizing: border-box;
  width: 50%;
  padding: calc(25% - (#{$border})) 12.5%;
  border:$border solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar{
    position: absolute;
    top: 5%;
    padding: 25%;
    border-radius: 50%;
    background: white;
  }
  p{
    top: 65%;
    position: absolute;
  }
  button{
    background: yellowgreen;
    padding: 2.5% 7.5%;
    border-radius: 15%/25%;
    position: absolute;
    top: 80%;
  }
}
</style>
