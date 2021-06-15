<template>
  <form
    class="payment-container_form"
    action="backend.php"
  >
    <label for="cname">Cardholder's name</label>
    <span class="payment-container_form_label cardholdername"></span>
    <input
      type="text"
      id="cname"
      name="cardholdername"
      class="payment-container_form_input cardholdername"
    />
    <label for="crty">Card type</label>
    <select
      class="payment-container_form_input payment-container_form_input_selection"
    >
      <option v-for="card in circuits" :key="card.id + card.name" id="crty">
        {{ card.name }}
      </option>
    </select>
    <div class="payment-container_form_group" v-for="info in card" :key="info.id">
      <label :for="info.identity">{{ info.text }}</label>
      <span :class="'payment-container_form_label ' + info.name"></span>
      <input
        :class="'payment-container_form_input ' + info.name"
        type="text"
        :id="info.identity"
        :name="info.name"
        :placeholder="info.suggestion"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "CreditCard",
  props: {
    circuits: {
      type: Array,
      required: true
    },
    card: {
      type: Array,
      required: true
    }
  },
};
</script>

<style></style>
