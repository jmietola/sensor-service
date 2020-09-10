<template>
  <div id="app">
    <Summary msg="Sensor API"/>
  </div>
</template>

<script>
import Summary from './components/Summary.vue'

export default {
  name: 'App',
  components: {
    Summary
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
  background-color:  #1f1f1f;
  margin-top: 60px;
}
</style>
