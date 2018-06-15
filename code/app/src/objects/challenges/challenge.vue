<template lang="html">
  <div class="">

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style lang="css">
</style>
