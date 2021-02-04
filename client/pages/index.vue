<template>
  <div class="home-page">
    <Preloader v-if="isPreloaderAnimationFinished" />
    <AppModal name="loyalty">
      <LoyaltyModal />
    </AppModal>
    <header class="main-header">
      <client-only><HeroSlider /></client-only>
      <MobileMenu />
    </header>
    <StudyWithUs />
    <OnlineSchool />
    <EducationProcess />
    <!--    <DemoAccess />-->
    <Gallery />

    <EnterSchool />
    <EducationCost />
    <AdditionalOpps />
    <Consult />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { mapGetters, mapMutations } from 'vuex'
import Splitter from 'split-html-to-chars'
import Preloader from '@/components/Preloader'
import HeroSlider from '@/components/HeroSlider'
import StudyWithUs from '@/components/sections/StudyWithUs'
import OnlineSchool from '@/components/sections/OnlineSchool'
import AdditionalOpps from '@/components/sections/AdditionalOpps'
import Gallery from '@/components/sections/Gallery'
import EducationCost from '@/components/sections/EducationCost'
// import DemoAccess from '@/components/sections/DemoAccess'
import EducationProcess from '@/components/sections/EducationProcess'
import AppModal from '@/components/AppModal'
import LoyaltyModal from '@/components/modals/LoyaltyModal'
import MobileMenu from '@/components/MobileMenu'
import EnterSchool from '@/components/sections/EnterSchool'
import Consult from '@/components/Consult'
if (process.client) {
  gsap.registerPlugin(CSSRulePlugin)
}
export default {
  components: {
    Consult,
    EnterSchool,
    MobileMenu,
    LoyaltyModal,
    AppModal,
    EducationProcess,
    // DemoAccess,
    Preloader,
    EducationCost,
    Gallery,
    AdditionalOpps,
    OnlineSchool,
    StudyWithUs,
    HeroSlider
  },
  data() {
    return {
      name: '',
      isMenuOpened: false
    }
  },
  computed: {
    ...mapGetters({
      isPreloaderAnimationFinished: 'preloader/animation'
    })
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    // this.splitText()
    const tl = gsap.timeline({ delay: 1, paused: false })
    tl.add(this.animatePreloader())
    // tl.add(this.animateTopLine())
    // tl.add(this.animateSlider())
  },
  methods: {
    ...mapMutations({
      preloaderAnimationFinished: 'preloader/animationFinished'
    }),
    splitText() {
      const heroTitle = document.querySelectorAll('.js-splitme')
      ;[].forEach.call(heroTitle, function(el) {
        // outerHTML, thats *important*, no direct text nodes should be in parsed HTML
        el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>')
      })
      return heroTitle
    },
    animatePreloader() {
      const preloader = document.querySelector('.preloader')
      if (!preloader) return
      const tl = gsap.timeline({ paused: false })
      const cont = { val: 0 }
      const newVal = 100
      const firstOverlayAfter = CSSRulePlugin.getRule(
        '.preloader .overlay.first:after'
      )
      const secondOverlayAfter = CSSRulePlugin.getRule(
        '.preloader .overlay.second:after'
      )
      tl.to(cont, {
        val: newVal,
        roundProps: 'val',
        duration: 2,
        onUpdate() {
          document.querySelector('.counter__number').innerHTML = cont.val
        }
      })
        .addLabel('counterFinished')
        // eslint-disable-next-line no-unreachable
        .to(
          [firstOverlayAfter, secondOverlayAfter],
          {
            height: '0%',
            duration: 1
          },
          'counterFinished'
        )
        .fromTo(
          '.preloader .counter',
          {
            y: 0,
            autoAlpha: 1
          },
          {
            y: -20,
            autoAlpha: 0
          },
          'counterFinished+=0.5'
        )
        .fromTo(
          '.preloader .first',
          { y: 0 },
          { y: '-100%', ease: 'expo.easeInOut', delay: 0.5 },
          'counterFinished'
        )
        .fromTo(
          '.preloader .second',
          { y: 0 },
          { y: '-100%', ease: 'expo.easeInOut', delay: 0.7 },
          'counterFinished'
        )
        .fromTo(
          '.preloader .third',
          { y: 0 },
          { y: '-100%', ease: 'expo.easeInOut', delay: 0.9 },
          'counterFinished'
        )
        .eventCallback('onComplete', () => {
          this.preloaderAnimationFinished()
        })
      return tl
      // .to('.preloader', {
      //   autoAlpha: 0
      // })
      // return tl
    },
    animateTopLine() {
      const tl = gsap.timeline()
      tl.fromTo(
        '.top-bar a',
        {
          autoAlpha: 0,
          x: -40
        },
        {
          autoAlpha: 1,
          x: 0
        },
        0
      )
        .fromTo(
          '.top-bar .language-switcher li',
          {
            autoAlpha: 0,
            x: 40
          },
          {
            autoAlpha: 1,
            x: 0
          },
          0
        )
        .fromTo(
          '.app-header .logo',
          { autoAlpha: 0, x: -20 },
          { autoAlpha: 1, x: 0 },
          0
        )
        .fromTo(
          '.main-menu a',
          {
            autoAlpha: 0,
            x: -30
          },
          { autoAlpha: 1, x: 0, stagger: { each: 0.09 } },
          0
        )
        .fromTo(
          '.top-line__right > *',
          {
            autoAlpha: 0,
            x: 40
          },
          {
            autoAlpha: 1,
            x: 0,
            stagger: {
              each: 0.09
            }
          },
          0
        )
      return tl
    },
    animateSlider() {
      if (!process.client) return
      const tl = gsap.timeline()
      tl.fromTo(
        '.hero-slider .letter',
        {
          autoAlpha: 0,
          y: -20
        },
        { autoAlpha: 1, y: 0, stagger: { each: 0.03 } },
        0
      )
        .fromTo(
          '.slider-title',
          {
            autoAlpha: 0,
            y: -20
          },
          { autoAlpha: 1, y: 0 },
          0
        )
        .fromTo(
          '.slider-subtitle',
          {
            autoAlpha: 0,
            y: -20
          },
          { autoAlpha: 1, y: 0 },
          0
        )
        .fromTo(
          '.hero-slider .controls',
          {
            autoAlpha: 0,
            y: -20
          },
          { autoAlpha: 1, y: 0 },
          0
        )
      return tl
    }
  }
}
</script>
