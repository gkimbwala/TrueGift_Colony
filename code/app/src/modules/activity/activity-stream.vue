<template lang="html">
  <div class="">

    <div class="">
      <div v-for="item in items" :key="item">
        <activity :item="item">
          <template slot-scope="item">
          </template>
        </activity>
      </div>
    </div>

  </div>
</template>

<script>
import activity from './activity'

export default {
  props: [
    'items'
  ],
  components: { activity }
}
</script>

<style lang="css">
</style>
