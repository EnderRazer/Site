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
          th(scope='col') Время
          th(scope='col') Предмет
          th(scope='col') Аудитория
          th(scope='col') Преподаватель
          th(scope='col') Описание
          th(scope='col') Тип недели
      tbody
        tr(
          v-for="lesson in schedule.lessons"
          :key="lesson.id"
        )
          td {{ lesson.time }}
          td {{ lesson.name }}
          td {{ lesson.cab }}
          td {{ lesson.teacher }}
          td {{ lesson.description }}
          td {{ lesson.week }}
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
      var lessons = this.$store.getters.lessons(this.$store.getters.lessonsIDsByGroupID(this.student.group_id[0]))
      var teachers = this.$store.getters.teachers
      for (var i = 0; i < teachers.length; i++) {
        lessons.filter(lesson => lesson.teacherID === teachers[i].id).forEach(lesson => {
          lesson.teacher = teachers[i].fullname
        })
      }
      return lessons
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
