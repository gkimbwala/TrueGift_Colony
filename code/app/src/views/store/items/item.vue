<template lang="html">
  <div class="">
    {{ itemID }}
    {{ itemTitle }}
  </div>
</template>

<script>
export default {
  computed: {
    itemID () {
      return this.$route.params.id
    },
    itemTitle () {
      return this.$route.params.title
    }
  }
}
</script>

<style lang="css">
</style>
