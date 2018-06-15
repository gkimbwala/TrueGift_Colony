<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lightest p-2 flex flex-row justify-between items-center text-xs">

      <div class="w-1/3">

        <router-link
          :to="{ name: 'discourse-comp' }"
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          tag="button"
          >Comp
        </router-link>
      </div>

        <div class="w-1/3 text-right">

        </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="css">
</style>
