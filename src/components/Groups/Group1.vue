<template lang="pug">
.wrapper
  h1.text-center Группа 1
  table.table.table-light
    thead
      tr
        th(scope='col') #
        th(scope='col') Имя
        th(scope='col') День 1
        th(scope='col') День 2
    tbody(
      v-for="student in students",
      :key="student.id"
    )
      th(scope='row') {{ student.id }}
      td {{student.name}}
      td
        input(type='checkbox' v-model='student.day1' v-bind:id='student.id')
      td
        input(type='checkbox' v-model='student.day2' v-bind:id='student.id')
</template>

<script>
export default {
  data () {
    return {
      students: [
        {
          id: 1,
          name: 'Курилы Нахрин',
          day1: false,
          day2: false
        },
        {
          id: 2,
          name: 'Николай СуперСУС',
          day1: false,
          day2: false
        },
        {
          id: 3,
          name: 'Староста Данилл',
          day1: false,
          day2: false
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
