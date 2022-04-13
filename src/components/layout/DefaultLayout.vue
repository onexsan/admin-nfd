<template>
  <div class="wrapper">
    <router-view name="Sidebar" />
    <div class="main-content">
      <router-view />
    </div>
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
