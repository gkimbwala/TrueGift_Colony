<template lang="html">
  <div>
    <div class="flex flex-row justify-between text-xs p-3">
      <p>{{ title }}: task progression</p>
      <p class="text-red-dark">TODO: Archives</p>
    </div>
    <div class="border border-grey-lighter flex flex-row">

      <div class="w-1/6 border text-xs p-2 mt-8">
        <p>Filters:</p>
        <p>- Tasks</p>
        <p>- Rep</p>
        <p>- Tokens</p>
        <p>- Domains</p>
        <p>- Skills</p>
        <p>- dueDate</p>
      </div>

      <div class="w-5/6 flex flex-col justify-start px-1 text-sm">

        <div class="w-full pt-2 pb-1 flex flex-row justify-start text-xs text-center">
          <div class="w-1/3">
            Open
          </div>

          <div class="w-1/3">
            Active
          </div>

          <div class="w-1/3">
            Complete
          </div>
        </div>

        <div class="w-full">
          <workload :items="tasks">
            <template slot-scope="task">
            </template>
          </workload>
        </div>

      </div>

      <!-- <task-list :items="tests">
        <template slot-scope="test">
        </template>
      </task-list> -->
    </div>

  </div>
</template>

<script>
import workload from '../tasks/workload'
export default {
  data () {
    return {
      title: 'activity'
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
    workload
  }
}
</script>

<style lang="css">
</style>
