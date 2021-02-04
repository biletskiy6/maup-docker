<template>
  <button class="close-button" @click="$emit('close')">
    <span class="close-button__icon" v-html="CloseIcon"></span>
  </button>
</template>

<script>
import CloseIcon from '@/assets/icons/close.svg?raw'
export default {
  name: 'CloseButton',
  data() {
    return {
      CloseIcon
    }
  }
}
</script>
