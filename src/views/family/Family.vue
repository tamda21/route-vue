<template>
  <div class="family container" >
  <div class="card" v-for="family in families" :key="family.id">
    <div class="card-content">
   <router-link :to="{name:'FamilyInfo',params:{id:family.id}}">
 <h3 class="card-title">{{family.name}}</h3>
   </router-link>
    <p>{{family. discrpt}}</p>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        families:[
         {id:1,name:"abde",discrpt:"father of family"}, 
          {id:2,name:"Meryem",discrpt:"mother of family"},
          {id:3,name:"loujaine",discrpt:"child of family"}
          ]
      }
    },
    mounted(){
      //fetch('url').then(res =>res.json()).then(data=>{
        //this.families=data
      })
    }
  }
</script>
<style>
   .family{
     margin-top: 100px;
   }
  .family .card{
    padding: 10px;
  }
</style>
<!-- 
 npm install json-server
json-server --watch data/db.json
-->