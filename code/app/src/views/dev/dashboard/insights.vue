<template lang="html">
  <div class="">
    <div class="w-full mb-4 bg-grey-lighter border border-grey-light">
      <div class="h-80 relative flex flex-row items-center">
        <div class="absolute z-10 p-4 w-full flex flex-row justify-between text-center">
          <div class="w-1/4 border mx-4 h-32">
            <p class="text-xs text-red-dark">TODO: metrics</p>
          </div>
          <div class="w-1/4 border mx-4 h-32">
            <p class="text-xs text-red-dark">TODO: metrics</p>
          </div>
          <div class="w-1/4 border mx-4 h-32">
            <p class="text-xs text-red-dark">TODO: metrics</p>
          </div>
          <div class="w-1/4 border mx-4 h-32">
            <p class="text-xs text-red-dark">TODO: metrics</p>
          </div>
        </div>
        <div class="absolute z-10 p-4 pin-t w-full flex flex-row justify-between">
          <div class="w-1/3">
            <p class="text-xs text-red-dark">TODO: challenge.title</p>
          </div>
        </div>
        <!-- TODO: Focus Bar -->
        <div class="absolute z-10 py-2 px-4 pin-b w-1/2">
          <div class="flex flex-row text-xs items-center">
          <!-- Search -->
            <div class="mr-2">
              <input
                class="text-grey-dark bg-grey-lightest border p-2 rounded-sm text-xs hover:text-grey-darker"
                placeholder="Search"
              />
            </div>
            <!-- Scope -->
            <div class="mr-2">
              <p
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Domain ^
                <!-- dev, ops, repo, store -->
              </p>
            </div>
            <div class="mr-2">
              <p
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Context ^
                <!-- Domains, Challenges, Projects, Solutions, Blueprints, Courses -->
              </p>
            </div>
            <div class="">
              <p
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Selector ^
                <!-- based on context -->
              </p>
            </div>
          </div>
        </div>

        <div class="absolute z-10 py-2 px-4 pin-b pin-r w-1/3 text-right">
          <div class="flex flex-row justify-end text-xs">

            <div class="mr-2">
              <button
                @click="active = 'discourse'"
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Filters
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
    {{ title }}: task, rep, skills, domains; statistics + analytics
    <p>global scope: colony-wide - domain-wide</p>

    <div class="w-1/3">
      <lineGraph></lineGraph>
    </div>

  </div>
</template>

<script>
import lineGraph from '@/modules/dynamics/graphs/line-graph'

export default {
  data () {
    return {
      title: 'insights'
    }
  },
  components: {
    lineGraph
  }
}
</script>

<style lang="css" scoped>
</style>
