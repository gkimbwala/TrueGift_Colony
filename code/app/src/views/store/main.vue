<template lang="html">
  <div class="p-4">
    <div class="flex flex-row justify-between items-center mb-4">
      <h2 class="text-grey-darkest text-base">Store</h2>
      <button class="bg-orange-light p-2 font-semibold rounded-sm text-xs shadow-inner hover:bg-orange">Request</button>
    </div>
    <div class="flex">

      <div class="w-3/5">
        <item-list></item-list>
      </div>

      <div class="w-2/5 border border-grey-lighter p-4 text-red-dark text-xs">
        TODO: Item Story // component selector
      </div>

    </div>
  </div>
</template>

<script>
import itemList from './items/item-list'
export default {
  data () {
    return {
      id: 'store'
    }
  },
  components: { itemList }
}
</script>

<style lang="css">
</style>
