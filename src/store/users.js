export default {
  state: {
    users: [
      {
        id: 1,
        fullname: 'Admin',
        birthday: '',
        group_id: [],
        role: 'admin'
      },
      {
        id: 2,
        fullname: 'Али Алан',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 3,
        fullname: 'Андреев Александр',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 4,
        fullname: 'Давледьянов Артем',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 5,
        fullname: 'Драгун Константин',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 6,
        fullname: 'Дубенская Дарья',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 7,
        fullname: 'Калик Михаил',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 8,
        fullname: 'Комлева Анна',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 9,
        fullname: 'Косихин Никита',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 10,
        fullname: 'Кротов Михаил',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 11,
        fullname: 'Лянгузов Даниил',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 12,
        fullname: 'Мамонтов Антон',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 13,
        fullname: 'Моргацкая Ангелина',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 14,
        fullname: 'Нетовканная Анастасия',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 15,
        fullname: 'Нохрин Кирилл',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 16,
        fullname: 'Панькин Максим',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 17,
        fullname: 'Савельев Виталий',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 18,
        fullname: 'Сидаков Герман',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 19,
        fullname: 'Сусоев Николай',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 20,
        fullname: 'Удалов Анатолий',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 21,
        fullname: 'Усачев Владимир',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 22,
        fullname: 'Хайталиев Исматоло Рамазанович',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 23,
        fullname: 'Шарафян Завен',
        birthday: '',
        group_id: [2],
        role: 'student'
      },
      {
        id: 24,
        fullname: 'Шиповская Л.П.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 25,
        fullname: 'Кузнецов',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 26,
        fullname: 'Хасаншина Н.Р.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 27,
        fullname: 'Розенблат Г.М.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 28,
        fullname: 'Орлов И.А.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 29,
        fullname: 'Таташев А.Г.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 30,
        fullname: 'Макаренко Е.И.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 31,
        fullname: 'Кутейников И.А.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 32,
        fullname: 'Машкин А.П.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      },
      {
        id: 33,
        fullname: 'Самородов В.А.',
        birthday: '',
        group_id: [2],
        role: 'teacher'
      }
    ]
  },
  mutations: {
    SET_USERS: (state, payload) => {
      state.users = payload
    }
  },
  actions: {
    PUSH_USER: async (context, user) => {
      let {data} = await this.$https.post('https://floating-refuge-10389.herokuapp.com/api/users/', {user})
      console.log(data)
    }
  },
  getters: {
    students (state) {
      return state.users.filter(user => user.role === 'student')
    },
    teachers (state) {
      return state.users.filter(user => user.role === 'teacher')
    },
    studentsByGroupID: (state) => (id) => {
      return state.users.filter(user => user.role === 'student' && user.group_id[0] === id)
    },
    studentByID: (state) => (id) => {
      return state.users.find(user => user.role === 'student' && user.id === id)
    },
    teacherByID: (state) => (id) => {
      return state.users.find(user => user.role === 'teacher' && user.id === id)
    }
  }
}
