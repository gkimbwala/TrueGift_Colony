<template lang="html">
  <div class="p-4">

    <router-link tag="button" class="bg-red p-1" :to="{ name: 'user-comp', params: {} }">
      userComp
    </router-link>

    <!-- <router-link tag="button" class="bg-orange p-1" :to="{ name: 'test-id', params: {} }">
      testID
    </router-link> -->

    <div v-for="test in tests" :key="test.id">
      <router-link tag="button" class="bg-orange p-1" :to=" { name: 'user-id', params: { id: test.id }}">
        userID: {{ test.id }}
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    tests () {
      return this.$store.getters.getTests
    }
  }
}
</script>

<style lang="css">
</style>
