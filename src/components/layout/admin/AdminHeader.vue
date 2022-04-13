<template>
  <header class="admin-header">
    <div class="container admin__container">
      <div class="admin-header__menu admin-header-menu">
        <button class="menu-btn" @click="$bvModal.show(`admin-menu-modal`)">
          <svg>
            <use xlink:href="#icon-menu" class="menu-btn__icon"></use>
          </svg>
        </button>
      </div>
      <form class="admin-header__search admin-search">
        <input
          type="search"
          class="admin-search__input"
          placeholder="Поиск ..."
        />
      </form>
      <div class="admin-header__notifications admin-notifications">
        <a href="#" class="admin-notifications__link">
          <div class="admin-notifications__icon">
            <svg width="18" height="21">
              <use xlink:href="#notifications-icon"></use>
            </svg>
          </div>
          <span class="admin-notifications__count">3</span>
        </a>
      </div>
      <div class="admin-header__user admin-user">
        <b-dropdown right block>
          <template #button-content>
            <div class="admin-user__link">
              <div class="admin-user__photo admin-user-photo">
                <img
                  :src="require('@/assets/img/user-avatar.png')"
                  alt="User photo"
                  class="admin-user-photo__img"
                />
              </div>
              <div class="admin-user__name">Admin</div>
            </div>
          </template>
          <b-dropdown-item-button @click.prevent="logout"
            >Выйти</b-dropdown-item-button
          >
        </b-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>
