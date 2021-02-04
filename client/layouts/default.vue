<template>
  <div>
    <TopBar />
    <TopHeader />
    <nuxt />
    <Footer />
    <ToTop />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import TopHeader from '@/components/TopHeader'
import ToTop from '@/components/ToTop'
export default {
  components: { ToTop, TopHeader, TopBar, Footer },
  beforeMount() {
    this.setLayout('home')
  },
  methods: {
    ...mapMutations({
      setLayout: 'setLayout'
    })
  },
  head: {
    bodyAttrs: {
      class: 'home'
    }
  }
}
</script>
