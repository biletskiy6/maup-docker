<template>
  <div class="additional-opps">
    <div class="container">
      <div class="additional-opps__content">
        <div class="additional-opps__top">
          <h4 class="section-title">Додаткові можливості</h4>
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
                v-for="currency in currencies"
                :key="currency.slug"
                class="dropdown-item"
                :class="{ active: activeCurrency.slug === currency.slug }"
                href="#"
                @click.prevent="setCurrency(currency.slug)"
              >
                <span class="dropdown-item__text">{{ currency.name }}</span>
                <span class="dropdown-list__icon" v-html="doneIcon"></span>
              </a>
            </div>
          </SelectCurrency>
        </div>
        <ul class="additional-opps-list">
          <li
            v-for="item in opps"
            :key="item.id"
            class="additional-opps-list__item"
          >
            <div class="additional-opps-list__top">
              <h4>{{ item.title }}</h4>
              <img
                :src="require(`~/assets/images/opps/${item.id}.png`)"
                :alt="item.title"
              />
            </div>
            <div class="additional-opps-list__middle">
              <p class="additional-opps-list__text">
                {{ item.description }}
              </p>
            </div>
            <div class="additional-opps-list__bottom">
              <h6 class="plan-price plan-price--sm">
                <span>{{ getPrice(item.price) }}</span> в місяць
              </h6>
              <button class="simple-btn">
                <span class="simple-btn__text">Замовити</span>
                <span class="simple-btn__icon" v-html="rightIcon"></span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SelectCurrency from '@/components/SelectCurrency'
import doneIcon from '@/assets/icons/done-2.svg?raw'
import downIcon from '@/assets/icons/down.svg?raw'
import rightIcon from '@/assets/icons/arrow-right.svg?raw'
export default {
  name: 'AdditionalOpps',
  components: { SelectCurrency },
  data() {
    return {
      doneIcon,
      downIcon,
      rightIcon,
      isActive: false,
      opps: [
        {
          id: 1,
          title: 'Індивідуальна траєкторія навчання',
          description:
            'Проводиться моніторинг успішності, за результатами якого' +
            'формується індивідуальний план та зміст уроків',
          price: 2500
        },
        {
          id: 2,
          title: 'Індивідуальні консультації з трьох предметів',
          description:
            'Проводяться за окремим графіком індивідуально онлайн' +
            'вчителем-предметником',
          price: 3500
        },
        {
          id: 3,
          title: 'Групові консультації з трьох предметів',
          description: 'Проводяться за окремим графіком по кожній темі',
          price: 3000
        },
        {
          id: 4,
          title: 'Індивідуальний тьютор',
          description:
            'Консультація психолога. Моніторинг успішності щотижня, мотивація' +
            'до навчання',
          price: 2600
        },
        {
          id: 5,
          title: 'Підготовка до ЗНО з обраного предмету',
          description: '10 та 11 класи',
          price: 2500
        },
        {
          id: 6,
          title: 'Англійська з носіями',
          description:
            'Онлайн вивчення англійської мови, з вчителями які є носіями мови',
          price: 2700
        }
      ],
      currencies: [
        { slug: 'uah', format: 'uk-UA', name: 'грн', isActive: true, rate: 1 },
        {
          slug: 'usd',
          format: 'en-US',
          name: 'usd',
          isActive: false,
          rate: 0.036
        },
        {
          slug: 'eur',
          format: 'de-DE',
          name: 'евро',
          isActive: false,
          rate: 0.029
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
      return new Intl.NumberFormat(this.activeCurrency.format, {
        style: 'currency',
        currency: this.activeCurrency.slug
      }).format(price * this.activeCurrency.rate)
    }
  }
}
</script>
