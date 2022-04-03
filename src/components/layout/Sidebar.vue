<template>
  <aside class="sidebar">
    <div class="container sidebar__container">
      <button class="menu-btn" v-b-modal.hamburger-modal>
        <svg>
          <use xlink:href="#icon-menu" class="menu-btn__icon"></use>
        </svg>
      </button>
      <button class="link link--green link--lang">Eng</button>
    </div>
    <HamburgerModal />
  </aside>
</template>

<script>
import HamburgerModal from '@/components/modals/HamburgerModal.vue';
export default {
  components: {
    HamburgerModal,
  },
};
</script>

<style></style>
