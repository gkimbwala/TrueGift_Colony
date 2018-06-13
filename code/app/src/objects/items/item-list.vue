<template lang="html">
  <div class="flex flex-row flex-wrap">
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" v-for="item in items" :key="item.id">
      <card>
        <div class="h-80 mr-4 mb-4 relative border border-grey-lighter">
          <img src="@/assets/img/logo.png" alt="" class="w-full h-full absolute">
          <div class="absolute z-10">
            <!-- <button
              :disabled="!itemIsInStock(item)"
            @click="addProductToCart(item)">Add To Cart</button> -->
          </div>
          <div class="absolute z-10 p-2 pin-b bg-grey-dark w-full opacity-50">
            <h2 class="text-white text-wrap leading-tight text-sm">
              {{item.title}}
            </h2>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import card from '@/components/elements/card'

export default {
  computed: {
    items () {
      return this.$store.getters.getItems
    }
  },
  props: ['id'],
  components: { card }
}
</script>

<style lang="css">
</style>
