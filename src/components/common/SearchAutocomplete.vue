<template>
  <div class="autocomplete">
    <label :for="inputID" class="order-form__label">{{ inputLabel }}</label>
    <input
      type="search"
      :name="inputID"
      :id="inputID"
      class="custom-input order-form__input form-control"
      :placeholder="`Начните вводить ${inputLabel.toLowerCase()}...`"
      v-model="search"
      @input="onChange"
      @focus="onChange"
      @click="onChange"
      :disabled="disabled"
    />
    <ul class="autocomplete-results" v-show="isOpen">
      <li
        class="autocomplete-result"
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
      >
        {{ result.name }}{{ result.address ? `, ${result.address}` : '' }}
      </li>
      <li class="autocomplete-result" v-if="!results.length">Не найдено.</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['inputID', 'inputLabel', 'items', 'disabled', 'fromMap'],
  data() {
    return {
      isOpen: false,
      search: '',
      results: [],
      chosenResult: {},
    };
  },
  methods: {
    filterResults() {
      this.results = this.items.filter(
        (item) =>
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
    onChange() {
      this.filterResults();
      this.isOpen = true;
    },
    setResult(result) {
      this.search = result.name;
      this.chosenResult = result;
      this.isOpen = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  watch: {
    'fromMap.city': {
      handler: function (val) {
        if (this.inputLabel === 'Город') {
          if (this.search !== val.name) {
            this.search = val.name;
          }
        }
      },
    },
    'fromMap.pwz': {
      handler: function (val) {
        if (this.inputLabel === 'Пункт выдачи') {
          let pwz = this.items.find((el) => el.address === val.address);
          if (this.search !== pwz.name) {
            this.search = pwz.name;
          }
        }
      },
    },
    search: {
      immediate: true,
      handler: function (val) {
        let searchStringIsEmpty = val === '';
        let searchStringIsDefined = val !== '' && val !== undefined;

        if (searchStringIsEmpty) {
          this.chosenResult = {};
        } else if (searchStringIsDefined) {
          let result = this.items.find((el) => el.name === val);
          if (result !== undefined) {
            this.chosenResult = result;
          }
        }
        this.$emit('updData', {
          type: this.inputLabel,
          value: this.chosenResult,
        });
      },
    },
    disabled: function (val) {
      if (val === true) {
        this.chosenResult = {};
        this.search = '';
      }
    },
  },
};
</script>
