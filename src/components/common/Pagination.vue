<template>
  <div class="admin-pagination">
    <AdminPagination
      v-model="page"
      :records="records"
      :per-page="5"
      @paginate="changePage"
      :options="{
        chunk: 5,
      }"
    />
  </div>
</template>

<script>
import AdminPagination from 'vue-pagination-2';
export default {
  props: ['records'],
  data() {
    return {
      page: 1,
    };
  },
  components: {
    AdminPagination,
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    },
  },
};
</script>
