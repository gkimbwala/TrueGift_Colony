<template lang="html">
  <div class="p-6">

    <div class="text-lg">
      Challenges
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="challenge in challenges" v-bind:key="challenge.id">
        <card>
          <div class="h-80 text-center border border-grey-dark mb-4 mr-4">
            <img src="@/assets/img/logo.png" alt="" class="">
            <div class="">
              <p class="">{{challenge.title}}</p>
              <p class="text-sm">{{challenge.type}}</p>
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
      challenges: [
        {
          id: 1,
          title: 'item 1',
          type: 'emergency'
        },
        {
          id: 2,
          title: 'item 2',
          type: 'emergency'
        },
        {
          id: 3,
          title: 'item 3',
          type: 'development'
        },
        {
          id: 4,
          title: 'item 4',
          type: 'development'
        },
        {
          id: 5,
          title: 'item 5',
          type: 'emergency'
        },
        {
          id: 6,
          title: 'item 6',
          type: 'development'
        },
        {
          id: 7,
          title: 'item 7',
          type: 'development'
        },
        {
          id: 8,
          title: 'item 8',
          type: 'emergency'
        },
        {
          id: 9,
          title: 'item 9',
          type: 'development'
        }
      ]
    }
  },

  component: card
}
</script>

<style lang="css">
</style>
