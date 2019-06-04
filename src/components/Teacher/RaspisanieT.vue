<template lang="pug">
.container-fluid.text-center
  h1 Расписание преподавателя {{ teacher.fullname }}
  .container-fluid(
    v-for="schedule in schedules"
  )
    h3 Дата: {{ schedule.date}}
    table.table.table-dark
      thead
        tr
          th(scope='col') Время
          th(scope='col') Предмет
          th(scope='col') Группа
          th(scope='col') Аудитория
      tbody
        tr(
          v-for="lesson in schedule.lessons"
          :key="lesson.id"
        )
          td {{ lesson.time}}
          td {{ lesson.name }}
          td {{ lesson.groupname }}
          td {{ lesson.cab }}
</template>

<script type="text/javascript">
export default {
  computed: {
    teacher_id () {
      return this.$store.getters.userID
    },
    teacher () {
      return this.$store.getters.teacherByID(this.teacher_id)
    },
    lessons () {
      var lessons = this.$store.getters.lessonsByTeacherID(this.$store.getters.lessonsIDsByGroupIDs(this.teacher.group_id), this.teacher.id)
      var groups = this.groups
      for (var i = 0; i < groups.length; i++) {
        lessons.filter(lesson => lesson.group_id === groups[i].id).forEach(lesson => {
          lesson.groupname = groups[i].groupname
        })
      }
      return lessons
    },
    groups () {
      return this.$store.getters.groupsByIDs(this.teacher.group_id)
    },
    schedules () {
      var schedules = this.$store.getters.schedulesByGroupID(this.teacher.group_id)
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
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>

</style>
