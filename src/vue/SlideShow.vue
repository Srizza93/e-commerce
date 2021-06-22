<template>
  <div class="slideshow">
    <div class="slideshow_main-image">
      <img
        class="slideshow_selection_product-image main-image"
        :src="showMainImage()"
        :alt="alt"
      />
      <div class="slideshow_txt-container">
        <h2 class="slideshow_txt-container_text">
        {{ alt }}
        </h2>
      </div>
      <a
        class="slideshow_arrow prev"
        @click="showPreviousImage()"
        >❮</a
      >
      <a
        class="slideshow_arrow next"
        @click="showNextImage()"
        >❯</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  data() {
    return {
      index: 0,
    }
  },
  props: {
    id: {
      type: String | Number,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    gallery: {
      type: Array,
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
    showMainImage() {
      var gallery = this.$props.gallery;
      if (this.index < 0) {
        this.index = gallery.length - 1;
      }
      if (this.index > gallery.length - 1) {
        this.index = 0;
      }
      var photos = Array.from(
        document.querySelectorAll(".gallery_selection_gallery-image")
      );
      photos.forEach((photo) => {
        photo.classList.remove("selected-photo");
      });
      if (photos[this.index]) {
        photos[this.index].classList.add("selected-photo");
      }
      return this.getImgUrl(this.$props.gallery[this.index]);
    },
    showPreviousImage() {
      this.index--;
    },
    showNextImage() {
      this.index++;
    },
    autoPicChange() {
      this.showNextImage();
    },
  },
  mounted() {
    setInterval(this.autoPicChange, 5000);
  },
};
</script>

<style>
.slideshow {
  display: flex;
  flex-direction: column;
  position: relative;
}
.slideshow-container {
  display: flex;
  flex-direction: column;
  padding: 25px;
}
.slideshow_txt-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 260px;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: black;
  opacity: 0.7;
}
.slideshow_txt-container_text {
  color: white;
  font-weight: normal;
}
.slideshow_main-image {
  position: relative;
}
.slideshow_arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}
.slideshow_arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.prev {
  left: 0;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.main-image {
  display: block;
}
.gallery_selection {
  display: flex;
  flex-direction: row;
}
.slideshow_selection_product-image {
  display: block;
  cursor: pointer;
}
</style>
