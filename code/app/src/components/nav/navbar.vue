<template lang="html">
  <nav class="sticky pin-t bg-grey-lightest p-2 flex flex-row justify-between items-center z-20 shadow">
    <div class="w-1/3 text-left">
      <router-link
        :to="{ name: 'dev-main' }"
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
    <div class="w-1/3 text-center">
      <router-link
        :to="{ name: 'mainview' }"
        class="text-grey text-lg no-underline"
        >{{ dappTitle }}
      </router-link>
    </div>
    <div class="w-1/3 text-right">
        <input class="bg-grey-lighter p-1 text-xs text-grey-dark font-medium rounded-sm shadow-inner" placeholder=" Search"/>
        <button class="bg-grey-darker p-1 rounded-sm text-xs text-grey-lightest shadow-inner font-semibold hover:bg-grey-darkest">User.name</button>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    dappTitle () {
      return this.$store.state.data.dappTitle
    }
  }
}
</script>

<style lang="css">
</style>
