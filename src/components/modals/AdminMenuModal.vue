<template>
  <b-modal
    id="admin-menu-modal"
    class="hamburger-modal"
    :hide-footer="true"
    :hide-header="true"
  >
    <div class="admin-sidebar admin-sidebar--mobile">
      <div class="admin-sidebar__header">
        <router-link
          to="/"
          class="admin-sidebar__logo admin-logo admin-logo--sm"
        >
          <div class="admin-logo__icon">
            <svg width="22" height="22">
              <use xlink:href="#admin-logo"></use>
            </svg>
          </div>
          <div class="admin-logo__title">Need for car</div>
        </router-link>
        <button
          class="close-btn admin-sidebar__close"
          @click="$bvModal.hide(`admin-menu-modal`)"
        >
          <svg>
            <use xlink:href="#icon-close"></use>
          </svg>
        </button>
      </div>
      <AdminSidebarNav />
    </div>
  </b-modal>
</template>

<script>
import AdminSidebarNav from '@/components/layout/admin/AdminSidebarNav.vue';
export default {
  components: {
    AdminSidebarNav,
  },
};
</script>
