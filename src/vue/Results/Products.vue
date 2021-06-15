<template>
  <div>
    <div class="products_product" :id="id" :pkey="'product-' + id">
      <img
        class="products_product_images"
        :src="getImgUrl(image)"
        :alt="text"
        :id="id"
        @click="$emit('hideResultsAndShowPurchase', { event: $event, id })"
      />
      <h4 class="products_product_brand">{{ brand }}</h4>
      <span class="products_product_description">
        {{ description }}
      </span>
      <span class="products_product_price">{{ price }}</span>
      <span class="products_product_reviews">
        <span class="star" v-for="star in reviews" :key="star"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
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
      type: Number,
      required: true,
    },
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
};
</script>

<style>
.products_product {
  display: flex;
  flex-direction: column;
  padding: 0 12px 30px 12px;
  max-width: 200px;
  min-height: 475px;
  border-bottom: 2px solid #ddd;
}
.products_product_images {
  width: 100%;
  height: auto;
  cursor: pointer;
  margin-top: 50px;
}

.products_product_images:hover {
  opacity: 0.7;
}
.products_product_brand {
  margin-top: 10px;
}
.products_product_description {
  margin-bottom: 10px;
}
.products_product_price {
  padding-bottom: 0.5em;
  font-weight: bold;
  font-size: 21px;
}
.star {
  color: #ff8c00;
}
.star::before {
  content: "\2605";
}
@media only screen and (max-width: 600px) {
  .products_product {
    padding: 0 0 30px 0;
    margin: 10px;
  }
}
</style>
