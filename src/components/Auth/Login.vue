<template lang="pug">
.wrapper
  .container.text-center
    h1 Авторизация
    form
      .form-group
        label(for='exampleInputEmail1') Логин
        input#exampleInputEmail1.form-control(type='email', aria-describedby='emailHelp', placeholder='Enter email')
      .form-group
        label(for='exampleInputPassword1') Пароль
        input#exampleInputPassword1.form-control(type='password', placeholder='Password')
      button.btn.btn-primary(type='submit') Войти

</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
