<template lang="html">
  <div class="p-4">
    <p class="text-xs text-red-dark mb-4">TODO: selector / task / challenge / domain</p>
    <div class="h-96 flex flex-row">
      <div class="w-2/5 bg-blue flex flex-col">
        <div class="h-64 bg-blue-dark">
          task.img
        </div>
        task.title
      </div>
      <div class="w-3/5 bg-purple">
        <p>task.details</p>
        <p>dueDate</p>
        <p>domainId</p>
        <p>skills</p>

      </div>
    </div>
    <div class="flex flex-row w-full">
      <div class="w-1/4 bg-orange-light h-80">
        <p>Roles</p>
        <p class="text-xs text-red-dark">TODO: user search</p>
      </div>
      <div class="w-1/4 bg-orange h-80 border text-center">
        Worker
      </div>
      <div class="w-1/4 bg-orange h-80 border text-center">
        Manager
      </div>
      <div class="w-1/4 bg-orange h-80 border text-center">
        Evaluator
      </div>
    </div>
    <div class="">
      <p class="my-2">actions:</p>
      <button class="bg-green-dark text-sm p-1 rounded-sm">create</button>
      <button class="bg-yellow-dark text-sm p-1 rounded-sm">save draft</button>
      <button class="bg-red-dark text-sm p-1 rounded-sm">cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'creator'
    }
  }
}
</script>

<style lang="css">
</style>
