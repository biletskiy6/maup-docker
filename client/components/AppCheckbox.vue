<template>
  <label class="app-checkbox">
    <span class="app-checkbox__container">
      <input type="checkbox" @change="$emit('input', $event.target.checked)" />
      <span v-html="doneIcon"></span>
      <span class="checkbox-view"></span>
    </span>

    <span class="app-checkbox__text"
      >Ознайомився і приймаю умови Умови обробки персональних даних</span
    >
  </label>
</template>

<script>
import doneIcon from '@/assets/icons/done.svg?raw'
export default {
  name: 'AppCheckbox',
  data() {
    return {
      doneIcon
    }
  }
}
</script>
