<template>
  <div class="request">
    <div class="request__content">
      <h4 class="section-title">
        Приймаємо заявки для <span class="accent">9-11 класів!</span>
      </h4>
      <p class="request__description">
        На 2021/2022 навчальний рік
      </p>
      <div class="controls">
        <AppButton>
          <span class="icon"><i class="material-icons">arrow_forward</i></span>
          Подати заявку
        </AppButton>
        <AppButton theme="white">Замовити консультацію</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../AppButton'
export default {
  name: 'Request',
  components: {
    AppButton
  }
}
</script>
