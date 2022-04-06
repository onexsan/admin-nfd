<template>
  <div class="admin-wrapper">
    <router-view name="Sidebar" />
    <div class="main-content">
      <router-view name="Header" />
      <div class="container admin__container admin-view">
        <router-view />
      </div>
      <router-view name="Footer" />
      <ErrorAlert />
      <SuccessAlert />
    </div>

    <IconTemplate />
    <AdminMenuModal />
  </div>
</template>

<script>
import IconTemplate from '@/components/common/IconTemplate.vue';
import AdminMenuModal from '@/components/modals/AdminMenuModal.vue';
import ErrorAlert from '@/components/alerts/ErrorAlert.vue';
import SuccessAlert from '@/components/alerts/SuccessAlert.vue';
export default {
  components: {
    IconTemplate,
    AdminMenuModal,
    SuccessAlert,
    ErrorAlert,
  },
};
</script>

<style lang="scss"></style>
