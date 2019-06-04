<template lang="pug">
.container-fluid
  .container-fluid.text-center(
    v-for="schedule in schedules"
    :key="schedule.id"
  )
    h3 Дата: {{ schedule.date }}
    table.table.table-dark
      thead
        tr
          th(scope='col') Предмет
          th(scope='col') Преподаватель
          th(scope='col') Отметка посещения
      tbody
        tr(
          v-for="lesson in schedule.lessons"
          :key="lesson.id"
        )
          td {{ lesson.name }}
          td {{ lesson.teacher }}
          td
            .checkbox.checkbox-primary
              input(type='checkbox' v-model="lesson.visit" disabled="true")
</template>

<script>
export default {
  computed: {
    student () {
      return this.$store.getters.studentByID(this.$store.getters.userID)
    },
    schedules () {
      var schedules = this.$store.getters.schedulesByGroupID(this.student.group_id)
      var lessons = this.lessons
      schedules.forEach(schedule => {
        schedule.lessons = []
        for (var j = 0; j < schedule.lessonsIDs.length; j++) {
          for (var i = 0; i < lessons.length; i++) {
            if (schedule.lessonsIDs[j] === lessons[i].id) {
              schedule.lessons.push(lessons[i])
            }
          }
        }
      })
      return schedules
    },
    lessons () {
      var lessonsIDs = []
      this.visits.forEach(visit => lessonsIDs.push(visit.lesson_id))
      var teachers = this.$store.getters.teachers
      var lessons = this.$store.getters.lessons(lessonsIDs)
      for (var i = 0; i < teachers.length; i++) {
        lessons.filter(lesson => lesson.teacherID === teachers[i].id).forEach(lesson => {
          lesson.teacher = teachers[i].fullname
        })
      }
      for (var j = 0; j < this.visits.length; j++) {
        lessons.filter(lesson => lesson.id === this.visits[j].lesson_id).forEach(lesson => {
          lesson.visit = this.visits[j].visit
        })
      }
      return lessons
    },
    visits () {
      return this.$store.getters.visitsByStudentID(this.student.id)
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
input[type="checkbox"]:disabled
  background-color
</style>
