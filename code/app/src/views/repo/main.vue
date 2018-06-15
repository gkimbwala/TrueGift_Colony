<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lightest p-2 flex flex-row justify-between items-center text-xs">

      <div class="w-3/10">
        <router-link
          :to="{ name: 'challenges' }"
          class="text-grey-dark p-2 text-xs hover:text-grey-darker"
          tag="button"
          >Challenges
        </router-link>
        <router-link
          :to="{ name: 'models' }"
          class="text-grey-dark p-2 text-xs hover:text-grey-darker"
          tag="button"
          >Models
        </router-link>
        <router-link
          :to="{ name: 'projects' }"
          class="text-grey-dark p-2 text-xs hover:text-grey-darker"
          tag="button"
          >Projects
        </router-link>
      </div>

        <div class="w-3/5 flex flex-row text-left">
          <button
            class="text-grey-dark p-2 text-xs hover:text-grey-darker"
            >breadcrumb
          </button>
          <button class="text-grey-dark text-xs" disabled>|</button>
          <button
            class="text-grey-dark p-2 text-xs hover:text-grey-darker"
            >breadcrumb
          </button>
          <button class="text-grey-dark text-xs" disabled>|</button>
          <button
            class="text-grey-dark p-2 text-xs hover:text-grey-darker"
            >breadcrumb
          </button>
        </div>

      <div class="w-1/10 text-right">
        <p class="text-xs text-red-dark">TODO: user-actions</p>
      </div>

    </div>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  data () {
    return {
      route: this.$route.params.id
    }
  }
}
</script>

<style lang="css">
</style>
