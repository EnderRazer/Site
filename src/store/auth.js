export default {
  state: {
    user_id: 0,
    role: ''
  },
  mutations: {
    SET_USER (state, payload) {
      // state.role = payload.role
      // state.user_id = payload.user_id
      state.role = payload.role
      switch (state.role) {
        case 'student':
          state.user_id = payload.user_id
          break
        case 'teacher':
          state.user_id = payload.user_id
          break
        case 'admin':
          state.user_id = 1
          break
      }
    }
  },
  actions: {
    GET_USER: async (contex, payload) => {
      let {data} = await this.$https.post('https://floating-refuge-10389.herokuapp.com/api/users/', payload)
        .then(function (response) {
          contex.commit('SET_USER', data)
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    }
  },
  getters: {
    role (state) {
      return state.role
    },
    userID (state) {
      return state.user_id
    }
  }
}
