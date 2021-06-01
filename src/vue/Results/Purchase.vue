<template>
  <div class="purchase-process">
    <div class="galery">
      <button
        class="purchase-process_button purchase-process_back-to-search"
        @click="$emit('goBacktoSearch', { event: $event, id })"
      >
        Back to Search...
      </button>
      <img
        class="galery_selection_product-image main-image"
        :src="getImgUrl(src)"
        :alt="alt"
        @click="expandImage"
      />
      <div class="galery_selection">
        <img
          class="galery_selection_product-image galery_selection_galery-image"
          v-for="(image, index) in galery"
          :key="id + index"
          :src="getImgUrl(image)"
          :alt="alt"
          @click="expandImage"
        />
      </div>
    </div>
    <div class="description">
      <h2 class="description_title">{{ alt }}</h2>
      <p>{{ alt }} {{ description }}</p>
      <span class="products_product_price description_price">{{ price }}</span>
      <span class="products_product_reviews">
        <span class="star"></span>
        {{ reviews }}
      </span>
    </div>
    <div class="payment-box">
      <span class="products_product_price description_price">{{ price }}</span>
      <span class="payment-box_taxes"
        >+ $26.34 Shipping and Import Fees Deposit to France</span
      >
      <span class="payment-box_delivery-date">
        <b>Arrives:</b>Wednesday 20th July 2021</span
      >
      <form class="payment-box__quantity" action="backend.php">
        <label class="payment-box__quantity_label" for="quantity">Qty:</label>
        <select
          class="payment-box__quantity_quantity"
          name="quantity"
          id="quantity"
        >
          <option v-for="number in quantityArray" :key="number" :value="number">
            {{ number }}
          </option>
        </select>
      </form>
      <button class="purchase-process_button payment-box_button">
        Add to Cart
      </button>
      <button class="purchase-process_button payment-box_button">
        Buy Now
      </button>
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
    expandImage(event) {
      var clickedImage = event.target;
      clickedImage.classList.contains("expand-image")
        ? clickedImage.classList.remove("expand-image")
        : clickedImage.classList.add("expand-image");
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
.purchase-process {
  display: none;
  align-items: baseline;
  padding: 25px;
  justify-content: center;
  line-height: 2;
}
.purchase-process_button {
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin: 5px;
  opacity: 0.9;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: orange;
  cursor: pointer;
}
.purchase-process_back-to-search {
  width: 50%;
}
.purchase-process_back-to-search:hover {
  opacity: 1;
}
.galery {
  display: flex;
  flex-direction: column;
  padding: 25px;
}
.galery_selection {
  display: flex;
  flex-direction: row;
}
.galery_selection_product-image {
  max-width: 100%;
  height: auto;
  margin: 5px;
  cursor: pointer;
}
.galery_selection_product-image:hover {
  opacity: 0.7;
}
.galery_selection_galery-image {
  max-width: 50px;
  max-height: 50px;
  border: 1px solid #ddd;
}
.expand-image {
  position: fixed;
  width: 60%;
  max-width: 60%;
  max-height: 60%;
  height: auto;
  top: 15%;
  left: 20%;
}
.description {
  display: flex;
  flex-direction: column;
  padding: 25px;
}
.description_title {
  margin-top: 0;
}
.description_price {
  color: #b12704;
}
.payment-box {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 25px;
}

.payment-box_button:hover {
  opacity: 1;
}

.payment-box_taxes {
  color: #565959;
}

.payment-box_delivery-date {
  padding-top: 50px;
}
.payment-box__quantity {
  width: 70px;
  margin: 50px 0;
  padding-left: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #e7e7e7;
  opacity: 0.8;
  cursor: pointer;
}
.payment-box__quantity:hover {
  opacity: 1;
}
.payment-box__quantity_label {
  cursor: pointer;
}
.payment-box__quantity_quantity {
  border: none;
  background-color: #e7e7e7;
  cursor: pointer;
}
@media only screen and (max-width: 680px) {
  .purchase-process {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 600px) {
  .purchase-process {
    align-items: center;
  }
  .galery {
    flex-direction: column;
  }
  .galery_selection {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
