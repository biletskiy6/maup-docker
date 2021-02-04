<template>
  <div class="breadcrumbs">
    <div class="single-hero-container breadcrumbs__container">
      <ul class="breadcrumbs-list">
        <li v-for="crumb in crumbs" :key="crumb.to">
          <nuxt-link :to="crumb.to">{{ crumb.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import startCase from 'lodash.startcase'
export default {
  name: 'Breadcrumbs',
  computed: {
    crumbs() {
      const pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          to: path,
          title: startCase(path)
        })
        return breadcrumbArray
      }, [])
      breadcrumbs.unshift({
        to: '/',
        title: 'Home'
      })
      return breadcrumbs
    }
  }
}
</script>
