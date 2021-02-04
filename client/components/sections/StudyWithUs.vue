<template>
  <section id="study-with-us" ref="studyWithUs" class="study-with-us">
    <div class="study-with-us__content">
      <div ref="reveal" class="reveal">
        <div ref="revealOverlay" class="reveal__overlay"></div>
        <img
          ref="revealImage"
          class="reveal__image"
          src="~@/assets/images/study-with-us.png"
          alt=""
        />
      </div>
      <h3 ref="title" class="default-left section-title">
        Навчання <br />
        з нами - це
      </h3>
      <div ref="studyProposals" class="study-proposals-container">
        <ul class="study-proposals">
          <li ref="studyProposal" class="study-proposal">
            <div class="study-icon" v-html="icons['clock']"></div>
            <p class="study-text">
              Навчання за індивідуальним графіком на своїй швидкості сприйняття
            </p>
          </li>
          <li ref="studyProposal" class="study-proposal">
            <div class="study-icon" v-html="icons['bookReader']"></div>
            <p class="study-text">
              Навчання незалежно від місця проживання/перебування й стану
              здоров'я
            </p>
          </li>
          <li ref="studyProposal" class="study-proposal">
            <div class="study-icon" v-html="icons['smile']"></div>
            <p class="study-text">
              Відсутність стресів, ранніх підйомів, важких портфелів і
              додаткових витрат
            </p>
          </li>
          <li ref="studyProposal" class="study-proposal">
            <div class="study-icon" v-html="icons['trophy']"></div>
            <p class="study-text">
              Додатковий вільний час на особистий розвиток дитини, хобі, гуртки
              й подорожі
            </p>
          </li>
        </ul>
        <AppButton router :to="{ name: 'study-with-us' }">
          <span class="icon" v-html="arrowRight"></span>
          Дізнатися більше
        </AppButton>
      </div>
    </div>
    <div class="study-intro default-left">
      <ul class="study-intro-list">
        <li class="study-intro-item">
          <h4 class="section-title study-intro__header"><span>1000</span>+</h4>
          <p class="study-intro__text">учнів навчається</p>
        </li>
        <li class="study-intro-item">
          <h4 class="section-title study-intro__header"><span>7 376</span></h4>
          <p class="study-intro__text">
            з різних населених пунктів України потрібен лише інтернет
          </p>
        </li>
        <li class="study-intro-item">
          <h4 class="section-title study-intro__header"><span>1 300</span></h4>
          <p class="study-intro__text">вчителів співпрацює з нами</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppButton from '@/components/AppButton'
import clock from '~/assets/icons/clock.svg?raw'
import trophy from '~/assets/icons/trophy.svg?raw'
import smile from '~/assets/icons/smile.svg?raw'
import bookReader from '~/assets/icons/book-reader.svg?raw'
import arrowRight from '~/assets/icons/arrow-right.svg?raw'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'StudyWithUs',
  components: {
    AppButton
  },
  data() {
    return {
      icons: { clock, trophy, smile, bookReader },
      arrowRight
    }
  },
  mounted() {
    // this.studyWithUsInitial()
    // this.studyWithUsIntro()
  },
  methods: {
    studyWithUsInitial() {
      const { title, revealImage, studyProposals, studyProposal } = this.$refs
      // eslint-disable-next-line no-unused-vars
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.study-with-us__content',
            start: 'top bottom',
            end: 'bottom 100%',
            scrub: 1
          }
        })
        .fromTo(title, { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, 0)
        .fromTo(studyProposals, { autoAlpha: 0 }, { autoAlpha: 1 }, 0)
        .addLabel('studyProposals')
        .fromTo(
          studyProposal,
          { autoAlpha: 0, y: -40 },
          { autoAlpha: 1, y: 0, stagger: { each: 0.1 } },
          0
        )
        .fromTo(
          revealImage,
          { scale: 1.6, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1 },
          0
        )
    },
    studyWithUsIntro() {
      let counter = 0
      const tl = gsap
        .timeline({
          defaults: { duration: 1 },
          scrollTrigger: {
            trigger: '.study-intro',
            start: 'top bottom'
          }
        })
        .fromTo(
          '.study-intro-item',
          { y: -40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: {
              each: 0.3,
              /* eslint-disable object-shorthand */
              onStart: function() {
                const cont = { val: 0 }
                // let counter = 0
                // const newVal = 100
                const values = [1000, 7376, 1300]
                const target = this.targets()[0]
                const targetSpan = target.querySelector('span')
                tl.to(
                  cont,
                  {
                    val: values[counter],
                    roundProps: 'val',
                    duration: 2,
                    onUpdate() {
                      targetSpan.innerHTML = cont.val
                    }
                  },
                  0
                )
                counter++
              }
            }
          },
          0
        )
    }
  }
}
</script>
