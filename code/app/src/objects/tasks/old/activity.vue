<template lang="html">
  <div class="w-1/3 my-4 border border-grey-lighter">
    <div class="w-full p-1 flex flex-row justify-start text-sm">

      <div class="">
        <button
          @click="active = 'devTasksOpen'"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          >Open
        </button>
      </div>

      <div class="">
        <button
          @click="active = 'devTasksActive'"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          >Active
        </button>
      </div>

      <div class="">
        <button
          @click="active = 'devTasksComplete'"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          >Complete
        </button>
      </div>

      <div class="">
        <button
          @click="active = 'devTasksArchived'"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          >Archived
        </button>
      </div>

    </div>

    <div class="">
      <task-list :items="tasks" :is="active" :active="active">
        <template slot-scope="task">
        </template>
      </task-list>
    </div>

    <!-- <task-list :items="tests">
      <template slot-scope="test">
      </template>
    </task-list> -->

  </div>
</template>

<script>
import taskList from './tasks/task-list'
export default {
  data () {
    return {
      active: 'devTasksOpen'
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
    devTasksOpen: taskList,
    devTasksActive: taskList,
    devTasksComplete: taskList,
    devTasksArchived: taskList
  }
}
</script>

<style lang="css">
</style>
