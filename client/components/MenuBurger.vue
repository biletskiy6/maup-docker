<template>
  <div class="menu__burger" :class="{ active: toggled }" @click="toggle">
    <div class="burger__open">
      <span></span>
      <span></span>
      <!--      <span></span>-->
    </div>
    <div class="burger__close">
      <span></span>
      <span></span>
    </div>
    <div class="burger__shape"></div>
    <div class="burger__outline"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuBurger',
  model: {
    prop: 'toggled',
    event: 'toggle'
  },
  props: ['toggled'],
  methods: {
    toggle() {
      // this.$emit('toggle', !this.toggled)
      this.$store.commit('menu/setOpen')
    }
  }
}
</script>
