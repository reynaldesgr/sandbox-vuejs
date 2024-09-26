<template>
 <header>
   <nav>
     <form>
       <RouterLink to="/">
       </RouterLink>
       <RouterView></RouterView>
     </form>
   </nav>
 </header>
</template>

<script>

export default {
  name: 'App'
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
