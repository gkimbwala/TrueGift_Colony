<template lang="html">
  <div class="">
    <div class="h-64 flex flex-row">
      <div class="w-1/4 bg-blue p-2">
        <p>contract.computed:</p>
        <p>gasPrice</p>
      </div>
      <div class="w-5/8 bg-purple p-2">
        <p>contract.options:</p>
        <p>dueDate</p>
        <p>domain</p>
        <p>skills</p>
      </div>
      <div class="w-1/8 flex flex-col items-center justify-between bg-grey-lighter">
        <div class="flex flex-col m-2">
          <button class="w-16 mb-1 bg-green-dark text-xs text-grey-lightest p-1 rounded-sm">Create</button>
          <button class="w-16 mb-1 bg-orange-dark text-xs text-grey-lightest p-1 rounded-sm">Save</button>
          <button class="w-16 bg-red-dark text-xs text-grey-lightest p-1 rounded-sm">Cancel</button>
        </div>
        <div class="h-full w-full bg-green p-2">
          fn progress:
          <p class="text-xs">- create</p>
          <p class="text-xs">- save</p>
        </div>
      </div>
    </div>
    <div class="flex flex-row h-160">
      <div class="w-3/8 flex flex-col justify-end">
        <div class="flex flex-row h-full w-full p-1">
          <div class="w-1/3 bg-green-dark p-2">
            <p>worker stats:</p>
            <p>- badges</p>
            <p>- skills coverage</p>
            <p>- domains</p>
          </div>
          <div class="w-2/3 bg-orange p-2">
            selected worker
          </div>
        </div>
        <div class="flex flex-row h-full w-full px-1">
          <div class="w-1/3 bg-green-dark p-2">
            <p>manager stats:</p>
            <p>- badges</p>
            <p>- skills coverage</p>
            <p>- domains</p>
          </div>
          <div class="w-2/3 bg-orange p-2">
            selected manager
          </div>
        </div>
        <div class="flex flex-row h-full w-full p-1">
          <div class="w-1/3 bg-green-dark p-2">
            <p>evaluator stats:</p>
            <p>- badges</p>
            <p>- skills coverage</p>
            <p>- domains</p>
          </div>
          <div class="w-2/3 bg-orange p-2">
            selected evaluator
          </div>
        </div>
      </div>
      <div class="w-5/8 bg-purple-dark p-2">
        <p>user search</p>
        <p>user comparison</p>
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
