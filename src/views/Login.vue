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
              :class="{ 'form-group--error': $v.loginData.username.$error }"
            >
              <label for="username" class="label login-form__label"
                >Логин</label
              >
              <input
                type="text"
                name="username"
                id="username"
                class="text-input"
                placeholder="Введите e-mail"
                v-model="loginData.username"
              />
              <p class="error">
                {{
                  !$v.loginData.username.required
                    ? 'Поле обязательно для заполнения'
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
                autocomplete="on"
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
                :disabled="authStatus === 'loading'"
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
import { required } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      loginData: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters(['authStatus']),
  },
  methods: {
    login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store
          .dispatch('login', this.loginData)
          .then(() => this.$router.push('/'));
      }
    },
  },
  validations: {
    loginData: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
};
</script>
