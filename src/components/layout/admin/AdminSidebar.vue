<template>
  <aside class="admin-sidebar">
    <div class="admin-sidebar__header">
      <router-link to="/" class="admin-sidebar__logo admin-logo admin-logo--sm">
        <div class="admin-logo__icon">
          <svg width="22" height="22">
            <use xlink:href="#admin-logo"></use>
          </svg>
        </div>
        <div class="admin-logo__title">Need for car</div>
      </router-link>
    </div>
    <AdminSidebarNav />
  </aside>
</template>

<script>
import AdminSidebarNav from '@/components/layout/admin/AdminSidebarNav.vue';
export default {
  components: {
    AdminSidebarNav,
  },
};
</script>
