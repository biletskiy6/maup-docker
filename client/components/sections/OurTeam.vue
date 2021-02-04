<template>
  <div class="our-team">
    <div class="section-title">
      Наша <br />
      команда
    </div>

    <div class="our-team__container">
      <!--      <span class="our-team__overlay-right" v-html="SliderOverlayRight"></span>-->
      <swiper
        ref="team-slider"
        class="swiper swiper--team"
        :class="{ isEnd: isSlideEnd }"
        :options="swiperOptions"
      >
        <swiper-slide v-for="item in 10" :key="item">
          <div class="our-team__content">
            <img src="~/assets/images/girl1.png" alt="" />
            <span class="our-team__overlay" v-html="SliderOverlay"></span>
            <div class="our-team__description">
              <h2>
                Ім'я <br />
                Прізвище
              </h2>
              <p>
                Посада, за що відповідає приклад
              </p>
            </div>
          </div>
        </swiper-slide>
        <div slot="pagination" class="our-team__pagination">
          <button class="swiper-button-prev" v-html="arrowRight"></button>
          <button class="swiper-button-next" v-html="arrowRight"></button>
          <div class="swiper-pagination-counts">
            <div class="swiper-pagination-current">{{ currentIndex }}</div>
            <div class="swiper-pagination-total">{{ snaps }}</div>
          </div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import arrowRight from '~/assets/icons/arrow-right.svg?raw'
import SliderOverlay from '~/assets/icons/slider-overlay.svg?raw'
import SliderOverlayRight from '~/assets/icons/slider-overlay-right.svg?raw'
export default {
  name: 'OurTeam',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    const currentInstance = this
    return {
      arrowRight,
      SliderOverlay,
      SliderOverlayRight,
      isSlideEnd: false,
      currentIndex: 1,
      snaps: 0,
      swiperOptions: {
        spaceBetween: 20,
        observer: true,
        grabCursor: false,
        touchRatio: 0,
        observeParents: true,
        breakpoints: {
          320: {
            slidesPerView: 1.1
          },
          576: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.5
          },
          1366: {
            slidesPerView: 3.5
          }
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
          clickable: true
        },
        on: {
          init() {
            currentInstance.snaps = this.snapGrid.length - 1
          },
          snapIndexChange() {
            currentInstance.currentIndex = this.activeIndex + 1
            this.isEnd
              ? document.querySelector('.swiper--team').classList.add('end')
              : document.querySelector('.swiper--team').classList.remove('end')
          },
          reachEnd() {
            document.querySelector('.swiper--team').classList.add('end')
          }
        },
        navigation: {
          nextEl: '.our-team__pagination .swiper-button-next',
          prevEl: '.our-team__pagination .swiper-button-prev'
        }
      }
    }
  },
  mounted() {
    // ScrollTrigger.matchMedia({
    //   /* eslint-disable object-shorthand */
    //   '(min-width: 1350px)': function() {
    //     gsap
    //       .timeline({
    //         paused: true,
    //         scrollTrigger: {
    //           trigger: '.our-team',
    //           start: 'top 50%'
    //         }
    //       })
    //       .fromTo(
    //         '.our-team .section-title',
    //         { x: -120, autoAlpha: 0 },
    //         { x: 0, autoAlpha: 1 },
    //         0
    //       )
    //       .fromTo(
    //         '.our-team .swiper-slide',
    //         { autoAlpha: 0 },
    //         { autoAlpha: 1, stagger: { each: 0.15 } }
    //       )
    //   }
    // })
  }
}
</script>
