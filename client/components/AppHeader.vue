<template>
  <div class="app-header">
    <div class="top-line">
      <div class="top-line__content">
        <div class="top-line__left">
          <Logo />
          <ul class="main-menu">
            <li
              v-for="item in menuItems"
              :id="`menu__${item.anchor}`"
              :key="item.id"
            >
              <a
                v-if="!item.router"
                class="link-style js-scroll-to"
                :href="`#${item.anchor}`"
                >{{ item.name }}</a
              >
              <nuxt-link v-if="item.router" class="link-style" :to="item.to">{{
                item.name
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="top-line__right">
          <div id="menu__consult">
            <a class="link-style js-scroll-to" href="#consult"
              >Зв'язатися з нами</a
            >
          </div>

          <AppButton theme="white" size="small" @click="handleEnterClick"
            >Вхід</AppButton
          >
          <MenuBurger />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import gsap from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import AppButton from './AppButton'
import MenuBurger from './MenuBurger'
import Logo from '@/components/Logo'
import { menuItems } from '@/setup'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(CSSRulePlugin)
export default {
  name: 'AppHeader',
  components: {
    MenuBurger,
    AppButton,
    Logo
  },
  data() {
    return {
      menuItems
    }
  },
  computed: {
    ...mapGetters({
      layout: 'layout',
      menuOpen: 'menu/isOpen'
    })
  },
  mounted() {
    this.pinHeader()
    if (this.layout === 'home') {
      this.scrollToSection()
      this.handleDetectActiveNav()
    }
  },
  methods: {
    ...mapMutations({
      closeMenu: 'menu/resetOpen'
    }),
    handleEnterClick() {
      window.open('http://maup-admin.tangram-studio.com/', '_blank')
    },
    handleDetectActiveNav() {
      gsap.utils.toArray('section').forEach((section) => {
        const activeSection = section.id
        const menuitem = 'menu__'.concat(activeSection)
        const menulink = document.getElementById(menuitem).querySelector('a')
        gsap.timeline({
          id: 'Nav Animation',
          defaults: { duration: 0.5 },
          scrollTrigger: {
            // markers: true,
            trigger: section,
            start: 'top 20%',
            end: 'bottom 0%',
            toggleActions: 'play reverse play reverse',
            onToggle: (self) =>
              self.isActive
                ? menulink.classList.add('highlighted')
                : menulink.classList.remove('highlighted')
          }
        })
      })
    },
    handleBurgerClick() {
      // const tl = gsap.timeline()
      // tl.to('.burger__open span', {
      //   x: '-105%',
      //   stagger: {
      //     each: 0.05
      //   }
      // }).to('.burger__close span', {
      //   x: 0,
      //   y: 0,
      //   stagger: {
      //     each: 0.05
      //   }
      // })
      // this.$modal.show('auth')
    },
    pinHeader() {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
          className: 'app-header--scrolled',
          targets: '.app-header'
        }
      })
    },
    scrollToSection() {
      const ctx = this
      gsap.utils.toArray('.js-scroll-to').forEach(function(a) {
        a.addEventListener('click', function(e) {
          e.preventDefault()
          ctx.menuOpen && ctx.closeMenu()
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: e.target.getAttribute('href'),
              offsetY: 100
            }
          })
        })
      })
    }
  }
}
</script>
