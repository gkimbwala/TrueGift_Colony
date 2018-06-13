<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lightest p-2 flex flex-row justify-between items-center text-xs">

        <div class="w-1/3">
          <input
            @click="active = 'devSearch'"
            class="bg-grey-lighter p-1 text-xs text-grey-dark font-medium rounded-sm shadow-inner" placeholder=" Search"
            />
        </div>

        <div class="w-1/3 text-center">
          <button
            @click="active = 'devActivity'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Activity
          </button>

          <button
            @click="active = 'devInsights'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Insights
          </button>

          <button
            @click="active = 'devTimeline'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Timeline
          </button>

          <button
            @click="active = 'devWorkflow'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Workflow
          </button>
        </div>

        <div class="w-1/3 text-right">
          <button
            @click="active = 'devFeatured'"
            class="text-grey-dark p-1 rounded-sm text-xs hover:text-grey-darker"
            >F
          </button>
          <button
            @click="active = 'devNew'"
            class="text-grey-dark p-1 rounded-sm text-xs hover:text-grey-darker"
            >N
          </button>
          <button
            @click="active = 'devRequests'"
            class="text-grey-dark p-1 rounded-sm text-xs hover:text-grey-darker"
            >R
          </button>
          <button
            @click="active = 'devUpdates'"
            class="text-grey-dark p-1 rounded-sm text-xs hover:text-grey-darker"
            >U
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
import devSearch from './search/dev-search'

import devActivity from './dashboard/activity'
import devInsights from './dashboard/insights'
import devTimeline from './dashboard/timeline'
import devWorkflow from './dashboard/workflow'

import devFeatured from './status/featured'
import devNew from './status/new'
import devRequests from './status/requests'
import devUpdates from './status/updates'

export default {
  data () {
    return {
      active: 'devActivity'
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
    devSearch,
    devActivity,
    devInsights,
    devTimeline,
    devWorkflow,
    devFeatured,
    devNew,
    devRequests,
    devUpdates
  }

}
</script>

<style lang="css">
</style>
