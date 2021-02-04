<template>
  <div class="single-news">
    <div class="news-inner-container">
      <div class="single-news__top">
        <div class="single-news__top-left">
          <div class="views">
            <span class="views__icon" v-html="EyeIcon"></span>
            <span class="views__text">240</span>
          </div>
          <div class="date">
            <span class="date__icon" v-html="CalendarIcon"></span>
            <span class="date__text">25 січня</span>
          </div>
        </div>
        <div class="single-news__top-right">
          <div class="share">
            <div class="share-action">
              <div class="share-action__shape" v-html="ShareIcon"></div>
              <div class="share-action__text">Поділитись:</div>
              <ul class="share-list">
                <li class="share-list-item">
                  <a
                    class="share-list-link"
                    href="#"
                    @click.prevent="handleShareClick"
                    v-html="LinkIcon"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h4 class="section-title">Створи свій перший Telegram-бот Заголовок</h4>
    </div>
    <div class="news-container">
      <div class="single-news__image">
        <img src="~/assets/images/slide-3.png" alt="" />
      </div>
    </div>
    <div class="news-inner-container">
      <p v-for="item in 10" :key="item">
        Кількість передплатників у найбільш популярних Telegram-каналів, в тому
        числі і тих, які ведуть боти для чатів Telegram, обчислюється вже
        сотнями тисяч.
      </p>
    </div>
  </div>
</template>

<script>
import EyeIcon from '@/assets/icons/eye.svg?raw'
import CalendarIcon from '@/assets/icons/calender.svg?raw'
import ShareIcon from '@/assets/icons/share.svg?raw'
import LinkIcon from '@/assets/icons/link.svg?raw'
export default {
  name: 'Index',
  layout: 'news',
  meta: {
    test: 'tester'
  },
  data() {
    return {
      EyeIcon,
      CalendarIcon,
      ShareIcon,
      LinkIcon
    }
  },
  methods: {
    async handleShareClick() {
      try {
        await this.$copyText(document.URL)
        this.$notify({ group: 'foo', clean: true })
        this.$notify({
          group: 'foo',
          title: 'Посилання скопійоване!',
          type: 'success'
        })
      } catch (e) {}
    }
  }
}
</script>
