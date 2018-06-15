<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lightest p-2 flex flex-row justify-between items-center text-xs">

      <div class="w-1/3">
        <router-link
          :to="{ name: 'dev-activity' }"
          @click="active = 'devActivity'"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Activity
        </router-link>

        <router-link
          :to="{ name: 'dev-insights' }"
          @click="active = 'devInsights'"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Insights
        </router-link>

        <router-link
          :to="{ name: 'dev-tasks' }"
          @click="active = 'devTasks'"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Tasks
        </router-link>

      </div>

      <div class="w-1/3 text-center">

        <router-link
          :to="{ name: 'user-workflow', params: { name: user.fName }}"
          @click="active = 'devWorkflow'"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Workflow
        </router-link>
      </div>

        <div class="w-1/3 text-right">
          <router-link
            :to="{ name: 'create-task' }"
            class="w-16 bg-green-dark text-xs text-grey-lightest p-1 rounded-sm"
            tag="button"
            >Create
          </router-link>
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
