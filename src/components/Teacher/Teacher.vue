<template lang="pug">
.wrapper
  nav.navbar.navbar-expand-lg.navbar-inverse.navbar-dark.bg-dark
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item.dropdown
          button#dropdownMenuButton.btn.btn-secondary.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
            | Группы
          .dropdown-menu(aria-labelledby='dropdownMenuButton')
            router-link.dropdown-item(
              v-for="group in groups"
              :key="group.title"
              :to="group.url"
              ) {{ group.title }}
  router-view
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      groups: [
        {title: 'Группа 1', url: '/group1'},
        {title: 'Группа 2', url: '/group2'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
