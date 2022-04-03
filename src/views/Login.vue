<template>
  <section class="login">
    <div class="container login__container">
      <div class="login__wrapper">
        <router-link to="/" class="login__logo admin-logo">
          <div class="admin-logo__icon">
            <svg width="45" height="45">
              <use xlink:href="#admin-logo"></use>
            </svg>
          </div>
          <div class="admin-logo__title">Need for drive</div>
        </router-link>
        <form class="login__form login-form">
          <legend class="login-form__title">Вход</legend>
          <fieldset>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.loginData.email.$error }"
            >
              <label for="email" class="label login-form__label">Почта</label>
              <input
                type="email"
                name="email"
                id="email"
                class="text-input"
                placeholder="Введите e-mail"
                v-model="loginData.email"
              />
              <p class="error">
                {{
                  !$v.loginData.email.required
                    ? 'Поле обязательно для заполнения'
                    : !$v.loginData.email.email
                    ? 'Укажите корректный e-mail.'
                    : 'Проверьте правильность заполнения.'
                }}
              </p>
            </div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.loginData.password.$error }"
            >
              <label for="pass" class="label login-form__label">Пароль</label>
              <input
                type="password"
                id="pass"
                name="pass"
                class="text-input"
                placeholder="Введите пароль"
                v-model="loginData.password"
              />
              <p class="error">
                {{
                  !$v.loginData.password.required
                    ? 'Поле обязательно для заполнения'
                    : 'Проверьте правильность заполнения.'
                }}
              </p>
            </div>
          </fieldset>
          <fieldset class="login-form__footer">
            <div class="form-group">
              <a href="#" class="login-form__link">Запросить доступ</a>
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary login-form__btn"
                @click.prevent="login"
              >
                Войти
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$v.$touch();
      console.log(this.loginData);
    },
  },
  validations: {
    loginData: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
};
</script>
