<template>
  <h1>CI testing app</h1>
  <pre>{{ count }}</pre>
  <button @click="inc()">inc</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const inc = () => {
  count.value++
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
