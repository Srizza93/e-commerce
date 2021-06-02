<template>
  <div class="purchase-process">
    <button
      class="purchase-process_button purchase-process_back-to-search"
      @click="$emit('goBacktoSearch', { event: $event, id })"
    >
      ❮
    </button>
    <div class="purchase-process_container">
      <slide-show
        :mainImage="showMainImage()"
        :gallery="gallery"
        :alt="alt"
        @showClickedImageOnMainPic="showClickedImage"
        @changeToNextPic="showPreviousImage"
        @changeToPreviousPic="showNextImage"
      />
      <div class="description">
        <h2 class="description_title">{{ alt }}</h2>
        <p>{{ alt }} {{ description }}</p>
        <span class="products_product_price description_price">{{
          price
        }}</span>
        <span class="products_product_reviews">
          <span class="star"></span>
          {{ reviews }}
        </span>
      </div>
      <payment-box :quantity-array="quantityArray" :price="price" />
    </div>
  </div>
</template>

<script>
import SlideShow from "../Results/SlideShow.vue";
import PaymentBox from "../Results/PaymentBox.vue";
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
    gallery: {
      type: Array,
      required: true,
    },
    quantity: Number,
    requireed: true,
  },
  components: { SlideShow, PaymentBox },
  data() {
    return {
      indexSlideShow: 0,
    };
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
    showMainImage() {
      var gallery = this.$props.gallery;
      if (this.indexSlideShow < 0) {
        this.indexSlideShow = gallery.length - 1;
      }
      if (this.indexSlideShow > gallery.length - 1) {
        this.indexSlideShow = 0;
      }
      return this.getImgUrl(this.$props.gallery[this.indexSlideShow]);
    },
    showClickedImage(image) {
      this.indexSlideShow = image.event.target.id;
    },
    showPreviousImage() {
      this.indexSlideShow -= 1;
    },
    showNextImage() {
      this.indexSlideShow += 1;
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
  flex-direction: column;
  align-items: center;
}
.purchase-process_container {
  display: flex;
  align-items: end;
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
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #ff8c00;
  cursor: pointer;
}
.purchase-process_back-to-search {
  position: fixed;
  font-size: 40px;
  margin: 25px 0;
  border-radius: 0 10px 10px 0;
}
.purchase-process_back-to-search:hover {
  opacity: 0.7;
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

@media only screen and (max-width: 680px) {
  .purchase-process_container {
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 600px) {
  .purchase-process_container {
    align-items: center;
  }
}
</style>
