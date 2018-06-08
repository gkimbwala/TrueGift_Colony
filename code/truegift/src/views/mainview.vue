<template lang="html">
  <div class="p-6">
    <router-link :to="{ name: 'activity', params: {} }">
      Activity
    </router-link>
      <br class="mb-4">
    <router-link :to="{ name: 'challenges', params: {} }">
      Challenges
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
