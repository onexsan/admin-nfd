<template>
  <b-alert :show="errorAlert.show" class="admin-notification" variant="danger">
    {{ errorAlert.message }}
    <button class="close" @click.prevent="hideErrorAlert">✕</button>
  </b-alert>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      errorAlert: 'alerts/getErrorAlert',
    }),
  },
  methods: {
    ...mapMutations({
      hideErrorAlert: 'alerts/hide_error_alert',
    }),
  },
};
</script>
