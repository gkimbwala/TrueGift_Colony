<template lang="html">
  <div class="">
    {{ name }}
    <div class="w-1/4">
      <lineGraph></lineGraph>
    </div>
  </div>
</template>

<script>
import lineGraph from '@/modules/dynamics/graphs/line-graph'
export default {
  data () {
    return {
      name: 'user'
    }
  },
  components: { lineGraph }
}
</script>

<style lang="css">
</style>
