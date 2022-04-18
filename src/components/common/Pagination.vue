<template>
  <div class="admin-pagination">
    <AdminPagination
      v-model="page"
      :records="records"
      :per-page="perPage"
      :options="{
        chunk: 5,
        chunksNavigation: 'scroll',
      }"
      @paginate="changePage"
    />
  </div>
</template>

<script>
import AdminPagination from 'vue-pagination-2';
export default {
  props: ['records', 'perPage'],
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
