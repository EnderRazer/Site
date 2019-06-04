export default {
  state: {
    links: [
      {
        id: 0,
        title: 'Вход',
        url: '/login',
        show: true
      },
      {
        id: 1,
        title: 'Студент',
        url: '/student',
        show: false
      },
      {
        id: 2,
        title: 'Преподаватель',
        url: '/teacher',
        show: false
      },
      {
        id: 3,
        title: 'Администратор',
        url: '/admin',
        show: false
      }
    ]
  },
  mutations: {
    setShow: (state, id) => {
      state.linkMenu.find(link => link.id === id).show = !state.linkMenu.find(link => link.id === id).show
    }
  },
  actions: {},
  getters: {
    links (state) {
      return state.links
    }
  }
}
