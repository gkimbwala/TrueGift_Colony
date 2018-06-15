<template lang="html">
  <div class="p-4">

    <div class="text-lg">
      Models: focus is on design
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="model in models" v-bind:key="model.id">
        <card>
          <p class="text-sm text-red-dark">TODO: Card</p>
          <div class="h-64 border border-grey-dark mb-4 mr-4">
            <div class="bg-purple-light h-48">
              model.img
            </div>
            <div class="p-2">
              <router-link
              :to="{ name: 'model', params: { id: model.id } }"
              class="no-underline"
              >{{model.title}}
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
    models () {
      return this.$store.getters.getModels
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
