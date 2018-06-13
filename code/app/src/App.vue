<template>
  <div id="app" class="">
    <navbar/>
    <router-view/>
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

</style>
