<template>
  <form class="order-main__form order-form">
    <fieldset>
      <legend class="order-form__legend">Цвет</legend>
      <div class="form-group form-group--radio-list order-form__form-group">
        <div class="form-group__radio form-group-radio">
          <label class="radio" for="all-colors">
            <input
              type="radio"
              class="radio__input"
              name="color"
              id="all-colors"
              v-model="stepThree.color"
              value="Любой"
            />
            <span class="radio__text">Любой</span>
            <span class="radio__icon"></span>
          </label>
        </div>
        <div
          class="form-group__radio"
          v-for="item in Array.from(new Set(orderDetails.colors))"
          :key="item.id"
        >
          <label class="radio" :for="item">
            <input
              type="radio"
              class="radio__input"
              name="color"
              :id="item"
              v-model="stepThree.color"
              :value="item"
            />
            <span class="radio__text">{{ item }}</span>
            <span class="radio__icon"></span>
          </label>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend class="order-form__legend">Дата аренды</legend>
      <div
        class="form-group order-form__form-group order-form__form-group--grid"
      >
        <label for="order-from" class="order-form__label">С</label>
        <VueCtkDateTimePicker
          id="order-from"
          format="YYYY-MM-DD HH:mm"
          color="#0ec261"
          label="Введите дату и время"
          :no-label="true"
          v-model="stepThree.dateFrom"
        />
        <label for="order-to" class="order-form__label">По</label>
        <VueCtkDateTimePicker
          id="order-to"
          format="YYYY-MM-DD HH:mm"
          color="#0ec261"
          label="Введите дату и время"
          :no-label="true"
          :min-date="stepThree.dateFrom"
          v-model="stepThree.dateTo"
        />
      </div>
    </fieldset>
    <Loader v-if="stepThreeData.status === 'loading'" />
    <fieldset v-else>
      <legend class="order-form__legend">Тариф</legend>
      <div class="form-group order-form__form-group">
        <div
          class="form-group__radio form-group-radio"
          v-for="item in stepThreeData.rates"
          :key="item.id"
        >
          <label
            class="radio"
            :for="item.rateTypeId.name"
            v-if="item.rateTypeId"
          >
            <input
              type="radio"
              class="radio__input"
              name="rate"
              :id="item.rateTypeId.name"
              v-model="stepThree.rate"
              :value="item.rateTypeId.name"
            />
            <span class="radio__text"
              >{{ item.rateTypeId.name }}, {{ item.price }}₽/{{
                item.rateTypeId.unit
              }}</span
            >
            <span class="radio__icon"></span>
          </label>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend class="order-form__legend">Доп. услуги</legend>
      <div class="form-group order-form__form-group">
        <div class="form-group__checkbox form-group-checkbox">
          <label class="checkbox" for="extra-fuel">
            <input
              type="checkbox"
              class="checkbox__input"
              name="extra-fuel"
              id="extra-fuel"
              v-model="stepThree.extraFuel"
            />
            <span class="checkbox__text">Полный бак, 500р</span>
            <span class="checkbox__icon"></span>
          </label>
        </div>
        <div class="form-group__checkbox form-group-checkbox">
          <label class="checkbox" for="extra-baby-chair">
            <input
              type="checkbox"
              class="checkbox__input"
              name="extra-baby-chair"
              id="extra-baby-chair"
              v-model="stepThree.extraBabyChair"
            />
            <span class="checkbox__text">Детское кресло, 200р</span>
            <span class="checkbox__icon"></span>
          </label>
        </div>
        <div class="form-group__checkbox form-group-checkbox">
          <label class="checkbox" for="extra-right-side">
            <input
              type="checkbox"
              class="checkbox__input"
              name="extra-right-side"
              id="extra-right-side"
              v-model="stepThree.extraRightSide"
            />
            <span class="checkbox__text">Правый руль, 1600р</span>
            <span class="checkbox__icon"></span>
          </label>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapState } from 'vuex';

import Loader from '@/components/common/Loader.vue';
export default {
  data() {
    return {
      stepThree: {
        color: '',
        dateFrom: '',
        dateTo: '',
        rate: '',
        ratePrice: '',
        extraFuel: false,
        extraBabyChair: false,
        extraRightSide: false,
      },
    };
  },
  computed: {
    ...mapState(['stepThreeData', 'orderDetails']),
    isFormFilled() {
      return this.$v.form;
    },
  },
  validations: {
    form: function () {
      return (
        required(this.stepThree.color) &&
        required(this.stepThree.dateFrom) &&
        required(this.stepThree.dateTo) &&
        required(this.stepThree.rate)
      );
    },
  },
  watch: {
    stepThree: {
      deep: true,
      handler(val) {
        let extraData = val;

        this.$store.commit('upd_order_details', extraData);
        this.$store.commit('upd_steps', {
          step: 3,
          formStatus: this.isFormFilled,
        });
      },
    },
    'stepThree.rate': function (val) {
      let rateObj = this.stepThreeData.rates.find(
        (el) => el.rateTypeId.name == val
      );
      this.stepThree.ratePrice = rateObj.price;
      this.stepThree.rateID = rateObj.id;
    },
  },
  components: {
    Loader,
  },
};
</script>
