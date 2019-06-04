import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Teacher from '@/components/Teacher/Teacher'
import Student from '@/components/Student/Student'
import Admin from '@/components/Admin/Admin'
import Group from '@/components/Groups/Group'
import RaspisanieT from '@/components/Teacher/RaspisanieT'
import Poseschenie from '@/components/Student/Poseschenie'
import RaspisanieS from '@/components/Student/RaspisanieS'
import Charts from '@/components/Student/Charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher,
      children: [
        {
          path: '/group',
          name: 'group',
          component: Group
        },
        {
          path: '/raspisanieT',
          name: 'raspisanieT',
          component: RaspisanieT
        }
      ]
    },
    {
      path: '/student',
      name: 'student',
      component: Student,
      children: [
        {
          path: '/raspisanieS',
          name: 'raspisanieS',
          component: RaspisanieS
        },
        {
          path: '/poseschenie',
          name: 'poseschenie',
          component: Poseschenie
        },
        {
          path: '/charts',
          name: 'charts',
          component: Charts
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
