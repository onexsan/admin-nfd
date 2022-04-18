<template>
  <div class="auth-wrapper">
    <router-view></router-view>
    <ErrorAlert />
    <SuccessAlert />
    <IconTemplate />
  </div>
</template>

<script>
import IconTemplate from '@/components/common/IconTemplate.vue';
import ErrorAlert from '@/components/alerts/ErrorAlert.vue';
import SuccessAlert from '@/components/alerts/SuccessAlert.vue';
export default {
  components: {
    IconTemplate,
    ErrorAlert,
    SuccessAlert,
  },
};
</script>

<style lang="scss">
.auth-wrapper {
  height: 100%;
  background-color: $gray-admin;
  font-family: Helvetica, Arial, sans-serif;

  .alert.admin-notification {
    top: 0;
  }
}
</style>
