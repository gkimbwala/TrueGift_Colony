<template>
  <div id="app">
    <navbar/>
    <router-view class="container m-auto"/>
  </div>
</template>

<script>
import '@/assets/css/master.css'
import navbar from '@/components/nav/navbar'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  min-height: 100.11vh;
}
</style>
