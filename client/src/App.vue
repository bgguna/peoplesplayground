<template>
    <div id="app">
      <img class="pp_logo" src="./assets/pp_logo_003.png" />
      <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.pp_logo {
    max-width: 100%;
    height: 100px;
}
</style>
