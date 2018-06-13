<template lang="html">
  <div class="p-4">

    <div class="text-lg">
      Project: focus is on implementation + work (paid / unpaid) opportunities
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="project in projects" v-bind:key="project.id">
        <card>
          <div class="h-80 text-center border border-grey-dark mb-4 mr-4">
            <img src="@/assets/img/logo.png" alt="" class="">
            <div class="">
              <p class="">{{project.title}}</p>
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

  component: card
}
</script>

<style lang="css">
</style>
