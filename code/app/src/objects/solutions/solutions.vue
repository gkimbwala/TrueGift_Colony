<template lang="html">
  <div class="p-4">

    <div class="text-lg">
      Solutions: focus is on design
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="solution in solutions" v-bind:key="solution.id">
        <card>
          <p class="text-sm text-red-dark">TODO: Card</p>
          <div class="h-64 border border-grey-dark mb-4 mr-4">
            <div class="bg-purple-light h-48">
              solution.img
            </div>
            <div class="p-2">
              <router-link
              :to="{ name: 'solution', params: { id: solution.id } }"
              class="no-underline"
              >{{solution.title}}
            </router-link>
            </div>
          </div>
        </card>
      </div>
    </div>

  </div>
</template>

<script>
import card from '@/components/elements/card'

export default {
  computed: {
    solutions () {
      return this.$store.getters.getSolutions
    }
  },

  components: {
    card
  }
}
</script>

<style lang="css">
</style>
