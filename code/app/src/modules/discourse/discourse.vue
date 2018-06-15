<template lang="html">
  <div class="">
    {{ title }}: focus is on discussion. + ideas. + questions.
    <router-view></router-view>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      title: 'discourse'
    }
  },
  props: ['id']
  // computed: {
  //   ...mapGetters ({
  //     getChallenges: 'getChallenges'
  //   })
  // },
}
</script>

<style lang="css">
</style>
