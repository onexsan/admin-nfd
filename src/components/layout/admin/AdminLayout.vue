<template>
  <div class="admin-wrapper">
    <router-view name="Sidebar" />
    <div class="main-content">
      <router-view name="Header" />
      <div class="container admin__container admin-view">
        <router-view />
      </div>
      <router-view name="Footer" />
    </div>

    <IconTemplate />
    <AdminMenuModal />
  </div>
</template>

<script>
import IconTemplate from '@/components/common/IconTemplate.vue';
import AdminMenuModal from '@/components/modals/AdminMenuModal.vue';
export default {
  components: {
    IconTemplate,
    AdminMenuModal,
  },
};
</script>

<style lang="scss">
.admin-wrapper {
  height: 100%;
  background-color: $gray-admin;
  font-family: Helvetica, Arial, sans-serif;
  display: grid;
  grid-template-columns: auto 1fr;

  @include phones {
    grid-template-columns: 1fr;
  }
}

.admin-wrapper .main-content {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 0px;
  background-color: $gray-admin;

  .admin-view {
    margin-bottom: 50px;
  }
}
</style>
