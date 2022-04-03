<template>
  <form class="order-main__form order-form">
    <Loader v-if="cars.status === 'loading'" />
    <template v-else>
      <fieldset>
        <div class="form-group form-group--radio-list order-form__form-group">
          <div class="form-group__radio">
            <label class="radio" for="all-models">
              <input
                type="radio"
                class="radio__input"
                name="models"
                id="all-models"
                :value="1"
                v-model="filter"
              />
              <span class="radio__text">Все модели</span>
              <span class="radio__icon"></span>
            </label>
          </div>
          <template v-if="cars && cars.categories">
            <div
              class="form-group__radio"
              v-for="item in cars.categories"
              :key="item.id"
            >
              <label class="radio" :for="item.name">
                <input
                  type="radio"
                  class="radio__input"
                  name="models"
                  :id="item.name"
                  :value="item.name"
                  v-model="filter"
                />
                <span class="radio__text">{{ item.name }}</span>
                <span class="radio__icon"></span>
              </label>
            </div>
          </template>
        </div>
      </fieldset>
      <fieldset>
        <ul class="order-form__models order-models">
          <li
            class="order-models__item"
            :class="{
              'order-models__item--active': stepTwo.chosenModel.id === item.id,
            }"
            v-for="item in carsList"
            :key="item.id"
            @click.prevent="pickModel(item.id)"
          >
            <div class="order-models__title">{{ item.name }}</div>
            <div class="order-models__price">
              {{ item.priceMin }} - {{ item.priceMax }} ₽
            </div>
            <div class="order-models__img-wrapper">
              <img
                v-image-fall-back
                v-if="item.thumbnail.path"
                :src="item.thumbnail.path"
                :alt="item.name"
                class="order-models__img"
              />
            </div>
          </li>
        </ul>
        <p v-if="!carsList.length">Не найдено.</p>
      </fieldset>
    </template>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapState } from 'vuex';

import Loader from '@/components/common/Loader.vue';
export default {
  data() {
    return {
      stepTwo: {
        chosenModel: '',
      },
      filter: '',
      carsList: [],
      clearCars: [],
    };
  },
  computed: {
    ...mapState(['cars']),
  },
  methods: {
    pickModel(val) {
      this.stepTwo.chosenModel = this.cars.list.find((el) => el.id === val);
    },
  },
  validations: {
    stepTwo: {
      chosenModel: {
        required,
      },
    },
  },
  mounted() {
    this.filter = 1;
  },
  watch: {
    'stepTwo.chosenModel': function (val) {
      let chosenCarData = val;

      this.$store.commit('upd_order_details', chosenCarData);
      this.$store.commit('upd_steps', {
        step: 2,
        formStatus: !this.$v.stepTwo.chosenModel.$invalid,
      });
    },
    cars: {
      handler: function (val) {
        let isCarsListDefined = val !== undefined;
        if (isCarsListDefined) {
          this.clearCars = val.list.filter((el) => el.priceMin < el.priceMax);
          this.carsList = this.clearCars;
        }
      },
      immediate: true,
      deep: true,
    },
    filter: {
      handler: function (val) {

        let isCarCategoryPicked = val !== undefined;

        if (isCarCategoryPicked) {
          let showAllCars = val === 1;

          if (showAllCars) {
            this.carsList = this.clearCars;
          } else {
            let cars = this.clearCars.filter(
              (el) => el.categoryId.name === val
            );
            this.carsList = cars;
          }
        }
      },
    },
  },
  components: { Loader },
};
</script>
