<template>
  <div class="booking-process">
    <div class="galery">
      <div class="galery_selection">
        <img
          class="galery_selection_product-image galery_selection_galery-image"
          v-for="(image, index) in galery"
          :key="id + index"
          :src="getImgUrl(image)"
          :alt="alt"
        />
      </div>
      <img
        class="galery_selection_product-image"
        :src="getImgUrl(src)"
        :alt="alt"
      />
    </div>
    <div class="description">
      <h2 class="description_title">{{ alt }}</h2>
      <p>{{ alt }} {{ description }}</p>
      <span class="products_product_price">{{ price }}</span>
      <span class="products_product_reviews">
        <span class="star"></span>
        {{ reviews }}
      </span>
    </div>
    <div class="payment-box">
      <span class="products_product_price">{{ price }}</span>
      <span class="payment-box_taxes"
        >+ $26.34 Shipping and Import Fees Deposit to France</span
      >
      <span class="payment-box_delivery-date">
        <b>Arrives:</b>Wednesday 20th July 2021</span
      >
      <form action="backend.php">
        <label for="quantity">Qty:</label>
        <select name="quantity" id="quantity">
          <option v-for="number in quantityArray" :key="number" :value="number"> {{ number }} </option>
        </select>
      </form>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Purchase",
  props: {
    id: {
      type: String | Number,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    reviews: {
      type: String,
      required: true,
    },
    galery: {
      type: Array,
      required: true,
    },
    quantity: Number,
    requireed: true,
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context(
        "/Users/martina/e-commerce/src/images",
        false,
        /\.jpeg$/
      );
      return images("./" + pic);
    },
  },
  computed: {
    quantityArray() {
      return Array.from(Array(this.quantity).keys());
    },
  },
};
</script>

<style>
.booking-process {
  display: none;
  padding: 5%;
}
.galery {
  display: flex;
  flex-direction: row;
}
.galery_selection {
  display: flex;
  flex-direction: column;
}
.galery_selection_product-image {
  height: 400px;
  width: 400px;
  padding: 5px;
  cursor: pointer;
}
.galery_selection_product-image:hover {
  opacity: 0.7;
}
.galery_selection_galery-image {
  width: 100px;
  height: 100px;
}
.description {
  display: flex;
  flex-direction: column;
  line-height: 2;
  padding: 5px;
}
.description_title {
  margin-top: 0;
}
.payment-box {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 5px;
}
</style>
