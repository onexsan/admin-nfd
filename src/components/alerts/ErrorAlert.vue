<template>
  <b-alert
    class="admin-notification"
    ref="errorAlert"
    variant="danger"
    :show="errorAlert.show"
  >
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

  watch: {
    'errorAlert.show': {
      handler: function (val) {
        let isAlertVisible = val;

        if (isAlertVisible) {
          this.$nextTick(() =>
            this.$refs.errorAlert.$el.scrollIntoView({ behavior: 'smooth' })
          );
        }
      },
    },
  },

  methods: {
    ...mapMutations({
      hideErrorAlert: 'alerts/hide_error_alert',
    }),
  },
};
</script>
