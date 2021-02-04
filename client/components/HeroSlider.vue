<template>
  <div class="hero-slider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="slide-content">
          <h2 class="slider-header js-splitme">
            <span class="word">Всеукраїнська онлайн <br /></span>
            <span class="word">школа Libera School</span>
            <!--            <span class="accent">-->
            <!--              <span class="word">для</span>-->
            <!--              <span class="word">9-11</span>-->
            <!--              <span class="word">класів!</span>-->
            <!--            </span>-->
          </h2>
          <h3 class="slider-title">
            Вступи та отримай знижку на навчання
          </h3>
          <div class="controls">
            <AppButton
              theme="primary"
              @click="scrollToSection('#education-cost')"
            >
              <span class="icon" v-html="arrowRight"></span>
              Розпочати навчання
            </AppButton>
            <!--            <AppButton theme="white">Матеріали для батьків</AppButton>-->
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <h2 class="slider-header">
            Триває набір <span class="accent">для 9-11 класів!</span>
          </h2>
          <h3 class="slider-title">
            Вступи та отримай знижку на навчання
          </h3>
          <div class="controls">
            <AppButton @click="scrollToSection('#consult')">
              <span class="icon" v-html="arrowRight"></span>
              Замовити консультацію
            </AppButton>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <h2 class="slider-header">
            <span class="word">Створи</span>
            <span class="word">свій</span>
            <span class="word">перший <br /></span>
            <span class="word">Telegram-бот</span>
          </h2>
          <div class="controls">
            <AppButton @click="scrollToSection('#education-cost')">
              <span class="icon" v-html="arrowRight"></span>
              Розпочати навчання
            </AppButton>
          </div>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination swiper-pagination1"></div>
    </swiper>
    <button class="swiper-button-prev" v-html="arrowRight"></button>
    <button class="swiper-button-next" v-html="arrowRight"></button>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import AppButton from './AppButton'
import arrowRight from '@/assets/icons/arrow-right.svg?raw'
gsap.registerPlugin(ScrollToPlugin)
export default {
  name: 'HeroSlider',
  components: {
    AppButton
  },
  data() {
    return {
      arrowRight,
      swiperOption: {
        effect: 'fade',
        grabCursor: false,
        touchRatio: 0,
        direction: 'horizontal',
        paginationClickable: true,
        mousewheel: false,
        speed: 600,
        autoHeight: false,
        on: {
          slideChange() {
            return this.realIndex === 1
              ? document.querySelector('body').classList.add('dark')
              : document.querySelector('body').classList.remove('dark')
          }
        },
        pagination: {
          el: '.hero-slider .swiper-pagination1',
          clickable: true
        },
        navigation: {
          nextEl: '.hero-slider .swiper-button-next',
          prevEl: '.hero-slider .swiper-button-prev'
        }
      }
    }
  },
  methods: {
    scrollToSection(sectionId) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: sectionId,
          offsetY: 150
        }
      })
    }
  }
}
</script>
