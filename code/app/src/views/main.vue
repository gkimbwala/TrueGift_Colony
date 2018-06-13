<template lang="html">
  <div class="p-4">

    <router-link tag="button" class="bg-blue p-1" :to="{ name: 'test-comp', params: {} }">
      testComp
    </router-link>

    <!-- <router-link tag="button" class="bg-orange p-1" :to="{ name: 'test-id', params: {} }">
      testID
    </router-link> -->

    <div v-for="test in tests" :key="test.id">
      <router-link tag="button" class="bg-green p-1" :to=" { name: 'test-id', params: { id: test.id }}">
        testID: {{ test.id }}
      </router-link>
    </div>

    <router-view></router-view>

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
