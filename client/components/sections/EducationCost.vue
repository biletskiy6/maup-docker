<template>
  <section id="education-cost" class="education-cost">
    <div class="container">
      <div class="education-cost__content">
        <div class="education-cost__top">
          <div class="education-cost__top-wrapper">
            <h4 class="section-title">Вартість навчання</h4>
            <SelectCurrency
              v-model="isActive"
              class="select-currency"
              transition="translate-fade-down"
            >
              <button class="btn btn-primary dropdown-toggle">
                <span class="select-currency__header">Валюта</span>
                <span class="select-currency__currency"
                  >{{ activeCurrency.name }}
                  <span class="select-currency__icon" v-html="downIcon"></span>
                </span>
              </button>
              <div slot="dropdown" class="dropdown-list">
                <a
                  v-for="currencyItem in currencies"
                  :key="currencyItem.slug"
                  class="dropdown-item"
                  :class="{ active: activeCurrency.slug === currencyItem.slug }"
                  href="#"
                  @click.prevent="setCurrency(currencyItem.slug)"
                >
                  <span class="dropdown-item__text">{{
                    currencyItem.name
                  }}</span>
                  <span class="dropdown-list__icon" v-html="doneIcon"></span>
                </a>
              </div>
            </SelectCurrency>
          </div>
          <ul class="education-cost__classes">
            <li class="education-cost__class">9-11 клас</li>
          </ul>
        </div>
        <ul class="school-plans">
          <li class="school-plan school-plan--proposal">
            <h4 class="section-subtitle section-subtitle--medium">
              Економія при оплаті
            </h4>
            <div class="timeline timeline--education-cost">
              <div class="timeline__container">
                <div class="timeline-icon" v-html="timelineIcon"></div>
                <div class="timeline__period">
                  <div class="timeline__header">Період</div>
                  <ul>
                    <li
                      v-for="economyItem in economies"
                      :key="economyItem.id"
                      @click="setActiveEconomy(economyItem)"
                    >
                      <div class="">
                        <span
                          class="round"
                          :class="{ active: economyItem.active }"
                          ><span class="round-inner"></span
                        ></span>
                        <span>{{ economyItem.name }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="timeline__economy">
                  <div class="timeline__header">Економія</div>
                  <ul>
                    <li v-for="itemEconomy in economies" :key="itemEconomy.id">
                      <div class="">
                        <span>{{ itemEconomy.percent }}%</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <AppButton theme="white" block router :to="{ name: 'discount' }"
                >Всі знижки</AppButton
              >
            </div>
          </li>
          <li
            v-for="item in 3"
            :key="item"
            class="school-plan school-plan--standard"
          >
            <h5 class="school-plan__header">«Державний стандарт»</h5>
            <h6 class="plan-price">
              <span>{{ getPrice(2000) }}</span> в місяць
            </h6>
            <ul class="school-plan__items">
              <li
                v-for="(itemPlan, index) in 7"
                :key="itemPlan"
                class="school-plan__item"
              >
                <div
                  class="access"
                  :class="{ available: index % 2 === 0 }"
                  v-html="doneIcon"
                ></div>
                <span class="school-plan__item-text">Тестування</span>
              </li>
            </ul>
            <AppButton block>
              Вступити
            </AppButton>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import timelineIcon from '@/assets/icons/timeline.svg?raw'
import AppButton from '@/components/AppButton'
import doneIcon from '@/assets/icons/done-2.svg?raw'
import SelectCurrency from '@/components/SelectCurrency'
import downIcon from '@/assets/icons/down.svg?raw'
export default {
  name: 'EducationCost',
  components: {
    SelectCurrency,
    AppButton
  },
  data() {
    return {
      timelineIcon,
      downIcon,
      doneIcon,
      isActive: false,
      percentToGet: 0,
      currency: 'uah',
      economies: [
        { id: 1, name: '1 місяць', percent: 0, active: true },
        { id: 2, name: '3 місяці', percent: 1.5, active: false },
        { id: 3, name: '6 місяців', percent: 2.5, active: false },
        { id: 4, name: '9 місяців', percent: 3.5, active: false },
        { id: 5, name: '12 місяців', percent: 5, active: false }
      ],
      currencies: [
        { slug: 'uah', format: 'uk-UA', name: 'грн', isActive: true, rate: 1 },
        {
          slug: 'usd',
          format: 'en-US',
          name: 'usd',
          isActive: false,
          rate: 0.036 // 28
        },
        {
          slug: 'eur',
          format: 'de-DE',
          name: 'евро',
          isActive: false,
          rate: 0.029 // 31
        }
      ]
    }
  },
  computed: {
    activeCurrency() {
      return this.currencies.find((i) => i.isActive)
    }
  },
  methods: {
    setCurrency(slug) {
      this.currencies.forEach((i) => (i.isActive = false))
      const item = this.currencies.find((i) => i.slug === slug)
      return item ? (item.isActive = true) : null
    },
    getPrice(price) {
      const percent = (this.percentToGet / 100) * price
      const finalPrice = price - percent
      return new Intl.NumberFormat(this.activeCurrency.format, {
        style: 'currency',
        currency: this.activeCurrency.slug
      }).format(finalPrice * this.activeCurrency.rate)
    },
    setActiveEconomy(item) {
      this.economies.forEach((i) => (i.active = false))
      this.economies.find((i) => i.id === item.id).active = true
      this.percentToGet = item.percent
    }
  }
}
</script>
