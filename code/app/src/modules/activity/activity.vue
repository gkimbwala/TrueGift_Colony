<template lang="html">
  <div class="flex flex-row w-full h-48 items-center border my-2">

    <div class="w-1/8 h-full flex flex-col justify-center items-center">
      <div class="h-24 w-3/4 bg-green-dark">
        img
      </div>
      <div class="bg-green h-8 w-3/4">

      </div>
      <div class="w-3/4 flex flex-row justify-between">
        <button class="w-full bg-green-light p-1 text-xs text-grey-darkest font-medium rounded-sm">U</button>
        <button class="w-full bg-green-lighter p-1 text-xs text-grey-darkest font-medium rounded-sm">U</button>
        <button class="w-full bg-green-lightest p-1 text-xs text-grey-darkest font-medium rounded-sm">U</button>
      </div>
      <div>

      </div>
    </div>

    <div class="w-3/4 h-full bg-blue-lighter">
      {{ item.title }}
    </div>
    <div class="w-1/8 h-full flex flex-col items-center">
      <div class="w-full h-full bg-orange">
        stats
      </div>
      <div class="w-full h-8 bg-orange-light">
        badges
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="css">
</style>
