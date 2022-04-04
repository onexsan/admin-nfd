import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import OrderList from '../views/OrderList.vue';
import Entities from '../views/Entities.vue';
import EditPage from '../views/EditPage.vue';

import AdminSidebar from '../components/layout/admin/AdminSidebar.vue';
import AdminHeader from '../components/layout/admin/AdminHeader.vue';
import AdminFooter from '../components/layout/admin/AdminFooter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login,
    meta: {
      title: 'Need For Drive',
      layout: 'auth-layout',
    },
  },
  {
    path: '/admin/order-list',
    name: 'OrderList',
    components: {
      default: OrderList,
      Sidebar: AdminSidebar,
      Header: AdminHeader,
      Footer: AdminFooter,
    },
    meta: {
      title: 'Need For Drive',
      layout: 'admin-layout',
    },
  },
  {
    path: '/admin/entities/:id',
    name: 'Entities',
    components: {
      default: Entities,
      Sidebar: AdminSidebar,
      Header: AdminHeader,
      Footer: AdminFooter,
    },
    meta: {
      title: 'Need For Drive',
      layout: 'admin-layout',
    },
  },
  {
    path: '/admin/edit/:id',
    name: 'EditPage',
    components: {
      default: EditPage,
      Sidebar: AdminSidebar,
      Header: AdminHeader,
      Footer: AdminFooter,
    },
    meta: {
      title: 'Need For Drive',
      layout: 'admin-layout',
    },
  },
  {
    path: '/login/',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Need For Drive',
      layout: 'auth-layout',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  next();
});

export default router;
