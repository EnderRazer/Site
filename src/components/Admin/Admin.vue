<template lang="pug">
.container-fluid.text-center
  .container
    h1 Загрузить расписание
    .input-group.mb-3
      .input-group-prepend
        span.input-group-text Upload
      .custom-file
        input#inputFile.custom-file-input(type='file' ref="inputFileR" @change="handleSchedule()")
        label.custom-file-label(for='inputFile') Выбрать файл
    hr
    h1 Загрузить группы
    .input-group.mb-3
      .input-group-prepend
        span.input-group-text Upload
      .custom-file
        input#inputFile.custom-file-input(type='file' ref="inputFileG" @change="handleGroup()")
        label.custom-file-label(for='inputFile') Выбрать файл
    hr
    h1 Загрузить преподавателей
    .input-group.mb-3
      .input-group-prepend
        span.input-group-text Upload
      .custom-file
        input#inputFile.custom-file-input(type='file' ref="inputFileT" @change="handleTeachers()")
        label.custom-file-label(for='inputFile') Выбрать файл
    button.btn.btn-primary(type="submit" @click="submit()") Загрузить данные
</template>

<script>
import Papa from 'papaparse'
export default {
  data () {
    return {
      groups: null,
      schedules: null,
      teachers: null
    }
  },
  methods: {
    handleGroup () {
      const that = this
      const fileToLoad = this.$refs.inputFileG.files[0]
      const reader = new FileReader()
      reader.onload = fileLoadedEvent => {
        Papa.parse(fileLoadedEvent.target.result, {
          header: true,
          complete (results) {
            console.log('complete', results)
            that.groups = JSON.stringify(results.data, null, 2)
          },
          error (errors) {
            console.log('error', errors)
          }
        })
      }
      reader.readAsText(fileToLoad)
    },
    handleTeachers () {
      const that = this
      const fileToLoad = this.$refs.inputFileT.files[0]
      const reader = new FileReader()
      reader.onload = fileLoadedEvent => {
        Papa.parse(fileLoadedEvent.target.result, {
          header: true,
          complete (results) {
            console.log('complete', results)
            that.teachers = JSON.stringify(results.data, null, 2)
          },
          error (errors) {
            console.log('error', errors)
          }
        })
      }
      reader.readAsText(fileToLoad)
    },
    handleSchedule () {
      const that = this
      const fileToLoad = this.$refs.inputFileR.files[0]
      const reader = new FileReader()
      reader.onload = fileLoadedEvent => {
        Papa.parse(fileLoadedEvent.target.result, {
          header: true,
          complete (results) {
            console.log('complete', results)
            that.schedules = JSON.stringify(results.data, null, 2)
          },
          error (errors) {
            console.log('error', errors)
          }
        })
      }
      reader.readAsText(fileToLoad)
    },
    submit () {
      var users = []
      var groups = []
      // var lessons = []
      // var schedules = []
      var group = this.groups
      console.log()
      // var schedule = this.schedules
      // var teacher = this.teachers
      for (var i = 0; i < group.length - 1; i++) {
        var groupIn = {}
        if (groups.length > 0) {
          if (groups.find(grp => grp.name === group[i].groupname)) {

          } else {
            groupIn.id = groups[groups.length - 1].id + 1
            groupIn.name = group[i].groupname
            groups.push(groupIn)
          }
        } else {
          groupIn.id = 1
          groupIn.name = group[i].groupname
          groups.push(groupIn)
        }
      }
      console.log(groups)
      for (i = 0; i < group.length - 1; i++) {
        var user = {}
        user.id = group[i].id
        user.fullname = group[i].fullname
        user.birthday = group[i].birthday
        user.group_id = groups.find(grp => grp.name === group[i].name).id
        user.login = group[i].login
        user.password = group[i].password
        user.role = 'student'
        users.push(user)
      }
      console.log(users)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container-fluid
  padding-left 0
  padding-right 0
.custom-file-input
  cursor pointer
</style>
