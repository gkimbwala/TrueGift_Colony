<template lang="html">
  <div class="">
    <!-- <div class="p-2 bg-grey-lightest" v-for="task in tasks" :key="task.id">
      <router-link :to="{ name: 'task', params: { id: task.id } }">
        ({{ task.id }}) - {{ task.title }}
      </router-link>
    </div> -->

    <template v-if="active === 'devTasksActive'">
      <div class="border border-grey-light">
        <div v-for="item in items" :key="item" v-if="item.isActive">
          <task :item="item">
            <template slot-scope="item">
            </template>
          </task>
        </div>
      </div>
    </template>

    <template v-else-if="active === 'devTasksComplete'">
      <div class="border border-grey-light">
        <div v-for="item in items" :key="item" v-if="item.isComplete && !item.isArchived">
          <task :item="item">
            <template slot-scope="item">
            </template>
          </task>
        </div>
      </div>
    </template>

    <template v-else-if="active === 'devTasksArchived'">
      <div class="border border-grey-light">
        <div v-for="item in items" :key="item" v-if="item.isArchived">
          <task :item="item">
            <template slot-scope="item">
            </template>
          </task>
        </div>
      </div>
    </template>

    <template v-else="active === 'devTasksOpen'">
      <div class="border border-grey-light">
        <div v-for="item in items" :key="item" v-if="!item.isActive && !item.isComplete">
          <task :item="item">
            <template slot-scope="item">
            </template>
          </task>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import task from './task'

export default {
  props: [
    'items',
    'active'
  ],
  components: { task }
}
</script>

<style lang="css">
</style>
