<template>
  <div>
    <div class="products_product" :id="id" :pkey="'product-' + id">
      <h4>
        {{ text }}
      </h4>
      <img
        :src="getImgUrl(image)"
        :alt="text"
        class="products_product_images"
      />
      <span class="products_product_brand">{{ brand }}</span>
      <span class="products_product_description">
        {{ description }}
      </span>
      <span class="products_product_price">{{ price }}</span>
      <span class="products_product_reviews">
        <span class="star"></span>
        {{ reviews }}
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
      type: String,
      required: true,
    },
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.jpeg$/);
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
  border-bottom: 2px solid #ddd;
}
.products_product_images {
  width: 100%;
  height: auto;
  cursor: pointer;
}
.products_product_description {
  padding: 1.33em 0 0.5em 0;
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
