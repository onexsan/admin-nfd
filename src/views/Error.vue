<template>
  <div class="admin-error">
    <div class="admin-error__block">
      <div class="admin-error__type">
        {{ is404 ? '404' : '500' }}
      </div>
      <div class="admin-error__title">
        {{ is404 ? 'Страница не найдена' : 'Что-то пошло не так.' }}
      </div>
      <div class="admin-error__message" v-if="!is404">
        Попробуйте перезагрузить страницу
      </div>
      <button class="btn btn-primary" @click="$router.go(-1)">Назад</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    is404() {
      return this.$route.name === 'Error404' || 'UnauthorizedError404';
    },
  },
};
</script>
