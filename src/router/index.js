import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Teacher from '@/components/Teacher/Teacher'
import Student from '@/components/Student/Student'
import Admin from '@/components/Admin/Admin'
import Group1 from '@/components/Groups/Group1'
import Group2 from '@/components/Groups/Group2'

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
      component: Teacher
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/group1',
      name: 'group1',
      component: Group1
    },
    {
      path: '/group2',
      name: 'group2',
      component: Group2
    }
  ]
})
