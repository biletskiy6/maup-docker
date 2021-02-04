<template>
  <div class="preloader">
    <div class="overlay first"></div>
    <div class="overlay second"></div>
    <div class="overlay third"></div>
    <div class="counter">
      <span class="counter__number">0</span
      ><span class="counter__percent">%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  beforeMount() {
    document.body.style.setProperty('overflow', 'hidden')
  },
  beforeDestroy() {
    document.body.style.removeProperty('overflow')
  }
}
</script>
