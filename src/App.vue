<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/family">Familly</router-link>
    <div class="buttons">
  <button class="waves-effect waves-light btn" @click="back">Back</button>
  <button class="waves-effect waves-light btn" @click="redirect">Redirect</button>
  <button class="waves-effect waves-light btn" @click="forward">Forward</button>
    </div>
  </nav>
  
  <router-view/>
</template>
<script>
  export default {
    methods:{
      back(){
        this.$router.go(-1)
      },
      redirect(){
        this.$router.push({name:'home'})
        
      },
      forward(){
        this.$router.go(1)
        
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #fff;
  box-shadow: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  background-color: #f00;
  padding: 10px;
  border-radius: 5px;
}
nav .bottons {
  position: fixed;
  top: 0;
  left: 50%;
}
nav .buttons button{
  margin-right: 5px;
}
</style>
