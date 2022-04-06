<template>
  <b-alert
    :show="successAlert.show"
    class="admin-notification"
    variant="success"
  >
    <span class="alert-icon alert-icon--success"></span>
    {{ successAlert.message }}

    <button class="close" @click.prevent="hide_success_alert">✕</button>
  </b-alert>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(['successAlert']),
  },
  methods: {
    ...mapMutations(['hide_success_alert']),
  },
};
</script>
