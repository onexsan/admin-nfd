<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'auth-layout';
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>

<style>
#app {
  height: 100%;
}
</style>
