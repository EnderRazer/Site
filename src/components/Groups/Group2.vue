<template lang="pug">
.wrapper
  h1.text-center {{ groupname }}
  table.table.table-dark.text-center
    thead
      tr
        th(scope='col') #
        th(scope='col') Имя
        th(scope='col') {{ date }}
    tbody(
      v-for="student in students",
      :key="student.id"
    )
      th(scope='row') {{ student.id }}
      td {{student.name}}
      td
        input(type='checkbox' v-model='student.visit' v-bind:id='student.id')
</template>

<script>
export default {
  computed: {
    date () {
      return this.$store.getters.date
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
