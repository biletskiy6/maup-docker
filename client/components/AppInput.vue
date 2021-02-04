<template>
  <div class="app-input">
    <input
      v-if="type !== 'textarea'"
      :id="name"
      :name="name"
      :type="inputType"
      :value="value"
      v-bind="$attrs"
      class="v-input v-text-field v-input theme--light"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="type === 'textarea'"
      :id="name"
      :name="name"
      :type="inputType"
      :value="value"
      v-bind="$attrs"
      class="v-input v-textarea v-text-field"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
    <span class="app-input__icon" v-html="icon"></span>
    <a
      v-if="type === 'password'"
      href="#"
      @click.prevent="togglePasswordVisibility"
      >Reveal Password</a
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    name: {
      required: true,
      type: String
    },
    icon: {
      required: false,
      type: String,
      default: ''
    },
    type: {
      required: false,
      type: String,
      default: 'text'
    },
    value: {
      required: false,
      type: String,
      default: ''
    }
  },
  data: () => ({
    passwordRevealed: false
  }),
  computed: {
    inputType() {
      return this.passwordRevealed ? 'text' : this.type
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordRevealed = !this.passwordRevealed
    }
  }
}
</script>
