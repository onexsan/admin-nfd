<template>
  <nav class="admin-sidebar__nav admin-sidebar-nav">
    <ul class="admin-sidebar-nav__list">
      <li
        v-for="link in links"
        :key="link.title"
        class="admin-sidebar-nav__item"
      >
        <router-link
          :to="link.address"
          class="admin-sidebar-nav__link"
          exact-active-class="admin-sidebar-nav__link--active"
        >
          <div class="admin-sidebar-nav__icon">
            <svg width="13" height="14">
              <use :xlink:href="`#${link.icon}`"></use>
            </svg>
          </div>
          <span>{{ link.title }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Карточка автомобиля',
          address: '/admin/edit/car/',
          icon: 'edit-icon',
        },
        {
          title: 'Список авто',
          address: '/admin/',
          icon: 'posts-icon',
        },
        {
          title: 'Заказы',
          address: '/admin/order-list/',
          icon: 'add-icon',
        },
        {
          title: 'Тестовые сущности',
          address: '/admin/entities/test/',
          icon: 'overview-icon',
        },
        {
          title: 'Menu 5',
          address: '/admin/',
          icon: 'forms-icon',
        },
        {
          title: 'Menu 6',
          address: '/admin/',
          icon: 'user-icon',
        },
        {
          title: 'Menu 7',
          address: '/admin/',
          icon: 'error-icon',
        },
      ],
    };
  },
};
</script>
