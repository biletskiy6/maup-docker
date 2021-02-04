<template>
  <div class="single-page single-hero">
    <div class="single-hero-container">
      <div class="single-hero__content">
        <div class="single-hero__top">
          <h3 class="section-title">Всі знижки</h3>
          <p class="single-hero__text">
            знижки на навчання по періоду, високу успішність навчання,
            другої/третьої дитини, дітям співробітників
          </p>
        </div>
        <div class="single-hero-content">
          <div class="single-hero-content__item">
            <h4 class="single-hero-content__header">Співробітникам</h4>
            <p class="single-hero-content__text">
              Які працюють на постійній основі, надаються пільги в оплаті за
              навчання їх дітей в розмірі 50% вартості навчання
            </p>
          </div>
          <div class="single-hero-content__item">
            <h4 class="single-hero-content__header">
              Батькам учнів надаються пільги
            </h4>
            <ul class="single-hero-list">
              <li class="single-hero-list__item">
                10% від вартості навчання за умови здійснення оплати за
                навчальний рік у строк до 15 серпня поточного року
              </li>
              <li class="single-hero-list__item">
                5 % від вартості навчання за умови здійснення оплати за І
                півріччя у строк до 15 серпня поточного року, за ІІ півріччя у
                строк до 15 грудня поточного року
              </li>
              <li class="single-hero-list__item">
                10% за навчання другої дитини з сім’ї
              </li>
              <li class="single-hero-list__item">
                20% за навчання третьої дитини з сім’ї
              </li>
            </ul>
          </div>
          <div class="single-hero-content__item">
            <h4 class="single-hero-content__header">
              За результатами навчального року
            </h4>
            <ul class="single-hero-list">
              <li class="single-hero-list__item">
                5% за відмінне навчання у 3-4 класах
              </li>
              <li class="single-hero-list__item">
                10% за відмінне навчання у 5-10 класах
              </li>
            </ul>

            <div class="to-remember">
              <h4 class="to-remember__header">Варто пам'ятати:</h4>
              <ul class="number-list">
                <li class="number-list__item">
                  <span class="number-list__marker">1)</span>
                  <span class="number-list__text"
                    >Загальний розмір пільги не може перевищувати 50% від
                    вартості навчання</span
                  >
                </li>
                <li class="number-list__item">
                  <span class="number-list__marker">2)</span>
                  <span class="number-list__text"
                    >Пільги не поширюються на додаткові освітні послуги та
                    щорічний внесок</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="controls">
            <AppButton theme="white" size="small" router :to="{ name: 'index' }"
              >Повернутися назад</AppButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'Discount',
  components: { AppButton },
  layout: 'news'
}
</script>
