<template lang="html">
  <div class="">
    <router-view></router-view>
    {{ user.fName }}
    <div class="w-1/4">
      <lineGraph></lineGraph>
    </div>
  </div>
</template>

<script>
import lineGraph from '@/modules/dynamics/graphs/line-graph'

export default {
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  },
  components: {
    lineGraph
  }
}
</script>

<style lang="css">
</style>
