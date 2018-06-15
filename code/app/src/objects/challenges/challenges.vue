<template lang="html">
  <div class="">

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="challenge in challenges" v-bind:key="challenge.id">
        <card>
          <p class="text-sm text-red-dark">TODO: Card</p>
          <div class="h-64 border border-grey-dark mb-4 mr-4">
            <div class="bg-purple-light h-48">
              challenge.img
            </div>
            <div class="p-2">
              <router-link
                :to="{ name: 'challenge', params: { id: challenge.id } }"
                class="no-underline"
                >{{challenge.title}}
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
    challenges () {
      return this.$store.getters.getChallenges
    }
  },
  components: { card },
  props: ['id']
}
</script>

<style lang="css">
</style>
