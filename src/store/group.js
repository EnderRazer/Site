export default {
  state: {
    date: '14.01.2019',
    cur_group_id: 0,
    groups: [
      {
        id: 1,
        groupname: '1бПМ'
      },
      {
        id: 2,
        groupname: '2бПМ'
      },
      {
        id: 3,
        groupname: '3бПМ'
      },
      {
        id: 4,
        groupname: '4бПМ'
      }
    ]
  },
  mutations: {
    SET_CUR_GROUP (state, id) {
      state.cur_group_id = id
    }
  },
  actions: {},
  getters: {
    date (state) {
      return state.date
    },
    groups (state) {
      return state.groups
    },
    groupsByIDs: (state) => (ids) => {
      var groupsByIDs = []
      for (var i = 0; i < ids.length; i++) {
        groupsByIDs.push(state.groups.find(group => group.id === ids[i]))
      }
      return groupsByIDs
    },
    groupByID: (state) => (id) => {
      return state.groups.find(group => group.id === id)
    },
    groupsByGroupNames: (state) => (names) => {
      var groupsByNames = []
      for (var i = 0; i < names.length; i++) {
        groupsByNames.push(state.groups.find(group => group.groupname === names[i]))
      }
      return groupsByNames
    },
    curGroupID (state) {
      return state.cur_group_id
    }
  }
}
