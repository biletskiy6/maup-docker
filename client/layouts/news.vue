<template>
  <div class="news-layout">
    <notifications position="bottom right" group="foo" />
    <TopBar />
    <TopHeader />
    <Breadcrumbs />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import TopBar from '@/components/TopBar'
import TopHeader from '@/components/TopHeader'

export default {
  name: 'News',
  components: { TopHeader, TopBar, Breadcrumbs, Footer },
  beforeMount() {
    this.setLayout('news')
  },
  mounted() {},
  methods: {
    ...mapMutations({
      setLayout: 'setLayout'
    })
  },
  head: {
    bodyAttrs: {
      class: 'dark news'
    }
  }
}
</script>
