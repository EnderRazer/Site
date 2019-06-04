<template lang="pug">
.container-fluid
  nav.navbar.navbar-expand-lg.navbar-inverse.navbar-dark.bg-dark
    a.navbar-brand.text-light
      | {{ teacher.fullname }}
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item.dropdown
          button#dropdownMenuButton.btn.btn-secondary.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
            | Группы
          .dropdown-menu(aria-labelledby='dropdownMenuButton')
            button.btn.btn-danger.nav-link(
              v-for="group in groups"
              :key="group.id"
              @click="toCurGroup(group.id)"
            ) {{ group.groupname }}
        li.nav-item
          router-link.nav-link(
            :to="raspisanie.url"
          ) Расписание
  router-view
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      raspisanie: {
        url: '/raspisanieT'
      }
    }
  },
  computed: {
    teacher () {
      return this.$store.getters.teacherByID(this.$store.getters.userID)
    },
    groups () {
      return this.$store.getters.groupsByIDs(this.teacher.group_id)
    }
  },
  methods: {
    toCurGroup (id) {
      this.$store.commit('SET_CUR_GROUP', id)
      this.$router.push('/group')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container-fluid
  padding-left 0
  padding-right 0
</style>
