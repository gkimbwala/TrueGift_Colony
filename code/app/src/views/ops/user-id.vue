<template lang="html">
  <div class="">
    {{ comp }}

    <p>Loaded ID: {{ id }}</p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      comp: 'testID'
    }
  },
  props: ['id']
}
</script>

<style lang="css">
</style>
