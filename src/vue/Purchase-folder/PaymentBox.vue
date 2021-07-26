<template>
  <div class="payment-box">
    <span class="products_product_price description_price">{{ price }}</span>
    <span class="payment-box_taxes"
      >+ €26.34 Shipping and Import Fees Deposit outside of France</span
    >
    <span class="payment-box_delivery-date">
      <b>Arrives:</b> Wednesday 20th July 2021</span
    >
    <span class="quantity-error">Add quantity</span>
    <form class="payment-box__quantity" action="backend.php">
      <label class="payment-box__quantity_label" for="quantity">Qty:</label>
      <select
        class="payment-box__quantity_quantity"
        name="quantity"
        id="quantity"
      >Qty:
        <option v-for="number in quantityArray" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
    </form>
    <button
      class="purchase-process_button payment-box_button"
      @click="addToCart()"
    >
      Add to Cart
    </button>
    <button
      class="purchase-process_button payment-box_button"
      @click="openPayment()"
    >
      Buy Now
    </button>
  </div>
</template>

<script>
export default {
  name: "PaymentBox",
  props: {
    price: {
      type: String,
      required: true,
    },
    quantityArray: {
      type: Array,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    addToCart() {
      if (this.quantityError()) {
        return;
      }
      window.alert("Item added to cart");
    },
    quantityError() {
      const quantity = document.querySelector(".payment-box__quantity_quantity")
        .value;
      const errorMessage = document.querySelector(".quantity-error");
      if (quantity < 1) {
        errorMessage.classList.add("quantity-error-show");
        return true;
      }
      errorMessage.classList.remove("quantity-error-show");
      return false;
    },
    openPayment() {
      const price = this.$props.price.substring(
        0,
        this.$props.price.length - 1
      );
      const quantity = document.querySelector(".payment-box__quantity_quantity")
        .value;
      const finalDetails = this.$props.alt + "-" + price + "-" + quantity;
      if (this.quantityError()) {
        return;
      }
      window.open("./payment.html?final-details=" + encodeURI(finalDetails));
    },
  },
};
</script>

<style>
.payment-box {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 25px;
  margin: 25px;
}

.payment-box_button {
  font-size: 14px;
  color: black;
  text-align: center;
  padding: 10px;
}
.payment-box_button:hover {
  opacity: 0.7;
}

.payment-box_taxes {
  color: #565959;
}

.payment-box_delivery-date {
  padding: 50px 0;
}
.payment-box__quantity {
  width: 85px;
  margin-bottom: 50px;
  padding-left: 5px;
  border: 1px solid #ddd;
  border-radius: 15px;
  background-color: #e7e7e7;
  cursor: pointer;
}
.payment-box__quantity:hover {
  opacity: 0.9;
}
.payment-box__quantity_label {
  cursor: pointer;
}
.payment-box__quantity_quantity {
  border: none;
  background-color: #e7e7e7;
  cursor: pointer;
}
.quantity-error {
  visibility: hidden;
  color: red;
  font-weight: bold;
}
.quantity-error-show {
  visibility: visible;
}
</style>
