<template>
  <div class="admin-content">
    <h1 class="admin-title">Заказы</h1>
    <div class="admin-block admin-orders p-0">
      <b-form class="admin-block__header admin-block-header">
        <fieldset class="admin-block-header__filters">
          <div class="form-group">
            <b-form-select
              v-model="selected.range"
              name="time"
              id="time"
              class="admin-select"
            >
              <b-form-select-option :value="null"
                >За неделю</b-form-select-option
              >
            </b-form-select>
          </div>
          <div class="form-group">
            <b-form-select
              v-model="selected.model"
              name="model"
              id="model"
              class="admin-select"
            >
              <b-form-select-option :value="null">Elantra</b-form-select-option>
            </b-form-select>
          </div>
          <div class="form-group">
            <b-form-select
              v-model="selected.city"
              name="city"
              id="city"
              class="admin-select"
            >
              <b-form-select-option :value="null"
                >Ульяновск</b-form-select-option
              >
            </b-form-select>
          </div>
          <div class="form-group">
            <b-form-select
              v-model="selected.status"
              name="status"
              id="status"
              class="admin-select"
            >
              <b-form-select-option :value="null"
                >В процессе</b-form-select-option
              >
            </b-form-select>
          </div>
        </fieldset>
        <fieldset class="admin-block-header__controls">
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary admin-block-header__apply-btn"
            >
              Применить
            </button>
          </div>
        </fieldset>
      </b-form>
      <div class="admin-orders__list admin-orders-list">
        <AdminOrdersItem v-for="n in 3" :key="n" />
      </div>
      <div class="admin-block__footer admin-block-footer">
        <Pagination :records="150" @changePage="changePage" />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination.vue';
import AdminOrdersItem from '@/components/pages/admin/order-list/AdminOrdersItem.vue';
export default {
  components: {
    Pagination,
    AdminOrdersItem,
  },
  data() {
    return {
      page: 1,
      selected: {
        range: null,
        model: null,
        city: null,
        status: null,
      },
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
  },
};
</script>
