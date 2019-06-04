import Vue from 'vue'
import Vuex from 'vuex'
import group from './group'
import visit from './visit'
import auth from './auth'
import links from './links'
import users from './users'
import lessons from './lessons'
import schedule from './schedule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    group,
    visit,
    auth,
    links,
    users,
    lessons,
    schedule
  }
})
