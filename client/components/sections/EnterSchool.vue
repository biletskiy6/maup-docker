<template>
  <section id="enter-school" class="enter-school">
    <div class="container">
      <h4 class="section-title">Вступ до школи</h4>
      <p class="section-text">
        Що потрібно зробити, щоб зарахувати до нас дитину?
      </p>
    </div>
    <div class="enter-school__content">
      <div class="enter-school__left">
        <img
          src="~/assets/images/enter-school.png"
          alt=""
          class="enter-school__image"
        />
        <div class="enter-school__tooltip">
          <p>
            Якщо Ви знаходитесь <b>за межами України</b> або на
            <b>тимчасово окупованій українській території </b> – вступити до
            школи можливо без фізичної присутності заявника, використовуючи
            сучасні засоби електронного та поштового зв`язку.
          </p>
        </div>
        <div class="circle">
          <div class="circle__round"></div>
        </div>
      </div>
      <div class="enter-school__right">
        <div class="enter-school__right-container">
          <h4 class="section-subtitle">
            Необхідні документи для вступу у школу:
          </h4>
          <ul class="number-list">
            <li
              v-for="document in documents"
              :key="document.id"
              class="number-list__item"
            >
              <span class="number-list__marker">{{ document.id }})</span>
              <span class="number-list__text">{{ document.content }}</span>
            </li>
          </ul>
          <AppButton theme="white" @click="scrollToSection('#consult')"
            >Замовити консультацію</AppButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppButton from '@/components/AppButton'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'EnterSchool',
  components: {
    AppButton
  },
  data() {
    return {
      documents: [
        { id: 1, content: 'заява батьків або осіб, які їх замінюють;' },
        { id: 2, content: 'копія свідоцтва про народження дитини;' },
        {
          id: 3,
          content:
            'паспорт та індентифікаційний код (для тих кому виповнилося 14 років);'
        },
        {
          id: 4,
          content: 'фото формату 3х4 у цифровому та паперовому вигляді;'
        },
        {
          id: 5,
          content:
            'особова справа здобувача освіти з попереднього місця навчання;'
        },
        {
          id: 6,
          content:
            'свідоцтво про базову загальну середню освіту (для здобувачів освіти, що закінчили 9 класів);'
        },
        { id: 7, content: 'табель (при вступі у II семестрі);' },
        { id: 8, content: 'медична довідка за формою № 086-1/о.' }
      ]
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
    //           trigger: '.enter-school',
    //           start: 'top 50%'
    //         }
    //       })
    //       .fromTo(
    //         '.enter-school .section-title',
    //         { x: -120, autoAlpha: 0 },
    //         { x: 0, autoAlpha: 1 },
    //         0
    //       )
    //       .fromTo(
    //         '.enter-school .section-text',
    //         { x: -120, autoAlpha: 0 },
    //         { x: 0, autoAlpha: 1 },
    //         0
    //       )
    //       .fromTo('.enter-school img', { autoAlpha: 0 }, { autoAlpha: 1 }, 0)
    //       .fromTo(
    //         '.enter-school__tooltip',
    //         {
    //           y: -20,
    //           x: -20
    //         },
    //         { x: 0, y: 0 },
    //         0
    //       )
    //       .fromTo(
    //         '.enter-school .section-subtitle',
    //         {
    //           y: -40,
    //           autoAlpha: 0
    //         },
    //         { y: 0, autoAlpha: 1 },
    //         0
    //       )
    //       .fromTo(
    //         '.enter-school li',
    //         { y: -25, autoAlpha: 0 },
    //         { y: 0, autoAlpha: 1, stagger: { each: 0.1 } },
    //         0
    //       )
    //       .fromTo(
    //         '.enter-school .v-btn',
    //         { y: 25, autoAlpha: 0 },
    //         { y: 0, autoAlpha: 1 },
    //         0
    //       )
    //   }
    // })
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
