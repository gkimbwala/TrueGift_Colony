<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lightest p-2 flex flex-row justify-between items-center text-xs">

      <div class="w-1/2">

        <router-link
          :to="{ name: 'user-activity' }"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Activity
        </router-link>

        <router-link
          :to="{ name: 'user-network' }"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Network
        </router-link>

        <router-link
          :to="{ name: 'user-profile' }"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Profile
        </router-link>

        <router-link
          :to="{ name: 'user-stats' }"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Statistics
        </router-link>

        <router-link
          :to="{ name: 'user-workflow' }"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Workflow
        </router-link>
      </div>

        <div class="w-1/3 text-right">

        </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style lang="css">
</style>
