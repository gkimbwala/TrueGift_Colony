<template lang="html">
  <div class="">

    <div class="text-base">
      Challenges
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="challenge in challenges" v-bind:key="challenge.id">
        <card>
          <p class="text-sm text-red-dark">TODO: Card</p>
          <div class="text-center border border-grey-dark mb-4 mr-4">
            <p>{{challenge.id}}</p>
            <router-link
              :to="{ name: 'challenge', params: { id: challenge.id } }"
              >{{challenge.title}}
            </router-link>
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
  props: ['id'],
  components: { card }
}
</script>

<style lang="css">
</style>
