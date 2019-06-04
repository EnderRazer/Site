<template lang="pug">
.wrapper
  .container-fluid.text-center(
  v-for="lesson in lessons"
  )
    h1 {{ group.groupname }}
    h1 {{ lesson.name}}
    table.table.table-dark.text-center
      thead
        tr
          th(scope='col') Имя
          th(scope='col') {{ schedule.date }}
      tbody(
        v-for="student in students",
        :key="student.id"
      )
        th(scope='row') {{student.fullname}}
        td
          input(type='checkbox' v-model="checked" @change="setVisit(student.id,lesson.id,checked)")
</template>

<script>
export default {
  computed: {
    curGroupID () {
      return this.$store.getters.curGroupID
    },
    schedule () {
      return this.$store.getters.scheduleByGroupID(this.curGroupID)
    },
    students () {
      return this.$store.getters.studentsByGroupID(this.curGroupID)
    },
    group () {
      return this.$store.getters.groupByID(this.curGroupID)
    },
    lessons () {
      return this.$store.getters.lessonsByTeacherID(this.schedule.lessonsIDs, this.$store.getters.userID)
    }
  },
  methods: {
    setVisit (studentId, lessonId, checked) {
      var payload = {
        'student_id': studentId,
        'lesson_id': lessonId,
        'visit': checked
      }
      this.$store.commit('SET_VISIT', payload)
    }
  },
  mounted () {
    for (var i = 0; i < this.lessons.length; i++) {
      for (var j = 0; j < this.students.length; j++) {
        var payload = {
          'lesson_id': this.lessons[i].id,
          'student_id': this.students[j].id,
          'visit': false
        }
        this.$store.commit('SET_VISIT', payload)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container-fluid
  padding-left 0
  padding-right 0
</style>
