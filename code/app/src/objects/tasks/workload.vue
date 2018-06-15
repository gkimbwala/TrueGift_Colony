<template lang="html">
  <div class="flex flex-row w-full">

    <div class="w-1/3 p-1">
      <div v-for="item in items" :key="item.id">
        <task :item="item">
          <template slot-scope="item">
          </template>
        </task>
      </div>
    </div>

  </div>
</template>

<script>
import task from './task'

export default {
  props: [
    'items'
  ],
  components: { task }
}
</script>

<style lang="css">
</style>
