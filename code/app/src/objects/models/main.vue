<template lang="html">
  <div>
    <div class="w-full h-80 bg-grey-lighter border border-grey-light rounded-b relative">

        <router-view name="model-nav"></router-view>

        <focus-bar></focus-bar>

        <status-bar></status-bar>

    </div>

    <router-view></router-view>

  </div>
</template>

<script>
import focusBar from '@/modules/dynamics/focus/bar'
import statusBar from '@/modules/dynamics/status/bar'

export default {
  components: {
    focusBar,
    statusBar
  }
}
</script>

<style lang="css">
</style>
