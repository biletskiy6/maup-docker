import Vue from 'vue'
Vue.filter('trim', function(value, count) {
  if (!value) {
    return ''
  }
  const sliced = value.slice(0, count)
  return sliced + '...'
})
