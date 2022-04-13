<template>
  <div class="admin-content">
    <h1 class="admin-title">Entities</h1>
    <div class="admin-block admin-block--no-border p-0">
      <b-form class="admin-block__header admin-block-header">
        <fieldset class="admin-block-header__filters">
          <div class="form-group">
            <b-form-select
              class="admin-select"
              name="test1"
              id="test1"
              v-model="test1"
            >
              <b-form-select-option :value="null">Field</b-form-select-option>
            </b-form-select>
          </div>
          <div class="form-group">
            <b-form-select
              class="admin-select"
              name="test2"
              id="test2"
              v-model="test2"
            >
              <b-form-select-option :value="null">Field</b-form-select-option>
            </b-form-select>
          </div>
          <div class="form-group">
            <b-form-select
              class="admin-select"
              name="test3"
              id="test3"
              v-model="test3"
            >
              <b-form-select-option :value="null">Field</b-form-select-option>
            </b-form-select>
          </div>
          <div class="form-group">
            <b-form-select
              class="admin-select"
              name="test4"
              id="test4"
              v-model="test4"
            >
              <b-form-select-option :value="null">Field</b-form-select-option>
            </b-form-select>
          </div>
        </fieldset>
        <fieldset class="admin-block-header__controls">
          <div class="form-group">
            <button class="btn admin-block-header__reset-btn">Reset</button>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary admin-block-header__apply-btn"
            >
              Apply
            </button>
          </div>
        </fieldset>
      </b-form>
      <div class="admin-block__table admin-table">
        <b-table
          :items="items"
          :current-page="page"
          :per-page="perPage"
        ></b-table>
      </div>
      <div class="admin-block__footer admin-block-footer">
        <Pagination
          :records="items.length"
          :perPage="perPage"
          @changePage="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/common/Pagination.vue';
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      test1: null,
      test2: null,
      test3: null,
      test4: null,
      items: [
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
        {
          Header: 'Value',
          Header2: 'text',
          Header3: 'text',
          Header4: 'text',
          Header5: 'text',
          Header6: 'text',
        },
      ],
      page: 1,
      perPage: 7,
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
  },
};
</script>
