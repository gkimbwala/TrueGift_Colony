<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lightest mb-4 p-2 flex flex-row justify-between items-center text-xs">

        <div class="w-1/3">
          <input
            @click="active = 'repoSearch'"
            class="bg-grey-lighter p-1 text-xs text-grey-dark font-medium rounded-sm shadow-inner" placeholder=" Search"
            />
        </div>

        <div class="w-1/3 text-center">
          <button
            @click="active = 'challengeList'"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            >Challenges
          </button>
        </div>

        <div class="w-1/3 text-right">
          <button
            @click="active = 'repoFeatured'"
            class="text-grey-dark p-1 rounded-sm text-xs hover:text-grey-darker"
            >F
          </button>
          <button
            @click="active = 'repoNew'"
            class="text-grey-dark p-1 rounded-sm text-xs hover:text-grey-darker"
            >N
          </button>
          <button
            @click="active = 'repoRequests'"
            class="text-grey-dark p-1 rounded-sm text-xs hover:text-grey-darker"
            >R
          </button>
          <button
            @click="active = 'repoUpdates'"
            class="text-grey-dark p-1 rounded-sm text-xs hover:text-grey-darker"
            >U
          </button>
        </div>

    </div>

    <div class="pl-4">
      <component :is="active">
      </component>
    </div>

  </div>
</template>

<script>
import repoSearch from '@/modules/search/repo-search'

import challengeList from '@/objects/challenges/challenge-list'

import repoFeatured from '@/modules/status/featured'
import repoNew from '@/modules/status/new'
import repoRequests from '@/modules/status/requests'
import repoUpdates from '@/modules/status/updates'

export default {
  data () {
    return {
      active: 'challengeList'
    }
  },
  components: {
    repoSearch,
    challengeList,
    repoFeatured,
    repoNew,
    repoRequests,
    repoUpdates
  }
}
</script>

<style lang="css">
</style>
