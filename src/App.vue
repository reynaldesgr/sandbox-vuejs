<template>
 <header>
   <nav>
     <form>
       <RouterLink to="/">
         <img src="/ytb.png" alt="Youtube">
       </RouterLink>
       <form>
         <input type="text" placeholder="Search...">
       </form>
       <RouterView></RouterView>
       <HelloWorld></HelloWorld>
     </form>
   </nav>
 </header>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
