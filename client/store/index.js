export const state = () => ({
  layout: ''
})

export const mutations = {
  setLayout(state, payload) {
    state.layout = payload
  },
  resetLayout(state) {
    state.layout = ''
  }
}
export const getters = {
  layout: ({ layout }) => layout
}
