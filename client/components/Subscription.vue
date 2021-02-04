<template>
  <div class="subscription">
    <div class="subscription__container">
      <form class="subscription__form" action="" @submit.prevent>
        <span class="subscription__icon" v-html="mail"></span>
        <input
          type="text"
          placeholder="Електронна пошта"
          class="subscription__input"
        />
        <button class="subscription__submit" v-html="send"></button>
      </form>
    </div>
  </div>
</template>

<script>
import mail from '@/assets/icons/mail.svg?raw'
import send from '@/assets/icons/send.svg?raw'
export default {
  name: 'Subscription',
  data() {
    return {
      mail,
      send
    }
  }
}
</script>
