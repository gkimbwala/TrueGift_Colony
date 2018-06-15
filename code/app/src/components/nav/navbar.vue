<template lang="html">
  <nav class="sticky pin-t bg-grey-lightest p-2 items-center z-20 shadow">
    <div class="container m-auto flex flex-row justify-between">

      <div class="w-2/3 text-left">
        <router-link
          :to="{ name: 'main' }"
          class="text-grey-darker text-lg no-underline mx-2"
          >{{ dappTitle }}
        </router-link>
        <router-link
          :to="{ name: 'dev-activity' }"
          class="text-grey text-sm mr-2 no-underline hover:text-grey-darker"
          >Dev
        </router-link>
        <router-link
          :to="{ name: 'ops-main' }"
          class="text-grey text-sm mr-2 no-underline hover:text-grey-darker"
          >Ops
        </router-link>
        <router-link
          :to="{ name: 'repo-main' }"
          class="text-grey text-sm mr-2 no-underline hover:text-grey-darker"
          >Repo
        </router-link>
        <router-link
          :to="{ name: 'store-main' }"
          class="text-grey text-sm no-underline hover:text-grey-darker"
          >Store
        </router-link>
      </div>
      <div class="w-1/3 text-right">
        <!-- TODO: search icon / @click / transition -->
        <button class="bg-grey p-1 text-xs text-grey-darkest font-medium rounded-sm shadow-inner">Status</button>
        <button class="bg-grey-light p-1 text-xs text-grey-darkest font-medium rounded-sm shadow-inner">Msg</button>
        <router-link
          :to="{ name: 'search' }"
          class="bg-grey-lighter p-1 text-xs text-grey-darkest font-medium rounded-sm shadow-inner"
          tag="button"
          >S</router-link>
        <router-link
          :to="{ name: 'user', params: { name: user.fName } }"
          class="bg-grey-darker p-1 rounded-sm text-xs text-grey-lightest shadow-inner no-underline hover:bg-grey-darkest"
          tag="button"
          >{{ user.fName }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    dappTitle () {
      return this.$store.state.data.dappTitle
    },
    user () {
      return this.$store.getters.getUser
    }
  },
  props: ['name']
}
</script>

<style lang="css">
</style>
