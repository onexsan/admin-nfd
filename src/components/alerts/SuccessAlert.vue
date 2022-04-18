<template>
  <b-alert
    class="admin-notification"
    ref="successAlert"
    variant="success"
    :show="successAlert.show"
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

  watch: {
    'successAlert.show': {
      handler: function (val) {
        let isAlertVisible = val;

        if (isAlertVisible) {
          this.$nextTick(() =>
            this.$refs.successAlert.$el.scrollIntoView({ behavior: 'smooth' })
          );
        }
      },
    },
  },

  methods: {
    ...mapMutations({
      hideSuccessAlert: 'alerts/hide_success_alert',
    }),
  },
};
</script>
