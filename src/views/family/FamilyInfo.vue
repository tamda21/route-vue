<template>
  <div class="info container">
    <h3 class='red-text'>Information Of Familly</h3>
    <p>The Route Is :{{$route.params.id}}</p>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        //id:this.$route.params.id 
      }
    }
  }
</script>