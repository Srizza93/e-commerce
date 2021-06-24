<template>
  <div class="purchase-process">
    <a
      class="purchase-process_button purchase-process_back-to-search"
      href="./research.html"
    >
      ❮
    </a>
    <div class="purchase-process_container">
      <div class="slideshow-container">
        <slide-show
          :gallery="slideshowArray"
          :select-photo="galleryIndex"
          @childToParent="getGalleryIndexFromSlideshow"
        />
        <gallery
          :id="product.id"
          :alt="product.alt"
          :gallery="product.gallery"
          @getIndexOfClickedPhoto="updateGalleryIndex"
        />
      </div>
      <div class="description">
        <h2 class="description_title">{{ product.alt }}</h2>
        <p class="description_description">
          {{ product.alt }} {{ product.description }}
        </p>
        <span class="products_product_price description_price">{{
          product.price
        }}</span>
        <span class="products_product_reviews">
          <span
            class="star"
            v-for="stars in Number(product.reviews)"
            :key="stars"
          ></span>
        </span>
      </div>
      <payment-box
        :quantity-array="quantityArray"
        :price="product.price"
        :alt="product.alt"
      />
    </div>
  </div>
</template>

<script>
import SlideShow from "../SlideShow.vue";
import PaymentBox from "../Purchase-folder/PaymentBox.vue";
import Gallery from "./Gallery.vue";
export default {
  name: "Purchase",
  components: { SlideShow, PaymentBox, Gallery },
  data() {
    return {
      galleryIndex: NaN,
      product: {
        id: this.getProduct()[0],
        src: this.getProduct()[1],
        alt: this.getProduct()[2],
        description: this.getProduct()[3],
        price: this.getProduct()[4],
        reviews: this.getProduct()[5],
        gallery: this.getProduct()[6].split(","),
        quantity: this.getProduct()[7],
      },
    };
  },
  methods: {
    getProduct() {
      const urlParams = new URLSearchParams(window.location.search);
      var productInfo = urlParams.get("product");
      productInfo = productInfo.split(/[\n-]+/);
      return productInfo;
    },
    getImgUrl(pic) {
      var images = require.context(
        "/Users/martina/e-commerce/src/images",
        false,
        /\.jpeg$/
      );
      return images("./" + pic);
    },
    updateGalleryIndex(image) {
      const imageId = image.event.currentTarget.id;
      this.galleryIndex = Number(imageId);
    },
    getGalleryIndexFromSlideshow(newIndex) {
      this.galleryIndex = newIndex;
    },
  },
  computed: {
    quantityArray() {
      var quantity = Number(this.product.quantity);
      return Array.from(Array(quantity).keys());
    },
    slideshowArray() {
      return this.product.gallery.map((image, index) => {
        return {
          id: index,
          image: image,
          text: this.product.alt,
        };
      });
    },
  },
};
</script>

<style>
.purchase-process {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
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
  border-radius: 15px;
  margin: 5px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #ff8c00;
  cursor: pointer;
}
.purchase-process_back-to-search {
  position: fixed;
  top: 50%;
  left: 0;
  padding: 8px;
  margin: 25px 0;
  border-radius: 0 10px 10px 0;
  font-size: 40px;
  color: black;
  text-decoration: none;
}
.purchase-process_back-to-search:hover {
  opacity: 0.7;
}
.main-image {
  width: 300px;
  height: 300px;
}
.products_product_price {
  padding-bottom: 25px;
  font-weight: bold;
  font-size: 21px;
  font-family: "Times New Roman", Times, serif;
}
.description {
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin: 25px;
}
.description_title {
  margin: 0 0 25px 0;
}
.description_description {
  margin: 0 0 25px 0;
}
.star {
  color: #ff8c00;
}
.star::before {
  content: "\2605";
}
.description_price {
  color: #b12704;
}
.selected-photo {
  border: 2px solid #ff8c00;
}
.slideshow_txt-container {
  display: none;
}
@media only screen and (max-width: 680px) {
  .purchase-process_container {
    flex-wrap: wrap;
  }
  .main-image {
    max-width: 100%;
    height: auto;
  }
}
@media only screen and (max-width: 600px) {
  .purchase-process_container {
    align-items: center;
  }
}
</style>
