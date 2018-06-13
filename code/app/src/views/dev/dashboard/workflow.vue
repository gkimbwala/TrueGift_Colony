<template lang="html">
  <div class="">
    <div class="w-full mb-4 bg-grey-lighter border border-grey-light">
      <div class="h-80 relative flex flex-row items-center">

        <div class="absolute z-10 p-4 w-full flex flex-row justify-between text-center">
          <div class="w-1/4 border mx-4 h-32">
            <p class="text-xs text-red-dark">TODO: selected.task</p>
          </div>
        </div>

        <div class="absolute z-10 p-4 pin-t w-full flex flex-row justify-between">
          <div class="w-1/3">
            <p class="text-xs text-red-dark">TODO: task.title</p>
          </div>
          <div class="w-1/3 text-right">
            <p class="text-xs text-red-dark">TODO: user-menu</p>
          </div>
        </div>

        <div class="absolute z-10 py-2 px-4 pin-b w-1/2">
          <div class="flex flex-row text-xs">

            <div class="mr-2">
              <p
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >filters
              </p>
            </div>

          </div>
        </div>

        <div class="absolute z-10 py-2 px-4 pin-b pin-r w-1/3 text-right">
          <div class="flex flex-row justify-end text-xs">

            <div class="mr-2">
              <p
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >...
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
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
import workload from '@/objects/tasks/workload'
export default {
  data () {
    return {
      title: 'workflow'
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
