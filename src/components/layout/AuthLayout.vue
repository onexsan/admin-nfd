<template>
  <div class="auth-wrapper">
    <router-view></router-view>

    <IconTemplate />
  </div>
</template>

<script>
import IconTemplate from '@/components/common/IconTemplate.vue';
export default {
  components: {
    IconTemplate,
  },
};
</script>

<style lang="scss">
.auth-wrapper {
  height: 100%;
  background-color: $gray-admin;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
