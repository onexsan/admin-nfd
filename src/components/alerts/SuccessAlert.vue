<template>
  <b-alert
    :show="successAlert.show"
    class="admin-notification"
    variant="success"
  >
    <span class="alert-icon alert-icon--success"></span>
    {{ successAlert.message }}

    <button class="close" @click.prevent="hideSuccessAlert">✕</button>
  </b-alert>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      successAlert: 'alerts/getSuccessAlert',
    }),
  },
  methods: {
    ...mapMutations({
      hideSuccessAlert: 'alerts/hide_success_alert',
    }),
  },
};
</script>
