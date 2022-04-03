<template>
  <b-modal
    id="order-confirmation-modal"
    class="order-confirmation-modal"
    :hide-header="true"
  >
    <p class="order-confirmation-modal__text">{{ modalPurpose }} заказ</p>
    <template #modal-footer>
      <button
        v-if="modalPurpose === `Подтвердить`"
        class="btn"
        @click="sendOrder"
        :disabled="orderRequest.status === 'loading'"
      >
        {{ modalPurpose }}
      </button>
      <button
        v-else-if="modalPurpose === `Отменить`"
        class="btn"
        @click="cancelOrder"
        :disabled="orderRequest.status === 'loading'"
      >
        {{ modalPurpose }}
      </button>
      <button
        class="btn btn-danger"
        @click="$bvModal.hide(`order-confirmation-modal`)"
      >
        Вернуться
      </button>
    </template>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['modalPurpose'],
  computed: {
    ...mapState(['orderRequest']),
  },
  methods: {
    async sendOrder() {
      await this.$store.dispatch('sendOrder');
    },
    async cancelOrder() {
      let orderID = this.$route.params.id;
      await this.$store.dispatch('cancelOrder', orderID);
    },
  },
  watch: {
    'orderRequest.response': {
      handler: function (val) {
        let orderIdAvailable = val.id && val.id !== '' && val.id !== undefined;

        if (orderIdAvailable) {
          this.$router.push(`/order-details/${val.id}`).catch((err) => {
            let navigationIsNotDuplicated =
              err.name !== 'NavigationDuplicated' &&
              !err.message.includes(
                'Avoided redundant navigation to current location'
              );

            if (navigationIsNotDuplicated) {
              console.log(err);
            } else {
              this.$router.go();
            }
          });
        }
      },
    },
  },
};
</script>
