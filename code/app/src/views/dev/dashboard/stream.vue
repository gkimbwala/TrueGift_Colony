<template lang="html">
  <div class="">
    <div class="w-full bg-grey-lighter border border-grey-light">
      <div class="h-80 relative flex flex-row items-center">

        <div class="absolute z-10 p-4 w-full flex flex-row justify-between text-center">
          <div class="w-1/4 border mx-4 h-32">
            <p class="text-xs text-red-dark">TODO: stream focus</p>
          </div>
        </div>

        <div class="absolute z-10 p-4 pin-t w-full flex flex-row justify-between">
          <div class="w-1/3">
            <p class="text-xs text-red-dark">TODO: focus.title</p>
          </div>
          <div class="w-1/3 text-right">
            <p class="text-xs text-red-dark">TODO: user-menu</p>
          </div>
        </div>

        <div class="absolute z-10 py-2 px-4 pin-b w-1/2">
          <div class="flex flex-row text-xs">

            <div class="mr-2">
              <p
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >Filters
              </p>
            </div>

          </div>
        </div>

        <div class="absolute z-10 py-2 px-4 pin-b pin-r w-1/3 text-right">
          <div class="flex flex-row justify-end text-xs">

            <div class="mr-2">
              <p
                class="text-grey-dark p-2 rounded-sm text-xs hover:text-grey-darker"
                >...
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="flex flex-row w-full h-screen">
      <div class="w-1/8 border bg-blue-light h-64">
        user
      </div>
      <div class="w-3/4 border bg-blue-lighter h-64">
        stream
      </div>
      <div class="w-1/8 border bg-blue h-64">
        stats
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
