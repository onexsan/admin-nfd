<template>
  <div class="order__summary order-summary">
    <div class="order-summary__col">
      <div class="order-summary__model" v-if="orderDetails.name">
        {{ orderDetails.name }}
      </div>
      <div class="order-summary__license" v-if="orderDetails.number">
        {{ orderDetails.number }}
      </div>
      <div class="order-summary__extra" v-if="fuelDataAvailable">
        <span>Топливо:</span>
        {{ fuelDataAvailable }}
      </div>
      <div class="order-summary__extra" v-if="orderDetails.extraBabyChair">
        С <span>детским креслом</span>
      </div>
      <div class="order-summary__extra" v-if="orderDetails.extraRightSide">
        С <span>правым рулём</span>
      </div>
      <div class="order-summary__extra" v-if="availableFrom">
        <span>Доступна</span> с
        {{ availableFrom }}
      </div>
    </div>
    <div class="order-summary__col">
      <img
        v-image-fall-back
        v-if="orderDetails.thumbnail && orderDetails.thumbnail.path"
        :src="orderDetails.thumbnail.path"
        alt="Выбранная модель автомобиля"
        class="order-summary__img"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['orderDetails']),
    availableFrom() {
      let startingDate = this.orderDetails.dateFrom;

      if (startingDate) {
        return `${this.orderDetails.dateFrom
          .split(' ')[0]
          .split('-')
          .reverse()
          .join('.')} ${startingDate.split(' ')[1]}`;
      }
      return null;
    },
    fuelDataAvailable() {
      return this.orderDetails.extraFuel === true
        ? '100%'
        : this.orderDetails.tank
        ? `${this.orderDetails.tank}%`
        : 'Не указано';
    },
  },
};
</script>
