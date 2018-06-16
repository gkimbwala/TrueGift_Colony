<template lang="html">

  <div class="flex flex-row justify-between">

    <div class="w-1/2 absolute z-10 py-2 px-4 pin-t">
      <div class="flex flex-row text-xs">
        <div class="mr-2">
          <router-link
            :to="{ name: 'blueprint-discourse' }"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            tag="button"
            >Discourse
          </router-link>
        </div>
        <div class="mr-2">
          <router-link
            :to="{ name: 'blueprint-insights' }"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            tag="button"
            >Insights
          </router-link>
        </div>
        <div class="mr-2">
          <router-link
            :to="{ name: 'blueprint-overview' }"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            tag="button"
            >Overview
          </router-link>
        </div>
        <div class="">
          <router-link
            :to="{ name: 'blueprint-people' }"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            tag="button"
            >People
          </router-link>
        </div>
      </div>
    </div>

    <div class="w-1/2 absolute z-10 py-2 px-4 pin-t pin-r text-right">
      <div class="flex flex-row justify-end text-xs">
        <div class="mr-2">
          <router-link
            :to="{ name: 'blueprint-courses' }"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            tag="button"
            >Courses
          </router-link>
        </div>
        <div class="">
          <router-link
            :to="{ name: 'blueprint-tasks' }"
            class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
            tag="button"
            >Tasks
          </router-link>
        </div>
      </div>
    </div>

</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
