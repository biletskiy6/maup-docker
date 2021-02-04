<template>
  <div class="demo-access">
    <div class="demo-access__content">
      <div class="demo-access__top">
        <div class="container">
          <h4 class="section-title">Демо доступ</h4>
          <p class="demo-access__description">
            Можливо в школу не ходити! Дистанційна школа "МАУП" в Україні
            запрошує на навчання учнів з 9 по 11 класи
          </p>
        </div>
      </div>

      <div class="demo-access__inner">
        <div class="demo-access__left">
          <img src="~/assets/images/demo-access.png" alt="" />
        </div>
        <div class="demo-access__right">
          <ul>
            <li v-for="item in 5" :key="item">
              Доступ до навчального матеріалу 24/7
            </li>
          </ul>
          <AppButton>
            <span class="icon"
              ><i class="material-icons">arrow_forward</i></span
            >
            Отримати демо-доступ
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'DemoAccess',
  components: {
    AppButton
  }
}
</script>
