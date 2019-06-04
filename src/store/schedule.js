export default {
  state: {
    schedules: [
      {
        id: 1,
        groupID: 2,
        date: '2019-06-03',
        lessonsIDs: [7, 10, 12, 11]
      },
      {
        id: 2,
        groupID: 2,
        date: '2019-06-04',
        lessonsIDs: [4, 13, 3, 14]
      },
      {
        id: 3,
        groupID: 2,
        date: '2019-06-05',
        lessonsIDs: [6, 15, 2, 1]
      },
      {
        id: 4,
        groupID: 2,
        date: '2019-06-06',
        lessonsIDs: [5, 8, 17]
      },
      {
        id: 5,
        groupID: 2,
        date: '2019-06-08',
        lessonsIDs: [9, 16]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    lessonsIDsByGroupIDs: (state) => (ids) => {
      var lessonsIDs = []
      for (var i = 0; i < ids.length; i++) {
        state.schedules.filter(schedule => schedule.groupID === ids[i]).forEach(schedule => {
          lessonsIDs = lessonsIDs.concat(schedule.lessonsIDs)
        })
      }
      return lessonsIDs
    },
    lessonsIDsByGroupID: (state) => (id) => {
      var lessonsIDs = []
      state.schedules.filter(schedule => schedule.groupID === id).forEach(schedule => {
        lessonsIDs = lessonsIDs.concat(schedule.lessonsIDs)
      })
      return lessonsIDs
    },
    schedulesByGroupID: (state) => (id) => {
      return state.schedules.filter(schedule => schedule.groupID === id[0])
    },
    scheduleByGroupID: (state) => (id) => {
      return state.schedules.find(schedule => schedule.groupID === id)
    }
  }
}
