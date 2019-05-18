export default {
  state: {
    date: '14.01.2019',
    groups: [
      {
        id: 1,
        groupname: '2бПМ',
        students: [
          {
            id: 1,
            name: 'Нирилл Кохрин',
            visit: false
          },
          {
            id: 2,
            name: 'Михаил Крототов',
            visit: false
          },
          {
            id: 3,
            name: 'Максим Папанькин',
            visit: false
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    date (state) {
      return state.date
    },
    groups (state) {
      return state.groups
    }
  }
}
