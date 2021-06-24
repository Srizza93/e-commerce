<template>
  <div class="slideshow">
    <div class="slideshow_main-image">
      <img
        class="slideshow_selection_product-image main-image"
        :src="getImgUrl(gallery[index].image)"
        :alt="gallery[index].text"
      />
      <div class="slideshow_txt-container">
        <h2 class="slideshow_txt-container_text">
          {{ gallery[index].text }}
        </h2>
      </div>
      <a class="slideshow_arrow prev" @click="showPreviousImage()">❮</a>
      <a class="slideshow_arrow next" @click="showNextImage()">❯</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  props: {
    gallery: {
      type: Array,
      required: true,
    },
    selectPhoto: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      index: 0,
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
    updateIndex() {
      this.$emit("childToParent", this.index);
      var gallery = this.$props.gallery;
      if (this.index < 0) {
        this.index = gallery.length - 1;
      }
      if (this.index > gallery.length - 1) {
        this.index = 0;
      }
      this.resetAnimation();
      this.highlightSelectedPhoto();
    },
    highlightSelectedPhoto() {
      const photos = Array.from(
        document.querySelectorAll(".gallery_selection_gallery-image")
      );
      photos.forEach((photo) => {
        photo.classList.remove("selected-photo");
      });
      if (photos[this.index]) {
        photos[this.index].classList.add("selected-photo");
      }
    },
    showPreviousImage() {
      this.index--;
      this.updateIndex();
    },
    showNextImage() {
      this.index++;
      this.updateIndex();
    },
    autoImageChange() {
      this.showNextImage();
    },
    resetAnimation() {
      const image = document.querySelector(".main-image");
      image.style.animation = "none";
      image.offsetHeight;
      image.style.animation = null;
    },
  },
  watch: {
    selectPhoto: function(newVal) {
      this.index = newVal;
      this.updateIndex();
    },
  },
  mounted() {
    setInterval(this.autoImageChange, 7000);
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
  background-color: white;
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
  animation: slideappear 1s 1 ease-in, slidedisappear 1s 1 ease-out 6s;
}
.gallery_selection {
  display: flex;
  flex-direction: row;
}
.slideshow_selection_product-image {
  display: block;
  cursor: pointer;
}
@keyframes slideappear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slidedisappear {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
