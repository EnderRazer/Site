export default {
  state: {
    id: 0,
    visits: []
  },
  mutations: {
    SET_VISIT: (state, payload) => {
      var visit = state.visits.find(visit => visit.student_id === payload.student_id && visit.lesson_id === payload.lesson_id)
      if (visit === undefined) {
        state.id++
        state.visits.push({
          id: state.id,
          student_id: payload.student_id,
          lesson_id: payload.lesson_id,
          visit: payload.visit
        })
      } else {
        visit.visit = payload.visit
      }
    }
  },
  actions: {
  },
  getters: {
    visitByStudentIDandLessonID: (state) => (lesID, studID) => {
      return state.visits.find(visit => visit.student_id === studID && visit.lesson_id === lesID)
    },
    visitsByStudentID: (state) => (studID) => {
      return state.visits.filter(visit => visit.student_id === studID)
    }
  }
}
