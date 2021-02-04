<template>
  <div class="top-header">
    <TopBar />
    <AppHeader />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import AppHeader from '@/components/AppHeader'
export default {
  name: 'TopHeader',
  components: {
    TopBar,
    AppHeader
  }
}
</script>
