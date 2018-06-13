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
import devSearch from '@/modules/search/dev-search'

import devCreator from '@/views/dev/dashboard/creator'
import devInsights from '@/views/dev/dashboard/insights'
import devStream from '@/views/dev/dashboard/stream'
import devWorkflow from '@/views/dev/dashboard/workflow'

import devFeatured from '@/modules/status/featured'
import devNew from '@/modules/status/new'
import devRequests from '@/modules/status/requests'
import devUpdates from '@/modules/status/updates'

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
    devSearch,
    devCreator,
    devInsights,
    devStream,
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
