<template>
  <div>
    <label :pkey="'filter-' + id" class="filters_filter_topic">
      <div>
        <input
          class="filters_filter_topic_checkbox"
          type="checkbox"
          :id="id"
          :value="text"
          @click="
            $emit('updateShownItemsAndFilters', { event: $event, id })
          "
        />
        <span class="filters_filter_topic_checkmark"></span>
        <span class="filters_filter_topic_container"></span>
        <span class="filters_filter_topic_label_text">
          {{ text }}
        </span>
      </div>
      <span> ({{ itemsWithFilter }}) </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    itemsWithFilter: {
      type: Number | String,
      required: true,
    },
  },
};
</script>

<style>
.filters_filter_topic {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 5px 7px;
}
.filters_filter_topic_checkbox {
  transform: scale(1.5);
  opacity: 0;
}
.filters_filter_topic_label {
  cursor: pointer;
}
.filters_filter_topic_label:hover {
  opacity: 0.7;
}
.filters_filter_topic_container {
  position: absolute;
  left: 20px;
  border: 1px solid black;
  opacity: 0.4;
  height: 20px;
  width: 20px;
  cursor: pointer;
}
.filters_filter_topic_container:hover {
  opacity: 0.2;
}
.filters_filter_topic_checkbox:checked ~ .filters_filter_topic_container {
  background-color: #2196f3;
  opacity: 1;
}

.filters_filter_topic_checkmark {
  content: "";
  position: absolute;
  display: none;
  cursor: pointer;
  left: 27px;
  width: 5px;
  height: 10px;
  padding-top: 4px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 999;
}
.filters_filter_topic_checkbox:checked ~ .filters_filter_topic_checkmark {
  display: inline-flex;
}
.filters_filter_topic_label_text {
  cursor: pointer;
  padding: 0px 30px 0px 10px;
}
.filters_filter_topic_label_count {
  cursor: pointer;
  font-size: 13px;
  text-align: right;
  color: #6b6b6b;
}
</style>
