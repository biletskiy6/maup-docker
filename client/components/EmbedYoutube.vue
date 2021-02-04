<template>
  <transition name="fade">
    <section v-if="embedYoutube" class="embed-youtube">
      <CloseButton @click.native="handleCloseEmbed" />
      <youtube
        class="video"
        :video-id="videoId"
        player-width="100%"
        player-height="100%"
        :player-vars="{ autoplay: 0 }"
        @ready="ready"
      ></youtube>
    </section>
  </transition>
</template>

<script>
import CloseButton from '@/components/CloseButton'
export default {
  name: 'EmbedYoutube',
  components: { CloseButton },
  // props: ['embedYoutube', 'videoId', 'trailerName', 'readyState'],
  props: {
    embedYoutube: {
      type: Boolean,
      required: false
    },
    videoId: {
      type: String,
      required: false,
      default: ''
    },
    readyState: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    ready(event) {
      // this.player = event.target
      this.$emit('handleReadyVideoTrailer')
      // this.readyState = true;
    },
    handleCloseEmbed() {
      this.$emit('handleCloseVideoTrailer')
      this.$modal.hide('youtube')
    }
  }
}
</script>
