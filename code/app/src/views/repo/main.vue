<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lightest p-2 flex flex-row justify-between items-center text-xs">

      <div class="w-1/3">
        <button
          @click="active = 'challengeList'"
          class="text-grey-dark p-2 text-xs hover:text-grey-darker"
          >Challenges
        </button>
      </div>

      <div class="w-1/3 text-right">
        <p class="text-xs text-red-dark">TODO: user-actions</p>
      </div>

    </div>

    <div class="">
      <component :is="active">
      </component>
    </div>

  </div>
</template>

<script>
import challengeList from '@/objects/challenges/challenges'

export default {
  data () {
    return {
      active: 'challengeList'
    }
  },
  components: {
    challengeList
  }
}
</script>

<style lang="css">
</style>
