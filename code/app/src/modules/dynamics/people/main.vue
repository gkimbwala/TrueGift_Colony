<template lang="html">
  <div class="">
    {{ title }}: searchable list, sortable by contributions, reputation, skills
    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="person in people" v-bind:key="person.id">
        <card>
          <p class="text-sm text-red-dark">TODO: Card</p>
          <div class="h-64 border border-grey-dark mb-4 mr-4">
            <div class="bg-purple-light h-48">
              person.img
            </div>
            <div class="p-2">
              <router-link
                :to="{ name: 'people', params: { id: person.id } }"
                class="no-underline"
                >{{person.title}}
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
  data () {
    return {
      title: 'people'
    }
  },
  computed: {
    people () {
      return this.$store.getters.getChallenges
    }
  },
  components: { card },
  props: ['id']
}
</script>

<style lang="css">
</style>
