<template>
  <div class="admin-pagination">
    <admin-pagination
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
  components: {
    AdminPagination,
  },
  props: {
    records: Number,
    perPage: {
      type: Number,
      default: 5,
    },
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
