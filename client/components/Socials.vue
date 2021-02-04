<template>
  <div class="socials-container" :class="{ [layout]: layout, [color]: color }">
    <label v-if="label" for="socials">Соціальні мережі:</label>
    <ul id="socials" class="socials">
      <li v-for="social in socials" :key="social.name">
        <a href="#" v-html="icons[social.name]"></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import instagram from '@/assets/icons/instagram.svg?raw'
import youtube from '@/assets/icons/youtube.svg?raw'
import facebook from '@/assets/icons/facebook.svg?raw'
export default {
  name: 'Socials',
  props: {
    label: {
      type: Boolean,
      default: false
    },
    layout: {
      required: false,
      type: String,
      default: 'first'
    },
    color: {
      required: false,
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      icons: { instagram, youtube, facebook }
    }
  },
  computed: {
    ...mapGetters({
      socials: 'socials/socials'
    })
  }
}
</script>
