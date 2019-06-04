export default {
  state: {
    lessons: [
      {
        id: 1,
        name: 'Экономика',
        group_id: 2,
        teacherID: 32,
        time: '',
        cab: 517,
        description: 'Семинар',
        week: 'Числитель'
      },
      {
        id: 2,
        name: 'Теория вероятностей, математическая статистика и теория случайных процессов',
        group_id: 2,
        teacherID: 29,
        time: '',
        cab: 441,
        description: 'Лекции',
        week: 'Числитель'
      },
      {
        id: 3,
        name: 'Операционные системы и сети ЭВМ',
        group_id: 2,
        teacherID: 31,
        time: '',
        cab: 447,
        description: 'Лекции',
        week: 'Числитель'
      },
      {
        id: 4,
        name: 'Базы данных',
        group_id: 2,
        teacherID: 33,
        time: '',
        cab: 441,
        description: 'Семинар',
        week: 'Числитель'
      },
      {
        id: 5,
        name: 'Физическая культура и спорт',
        group_id: 2,
        teacherID: 25,
        time: '',
        cab: 0,
        description: 'Лекции',
        week: 'Числитель'
      },
      {
        id: 6,
        name: 'Социология',
        group_id: 2,
        teacherID: 30,
        time: '',
        cab: 905,
        description: 'Лекции',
        week: 'Числитель'
      },
      {
        id: 7,
        name: 'Деловой иностранный язык',
        group_id: 2,
        teacherID: 26,
        time: '',
        cab: 225,
        description: 'Семинар',
        week: 'Числитель'
      },
      {
        id: 8,
        name: 'Теория устойчивости',
        group_id: 2,
        teacherID: 28,
        time: '',
        cab: 905,
        description: 'Лекции',
        week: 'Числитель'
      },
      {
        id: 9,
        name: 'Теория обыкновенных дифференциальных уравнений',
        group_id: 2,
        teacherID: 27,
        time: '',
        cab: 443,
        description: 'Лекции',
        week: 'Числитель'
      },
      {
        id: 10,
        name: 'Политология',
        group_id: 2,
        teacherID: 24,
        time: '',
        cab: 333,
        description: 'Лекции',
        week: 'Числитель'
      },
      {
        id: 11,
        name: 'Элективные курсы по физической культуре и спорту',
        group_id: 2,
        teacherID: 25,
        time: '',
        cab: 0,
        description: 'Семинар',
        week: 'Числитель'
      },
      {
        id: 12,
        name: 'Политология',
        group_id: 2,
        teacherID: 24,
        time: '',
        cab: 333,
        description: 'Семинар',
        week: 'Числитель'
      },
      {
        id: 13,
        name: 'Базы данных',
        group_id: 2,
        teacherID: 33,
        time: '',
        cab: 441,
        description: 'Лекции',
        week: 'Числитель'
      },
      {
        id: 14,
        name: 'Операционные системы и сети ЭВМ',
        group_id: 2,
        teacherID: 31,
        time: '',
        cab: 447,
        description: 'Семинар',
        week: 'Числитель'
      },
      {
        id: 15,
        name: 'Социология',
        group_id: 2,
        teacherID: 30,
        time: '',
        cab: 905,
        description: 'Семинар',
        week: 'Числитель'
      },
      {
        id: 16,
        name: 'Теория обыкновенных дифференциальных уравнений',
        group_id: 2,
        teacherID: 27,
        time: '',
        cab: 443,
        description: 'Семинар',
        week: 'Числитель'
      },
      {
        id: 17,
        name: 'Теория устойчивости',
        group_id: 2,
        teacherID: 28,
        time: '',
        cab: 905,
        description: 'Семинар',
        week: 'Числитель'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    lessons: (state) => (ids) => {
      var lessons = []
      for (var i = 0; i < ids.length; i++) {
        lessons.push(state.lessons.find(lesson => lesson.id === ids[i]))
      }
      return lessons
    },
    lessonsByTeacherID: (state) => (ids, teacherID) => {
      var lessons = []
      for (var i = 0; i < ids.length; i++) {
        var lesson = state.lessons.find(lesson => lesson.id === ids[i] && lesson.teacherID === teacherID)
        if (lesson != null) {
          lessons.push(lesson)
        }
      }
      return lessons
    }
  }
}
