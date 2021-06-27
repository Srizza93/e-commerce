<template>
  <div class="products_sort">
    <ul class="products_sort_ul">
      <li
        class="products_sort_option"
        v-for="option in sort"
        :key="option.id + option.text"
        @click="option.function"
      >
        <a class="products_sort_option_button"> {{ option.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  props: {
    sort: {
      type: Array,
      required: true
    },
  }
};
</script>

<style>
.products_sort {
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 10px;
}
.products_sort_ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  position: relative;
}
.products_sort_option {
  border: 1px solid #232f3e;
  border-left-width: 0;
}
.products_sort_option:first-child {
  border-left-width: 1px;
}
.products_sort_option_button {
  display: block;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 400;
  padding: 7px 12px;
  cursor: pointer;
}
.products_sort_option_button:hover {
  background-color: #ff8c00;
  color: #232f3e;
}
.selected-sort {
  background-color: #ff8c00;
  color: #232f3e;
}
@media only screen and (max-width: 920px) {
  .products_sort_option {
    border: 1px solid #232f3e;
    border-top-width: 0;
  }
  .products_sort_option:first-child {
    border-top-width: 1px;
  }
  .products_sort_ul { 
    flex-direction: column;
  }
}
</style>
