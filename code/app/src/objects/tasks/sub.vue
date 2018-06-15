<template lang="html">
  <div class="">

    <div class="flex flex-col pt-2">

      <div class="flex flex-row text-xs text-grey-darkest h-8">
        <div class="w-1/20 p-2 text-center">
        </div>
        <div class="w-1/10 border rounded-tl bg-grey-lightest p-2">
          Domain
        </div>
        <div class="w-3/20 border-r border-b border-t bg-grey-lightest p-2">
          Title
        </div>
        <div class="w-1/4 border-r border-b border-t bg-grey-lightest p-2">
          Specification
        </div>
        <div class="w-3/20 border-r border-b border-t bg-grey-lightest p-2">
          Deliverable
        </div>
        <div class="w-1/10 border-r border-b border-t bg-grey-lightest p-2">
           Due Date
        </div>
        <div class="w-1/10 border-r border-b border-t bg-grey-lightest flex flex-col">
          <div class="flex flex-row text-center justify-between">
            <div class="w-1/3 border-r p-2">
              W
            </div>
            <div class="w-1/3 border-r p-2">
              M
            </div>
            <div class="w-1/3 p-2">
              E
            </div>
          </div>
        </div>
        <div class="w-1/10 border-r border-b border-t rounded-tr bg-grey-lightest p-2">
          Status
        </div>
      </div>

      <div
        class="flex flex-row text-xs text-grey-dark leading-tight h-12"
        v-for="task in tasks"
        :key="task.id"
      >
        <div class="w-1/20 p-2 text-center">
          <input type="radio" name="" value="">
        </div>

        <div class="w-1/10 border-r border-l border-b p-2">
          {{ task.domainId }}
        </div>
        <div class="w-3/20 border-r border-b p-2">
          {{ task.title }}
        </div>
        <div class="w-1/4 border-r border-b p-2">
          {{ task.spec }}
        </div>
        <div class="w-3/20 border-r border-b p-2">
          {{ task.deliverable }}
        </div>
        <div class="w-1/10 border-r border-b p-2">
          {{ daysRemain }}
        </div>
        <div class="w-1/10 border-r border-b flex flex-col">
          <div class="flex flex-row h-full text-center justify-between">
            <div class="w-1/3 border-r p-2">
              {{ task.payout.worker }}
            </div>
            <div class="w-1/3 border-r p-2">
              {{ task.payout.manager }}
            </div>
            <div class="w-1/3 p-2">
              {{ task.payout.evaluator }}
            </div>
          </div>
        </div>
        <div class="w-1/10 border-r border-b p-2">
          {{ task.status }}
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      gender: 'Male'
    }
  },
  computed: {
    tasks () {
      return this.$store.getters.getTasks
    },
    daysRemain () {
      let dueDate = '24062018'
      let days = moment(dueDate, 'DDMMYYYY').fromNow()
      return days
    }
  }
}
</script>

<style lang="css">
</style>
