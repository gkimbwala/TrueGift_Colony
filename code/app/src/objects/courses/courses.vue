<template lang="html">
  <div class="p-4">

    <div class="text-lg">
      Courses: design components
    </div>

    <div class="flex flex-row flex-wrap py-4">
      <div class="w-1/3" v-for="course in courses" v-bind:key="course.id">
        <card>
          <p class="text-sm text-red-dark">TODO: Card</p>
          <div class="h-64 border border-grey-dark mb-4 mr-4">
            <div class="bg-orange-lighter h-48">
              course.img
            </div>
            <div class="p-2">
              <router-link
              :to="{ name: 'course', params: { id: course.id } }"
              class="no-underline"
              >{{course.title}}
            </router-link>
            </div>
          </div>
        </card>
      </div>
    </div>

  </div>
</template>

<script>
import card from '@/components/elements/card'

export default {
  computed: {
    courses () {
      return this.$store.getters.getModels
    }
  },
  components: { card },
  props: ['id']
}
</script>

<style lang="css">
</style>
