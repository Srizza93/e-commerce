<template>
  <form class="payment-container_form" action="backend.php">
    <div
      class="payment-container_form_name-email"
      v-for="group in person"
      :key="group.id + group.text"
    >
      <div
        class="payment-container_form_group"
        v-for="info in group.infos"
        :key="info.id + info.name"
      >
        <label :for="info.identity">
          {{ info.text }}
        </label>
        <span :class="'payment-container_form_label ' + info.name"></span>
        <input
          :class="'payment-container_form_input ' + info.name"
          type="text"
          :id="info.identity"
          :name="info.name"
        />
      </div>
    </div>
    <div class="payment-container_form_group">
      <label for="creg">Country/region</label>
      <select
        class="payment-container_form_input payment-container_form_input_selection"
      >
        <option
          v-for="country in countries"
          :key="country.id + country.name"
          id="creg"
        >
          {{ country.name }}
        </option>
      </select>
    </div>
    <div class="payment-container_form_group">
      <label for="phone-number">Telephone (mobile number preferred) </label>
      <span class="payment-container_form_label phone-number"></span>
      <div class="phone-number-container">
        <select
          class="payment-container_form_input payment-container_form_input_selection payment-container_form_input_prefix"
        >
          <option
            v-for="country in countries"
            :key="country.id + country.prefix"
            id="creg"
          >
            {{ country.prefix }}
          </option>
        </select>
        <input
          class="payment-container_form_input"
          type="text"
          id="phone-number"
          name="select-country-region"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "PersonalInfo",
  props: {
    person: {
      type: Array,
      required: true
    },
    countries: {
      type: Array,
      required: true
    },
  },
};
</script>

<style>
.phone-number-container {
  display: flex;
}
</style>
