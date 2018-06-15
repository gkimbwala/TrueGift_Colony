<template lang="html">
  <div class="flex flex-row w-full">
    <!-- <div class="p-2 bg-grey-lightest" v-for="task in tasks" :key="task.id">
      <router-link :to="{ name: 'task', params: { id: task.id } }">
        ({{ task.id }}) - {{ task.title }}
      </router-link>
    </div> -->

      <div class="w-1/3 p-1">
        <div v-for="item in items" :key="item" v-if="!item.isActive && !item.isComplete">
          <task :item="item">
            <template slot-scope="item">
            </template>
          </task>
        </div>
      </div>

      <div class="w-1/3 p-1">
        <div v-for="item in items" :key="item">
          <task :item="item">
            <template slot-scope="item">
            </template>
          </task>
        </div>
      </div>

      <div class="w-1/3 p-1">
        <div v-for="item in items" :key="item" v-if="item.isComplete && !item.isArchived">
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
