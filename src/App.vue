<template lang="pug">
body
  nav.navbar.fixed-top.navbar-expand-lg.navbar-light
    router-link.navbar-brand(
      to='/'
    )
      | Учет посещаемости
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarMainSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarMainSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item(
          v-for="link in links"
          :key="link.id"
          v-if="link.show"
        )
          router-link.nav-link(
            :to="link.url"
          )
            | {{ link.title }}
        button.btn.btn-primary.nav-item(
          type = 'submit'
          @click="logOut()"
          v-if="!links[0].show"
        ) Выйти
  router-view.container
  nav.navbar.fixed-bottom.navbar-expand-lg.navbar-light
    router-link.navbar-brand( to="/") SUK&trade;
</template>

<script>
export default {
  computed: {
    links () {
      return this.$store.getters.links
    },
    role () {
      return this.$store.getters.role
    }
  },
  methods: {
    logOut () {
      this.links.forEach(link => {
        link.show = false
      }
      )
      this.links[0].show = true
      this.$router.push('/login')
    }
  }
}

</script>

<style lang="stylus">
.navbar-light
  background-color rgba(255, 178, 15, 0.9)
.container
  padding-top 56px
  padding-bottom 56px
  height 100%
  background-color rgba(255, 255, 255, 0.7)
body
  height 100%
  background-image url("./assets/background.jpg")
  background-color #F3DEB9
  background-size 100% 150%
  bottom 0
</style>
