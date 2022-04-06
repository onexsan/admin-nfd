<template>
  <b-alert :show="errorAlert.show" class="admin-notification" variant="danger">
    {{ errorAlert.message }}
    <button class="close" @click.prevent="hide_error_alert">✕</button>
  </b-alert>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState(['errorAlert']),
  },
  methods: {
    ...mapMutations(['hide_error_alert']),
  },
};
</script>
