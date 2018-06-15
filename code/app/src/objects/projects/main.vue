<template lang="html">
  <div>
    <div class="w-full bg-grey-lighter border border-grey-light rounded-b">
      <div class="h-80 relative flex flex-row items-center">

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

        <!-- Status -->
        <div class="absolute z-10 py-2 px-4 pin-b pin-r w-1/3 text-right">
          <div class="flex flex-row justify-end text-xs items-center">

            <div class="mr-2">
              <p
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Activity Type ^
              </p>
            </div>
            <div class="">
              <input type="checkbox" name="" value="">
              <input type="checkbox" name="" value="">
              <input type="checkbox" name="" value="">
            </div>
          </div>
        </div>
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
