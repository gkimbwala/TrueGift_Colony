<template lang="html">
  <div class="p-4">

    <div class="text-lg">
      Project: focus is on implementation + work (paid / unpaid) opportunities
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="project in projects" v-bind:key="project.id">
        <card>
          <p class="text-sm text-red-dark">TODO: Card</p>
          <div class="h-64 border border-grey-dark mb-4 mr-4">
            <div class="bg-purple-light h-48">
              project.img
            </div>
            <div class="p-2">
              <router-link
              :to="{ name: 'project', params: { id: project.id } }"
              class="no-underline"
              >{{project.title}}
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
    projects () {
      return this.$store.getters.getProjects
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
