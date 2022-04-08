<template>
  <div class="admin-error">
    <div class="admin-error__block">
      <div class="admin-error__type">500</div>
      <div class="admin-error__title">Что то пошло не так</div>
      <div class="admin-error__message">Попробуйте перезагрузить страницу</div>
      <button class="btn btn-primary" @click="$router.go(-1)">Назад</button>
    </div>
  </div>
</template>
