<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lightest p-2 flex flex-row justify-between items-center text-xs">

        <div class="w-1/3">
          <button
            @click="active = 'devCreator'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Creator
          </button>

          <button
            @click="active = 'devInsights'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Insights
          </button>

          <button
            @click="active = 'devStream'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Stream
          </button>

          <button
            @click="active = 'devWorkflow'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Workflow
          </button>
        </div>

    </div>

    <div class="">
      <component :is="active">
      </component>
    </div>

  </div>
</template>

<script>
import devCreator from '@/views/dev/dashboard/creator'
import devInsights from '@/views/dev/dashboard/insights'
import devStream from '@/views/dev/dashboard/stream'
import devWorkflow from '@/views/dev/dashboard/workflow'

export default {
  data () {
    return {
      active: 'devStream'
    }
  },
  computed: {
    tasks () {
      return this.$store.getters.getTasks
    },
    tests () {
      return this.$store.getters.getTests
    }
  },
  components: {
    devCreator,
    devInsights,
    devStream,
    devWorkflow
  }

}
</script>

<style lang="css">
</style>
