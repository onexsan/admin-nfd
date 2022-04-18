<template>
  <div class="admin-pagination">
    <AdminPagination
      v-model="page"
      :records="records"
      :per-page="5"
      :options="{
        chunk: 5,
      }"
      @paginate="changePage"
    />
  </div>
</template>

<script>
import AdminPagination from 'vue-pagination-2';
export default {
  components: {
    AdminPagination,
  },
  props: {
    records: Number,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    },
  },
};
</script>
