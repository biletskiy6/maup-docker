<template>
  <div class="to-top" :class="{ active: isActive }">
    <div class="to-top__icon" v-html="TopArrow"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import TopArrow from '@/assets/icons/top-arrow.svg?raw'
if (process.client) {
  gsap.registerPlugin(ScrollToPlugin)
}
export default {
  name: 'ToTop',
  data() {
    return {
      TopArrow,
      isActive: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    gsap.utils.toArray('.to-top').forEach(function(a) {
      a.addEventListener('click', function(e) {
        e.preventDefault()
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: 0
          }
        })
      })
    })
  },
  methods: {
    handleScroll() {
      const doc = document.documentElement
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      top > 0 ? (this.isActive = true) : (this.isActive = false)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.isActive = false
      }
    }
  }
}
</script>
