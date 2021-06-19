<template>
  <div class="cart-container_products">
    <div
      class="cart-container_products_product"
      :pid="id"
    >
      <img
        class="cart-container_products_product_img"
        :alt="text"
        :src="getImgUrl(image)"
      />
      <div class="cart-container_products_product_info">
        <h3 class="cart-container_products_product_info_title">
          {{ text }}
        </h3>
        <span class="cart-container_products_product_info_span">
          {{ description }}
        </span>
        <span class="cart-container_products_product_info_span">
          {{ reviews }}
        </span>
        <span class="cart-container_products_product_info_span">
          {{ brand }}
        </span>
      </div>
      <div
        class="cart-container_products_product_info cart-container_products_product_payment"
      >
        <h3 class="cart-container_products_product_info_title">Price</h3>
        <span class="cart-container_products_product_info_span">
          {{ price }}€
        </span>
        <h3 class="cart-container_products_product_info_title">Quantity</h3>
        <span class="cart-container_products_product_info_span">
          {{ quantity }}
        </span>
        <h3 class="cart-container_products_product_info_title">Total</h3>
        <span class="cart-container_products_product_info_span">
          {{ totalProduct(price, quantity) }}€
        </span>
      </div>
      <div>
        <button class="container-trash-icon" @click="$emit('deleteItem', { event: $event, id })">
          <img
            class="container-trash-icon_icon"
            :src="getImgUrl(trashImage)"
            :alt="trashAlt"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartProduct',
  props: {
    id: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    reviews: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    trashImage: {
      type: String,
      required: true
    },
    trashAlt: {
      type: String,
      required: true
    },
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context(
        "/Users/martina/e-commerce/src/images",
        false,
        /\.png|jpeg$/
      );
      return images("./" + pic);
    },
    totalProduct(price, quantity) {
      return (price * quantity).toFixed(2);
    },
  }
};
</script>