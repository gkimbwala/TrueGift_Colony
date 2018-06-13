<template lang="html">
  <div class="p-4">

    <div class="text-lg">
      Solutions: focus is on design
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="solution in solutions" v-bind:key="solution.id">
        <card>
          <div class="h-80 text-center border border-grey-dark mb-4 mr-4">
            <img src="@/assets/img/logo.png" alt="" class="">
            <div class="">
              <p class="">{{solution.title}}</p>
            </div>
          </div>
        </card>
      </div>
    </div>

  </div>
</template>

<script>
import card from '@/components/elements/card'
import grid from '@/components/layout/grid'

export default {
  computed: {
    solutions () {
      return this.$store.getters.getSolutions
    }
  },

  components: {
    card,
    grid
  }
}
</script>

<style lang="css">
</style>
