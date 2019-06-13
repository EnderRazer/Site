<template lang="pug">
.container-fluid
  nav.navbar.navbar-expand-lg.navbar-inverse.navbar-dark.bg-dark
    a.navbar-brand.text-light
      | {{ student.fullname }}
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item
          router-link.nav-link(
            :to="raspisanie.url"
          ) Расписание
        li.nav-item
          router-link.nav-link(
            :to="poseschenie.url"
          ) Посещаемость
  router-view
</template>

<script>
export default {
  data () {
    return {
      raspisanie: {
        url: '/raspisanieS'
      },
      poseschenie: {
        url: '/poseschenie'
      },
      charts: {
        url: '/charts'
      }
    }
  },
  computed: {
    student () {
      return this.$store.getters.studentByID(this.$store.getters.userID)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container-fluid
  padding-left 0
  padding-right 0
</style>
