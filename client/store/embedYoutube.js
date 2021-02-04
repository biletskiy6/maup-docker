export const state = () => ({
  embedYoutube: false,
  videoId: false,
  trailerName: null,
  readyState: false
})

export const mutations = {
  setReadyVideoTrailer(state) {
    state.readyState = true
  },
  closeVideoTrailer(state) {
    state.embedYoutube = false
    state.readyState = false
  },
  openVideoTrailer(state, { youtubeLink }) {
    const youtubeIdRegExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/
    const isMatch = youtubeLink.match(youtubeIdRegExp)
    const videoIdLength = 11
    if (isMatch && isMatch[2].length === videoIdLength) {
      state.videoId = isMatch[2]
    }
    state.embedYoutube = true
  }
}
export const getters = {
  embedYoutube: (state) => state.embedYoutube,
  videoId: (state) => state.videoId,
  trailerName: (state) => state.trailerName,
  readyState: (state) => state.readyState
}
