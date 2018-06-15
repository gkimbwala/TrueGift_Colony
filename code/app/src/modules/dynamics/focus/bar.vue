<template lang="html">
  <!-- TODO: Focus Bar -->
  <div class="absolute z-10 py-2 px-4 pin-b w-1/2">
    <div class="flex flex-row text-xs items-center">
      <!-- Search -->
      <div class="mr-2">
        <input
          class="text-grey-dark bg-grey-lightest border p-2 rounded-sm text-xs hover:text-grey-darker"
          placeholder="Search"
          type="search"
        />
      </div>
      <!-- Scope -->
      <div class="mr-2">
        <p
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          >Context ^
          <!-- Types of challenges -->
        </p>
      </div>
      <div class="mr-2">
        <p
          class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
          >Selector ^
          <!-- based on context -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
