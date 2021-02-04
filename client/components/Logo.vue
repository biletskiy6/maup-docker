<template>
  <nuxt-link to="/" class="logo" v-html="logo"></nuxt-link>
</template>

<script>
import logo from '~/assets/icons/logo.svg?raw'
export default {
  data() {
    return {
      logo
    }
  }
}
</script>
