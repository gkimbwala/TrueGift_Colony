<template lang="html">
  <div class="">
    <template>
      <slot v-bind="item">
        <p class="mb-2">
          {{ item.title }}
        </p>
      </slot>
    </template>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="css">
</style>
