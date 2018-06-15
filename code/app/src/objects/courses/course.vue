<template lang="html">
  <div class="">

    <div class="w-full mb-4 bg-grey-lighter h-80 border border-grey-light">
      <div class="h-80 relative flex flex-row justify-between">
        <div class="absolute z-10 p-4 pin-t w-full flex flex-row justify-between">
          <div class="w-1/3">
            <p class="text-xs text-red-dark">TODO: course.title</p>
          </div>
          <div class="w-1/3 text-right">
            <p class="text-xs text-red-dark">TODO: user-menu</p>
          </div>
        </div>
        <div class="absolute z-10 py-2 px-4 pin-b w-1/2">
          <div class="flex flex-row text-xs">

            <div class="mr-2">
              <button
                @click="active = 'insights'"
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Insights
              </button>
            </div>

            <div class="mr-2">
              <button
                @click="active = 'overview'"
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Overview
              </button>
            </div>

            <div class="">
              <button
                @click="active = 'people'"
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >People
              </button>
            </div>

          </div>
        </div>

        <div class="absolute z-10 py-2 px-4 pin-b pin-r w-1/3 text-right">
          <div class="flex flex-row justify-end text-xs">

            <div class="mr-2">
              <button
                @click="active = 'discourse'"
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Discourse
              </button>
            </div>

            <div class="mr-2">
              <button
                @click="active = 'projects'"
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Projects
              </button>
            </div>

            <div class="mr-2">
              <button
                @click="active = 'models'"
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Solutions
              </button>
            </div>

            <div class="">
              <button
                @click="active = 'tasks'"
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Tasks
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="">
      <component :is="active">

      </component>
    </div>

  </div>
</template>

<script>
import insights from '@/modules/dynamics/insights'
import overview from '@/modules/dynamics/overview'
import people from '@/modules/dynamics/people'
import discourse from '@/modules/discourse/discourse'

import projects from '@/objects/projects/projects'
import models from '@/objects/models/models'
import tasks from '@/objects/tasks/workload'

export default {
  data () {
    return {
      active: 'overview'
    }
  },
  components: {
    overview,
    insights,
    people,
    discourse,
    projects,
    models,
    tasks
  }
}
</script>

<style lang="css">
</style>
