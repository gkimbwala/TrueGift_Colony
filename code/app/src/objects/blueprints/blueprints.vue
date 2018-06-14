<template lang="html">
  <div class="p-4">

    <div class="text-lg">
      Blueprints: design components
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="blueprint in blueprints" v-bind:key="blueprint.id">
        <card>
          <p class="text-sm text-red-dark">TODO: Card</p>
          <div class="h-64 border border-grey-dark mb-4 mr-4">
            <div class="bg-purple-light h-48">
              blueprint.img
            </div>
            <div class="p-2">
              <router-link
              :to="{ name: 'blueprint', params: { id: blueprint.id } }"
              class="no-underline"
              >{{blueprint.title}}
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
import grid from '@/components/layout/grid'

export default {
  computed: {
    blueprints () {
      return this.$store.getters.getSolutions
    }
  },
  props: ['id'],
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
