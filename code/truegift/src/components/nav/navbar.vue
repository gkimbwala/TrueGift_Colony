<template lang="html">
  <nav class="sticky pin-t bg-grey-lightest p-2 flex flex-row justify-between items-center z-20 shadow">
    <div class="w-1/4 text-left">
      <input class="w-48 bg-grey-lighter p-1 text-xs text-grey-dark font-semibold rounded-sm shadow-inner" placeholder=" Search"/>
    </div>
    <div class="w-1/4 text-center">
      <router-link :to="{ name: 'mainview', params: {} }" class="text-grey text-lg no-underline">
        {{logo}}
      </router-link>
    </div>
    <div class="w-1/4 text-right">
        <!-- <button class="bg-grey-darker p-1 rounded-sm text-xs text-grey-lightest shadow-inner hover:bg-grey-darkest">Filter</button> -->
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      logo: `truegift.io`
    }
  }
}
</script>

<style lang="css">
</style>
