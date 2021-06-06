<template>
  <div class="purchase-process">
    <a
      class="purchase-process_button purchase-process_back-to-search"
      href="./research.html"
    >
      ❮
    </a>
    <div class="purchase-process_container">
      <slide-show
        :mainImage="showMainImage()"
        :gallery="product.gallery"
        :id="product.id"
        :alt="product.alt"
        @showClickedImageOnMainPic="showClickedImage"
        @changeToNextPic="showPreviousImage"
        @changeToPreviousPic="showNextImage"
      />
      <div class="description">
        <h2 class="description_title">{{ product.alt }}</h2>
        <p>{{ product.alt }} {{ product.description }}</p>
        <span class="products_product_price description_price">{{
          product.price
        }}</span>
        <span class="products_product_reviews">
          <span class="star"></span>
          {{ product.reviews }}
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
import SlideShow from "../Purchase-folder/SlideShow.vue";
import PaymentBox from "../Purchase-folder/PaymentBox.vue";
export default {
  name: "Purchase",
  components: { SlideShow, PaymentBox },
  data() {
    return {
      indexSlideShow: 0,
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
    showMainImage() {
      var gallery = this.product.gallery;
      if (this.indexSlideShow < 0) {
        this.indexSlideShow = gallery.length - 1;
      }
      if (this.indexSlideShow > gallery.length - 1) {
        this.indexSlideShow = 0;
      }
      return this.getImgUrl(this.product.gallery[this.indexSlideShow]);
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
      var quantity = Number(this.product.quantity);
      return Array.from(Array(quantity).keys());
    },
  },
};
</script>

<style>
.purchase-process {
  display: flex;
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
  margin: 5px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #ff8c00;
  cursor: pointer;
}
.purchase-process_back-to-search {
  position: fixed;
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
.products_product_price {
  padding-bottom: 0.5em;
  font-weight: bold;
  font-size: 21px;
}
.description {
  display: flex;
  flex-direction: column;
  padding: 25px;
}
.description_title {
  margin-top: 0;
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
