<template lang="pug">
.container.text-center
  h1 Авторизация
  form
    .form-group
      label(for='exampleInputEmail1') Логин
      input#exampleInputEmail1.form-control(type='email', aria-describedby='emailHelp', placeholder='Enter email' required)
    .form-group
      label(for='exampleInputPassword1') Пароль
      input#exampleInputPassword1.form-control(type='password', placeholder='Password')
    button.btn.btn-primary(type='submit' @click="login()") Войти
  hr
  button.btn.btn-primary(type='submit' @click="setRole('admin')") Admin
  hr
  button.btn.btn-primary(type='submit' @click="setRole('student',idS)") Student
  input(type="number" v-model="idS" min=2 max=23)
  hr
  button.btn.btn-primary(type='submit' @click="setRole('teacher',idT)") Teacher
  input(type="number" v-model="idT" min=24 max=33)
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    login () {
      if (this.role === 'teacher') {
        this.links.forEach(link => {
          link.show = false
        }
        )
        this.links[2].show = true
        this.$router.push('/raspisenieT')
      } else if (this.role === 'student') {
        this.links.forEach(link => {
          link.show = false
        }
        )
        this.links[1].show = true
        this.$router.push('/raspisanieS')
      } else if (this.role === 'admin') {
        this.links.forEach(link => {
          link.show = false
        }
        )
        this.links[3].show = true
        this.$router.push('/admin')
      }
    },
    setRole (role, id) {
      this.$store.commit('SET_USER', {'user_id': Number(id), 'role': role})
      console.log(this.role)
      console.log(this.$store.getters.userID)
    }
  },
  computed: {
    role () {
      return this.$store.getters.role
    },
    links () {
      return this.$store.getters.links
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
