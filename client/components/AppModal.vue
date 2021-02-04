<template>
  <div
    v-if="visible"
    class="app-modal"
    :class="{ active: visible, [name]: name }"
    @click="handleClose"
  >
    <div class="app-modal-inner" @click.stop>
      <slot :params="params" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    name: {
      required: false,
      type: String,
      default: ''
    }
  },
  data() {
    return {
      params: {},
      visible: false
    }
  },
  watch: {
    visible: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            document.body.style.setProperty('overflow', 'hidden')
          })
        } else {
          document.body.style.removeProperty('overflow')
        }
      }
    }
  },
  beforeMount() {
    this.$modal.$event.$on('show', (modal, params) => {
      this.params = params
      return this.name === modal ? (this.visible = true) : null
    })
    this.$modal.$event.$on('hide', (modal) => {
      return this.name === modal ? this.handleClose() : null
    })
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (this.visible && e.which === 27) {
        this.handleClose()
      }
    })
  },
  methods: {
    handleClose() {
      this.visible = false
    }
  }
}
</script>
