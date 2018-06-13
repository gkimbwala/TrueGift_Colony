<template lang="html">
  <div class="border border-grey-light p-2">
    <template>
      <slot v-bind="item">
        <div class="h-24 bg-orange-lightest">

        </div>
        <p class="my-2">
          {{ item.title }}
        </p>
        <p class="text-xs">
          {{ item.text }}
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
