<template>
  <div class="mobile-menu" :class="{ active: isOpen }">
    <div class="mobile-menu__line">
      <div class="mobile-menu__top">
        <Socials layout="second" color="grey" />
        <LanguageSwitcher />
      </div>
      <div class="mobile-menu__bar">
        <Logo />
        <button class="mobile-menu__close" @click="handleClose">
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu__line">
      <ul class="mobile-menu__nav">
        <li
          v-for="item in menuItems"
          :id="`menu__${item.anchor}`"
          :key="item.id"
        >
          <a
            v-if="!item.router"
            class="link-style link-style--dark js-scroll-to"
            :href="`#${item.anchor}`"
            >{{ item.name }}</a
          >
          <nuxt-link
            v-if="item.router"
            class="link-style link-style--dark"
            :to="item.to"
            >{{ item.name }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="mobile-menu__line">
      <AppButton>
        Вхід
      </AppButton>
      <a href="#" class="accent-link"> Звязатися з нами</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { menuItems } from '@/setup'
import Socials from '@/components/Socials'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Logo from '@/components/Logo'
import AppButton from '@/components/AppButton'
export default {
  name: 'MobileMenu',
  components: { AppButton, Logo, LanguageSwitcher, Socials },
  computed: {
    ...mapGetters({
      isOpen: 'menu/isOpen'
    })
  },
  data() {
    return {
      menuItems,
      isMenuOpened: false
    }
  },
  methods: {
    handleBurgerClick() {},
    handleClose() {
      this.$store.commit('menu/resetOpen')
    }
  }
}
</script>
