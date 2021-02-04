export const state = () => ({
  isOpen: false
})
export const mutations = {
  setOpen(state) {
    state.isOpen = true
    document.body.style.setProperty('overflow', 'hidden')
  },
  resetOpen(state) {
    state.isOpen = false
    document.body.style.removeProperty('overflow')
  }
}
export const getters = {
  isOpen: ({ isOpen }) => isOpen
}
