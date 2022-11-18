<template>
  <div class="info container">
    <h3 class='red-text'>Information Of Familly</h3>
    <p>The Route Is :{{id}}</p>
    <!--{{$route.params.id}}-->
  </div>
</template>
<script>
  export default {
    props:['id'],
    data(){
      return{
        //id:this.$route.params.id 
      }
    }
  }
</script>
<style>
  .info {
    margin-top: 100px;
  }
  .info h3{
    font-weight: bold;
    white-space: nowrap;
    font-size: 30px;
  }
</style>