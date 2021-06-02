<template>
  <div class="gallery">
    <div class="gallery_main-image">
      <img
        class="gallery_selection_product-image main-image"
        :src="mainImage"
        :alt="alt"
      />
      <a
        class="gallery_arrow prev"
        @click="$emit('changeToPreviousPic', { event: $event, id })"
        >❮</a
      >
      <a
        class="gallery_arrow next"
        @click="$emit('changeToNextPic', { event: $event, id })"
        >❯</a
      >
    </div>
    <div class="gallery_selection">
      <img
        class="gallery_selection_product-image gallery_selection_gallery-image"
        v-for="(image, index) in gallery"
        :key="id + index"
        :src="getImgUrl(image)"
        :alt="alt"
        :id="index"
        @click="$emit('showClickedImageOnMainPic', { event: $event, id })"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
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
    mainImage: {
      type: String,
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
.gallery {
  display: flex;
  flex-direction: column;
  padding: 25px;
}
.gallery_main-image {
  position: relative;
}
.main-image {
  width: 300px;
  height: 300px;
}
.gallery_arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: #ff8c00;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}
.gallery_arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.gallery_selection {
  display: flex;
  flex-direction: row;
}
.gallery_selection_product-image {
  display: block;
  cursor: pointer;
}
.gallery_selection_gallery-image {
  max-width: 50px;
  max-height: 50px;
  border: 1px solid #ddd;
  margin: 5px;
}
.gallery_selection_gallery-image:hover {
  opacity: 0.7;
}
@media only screen and (max-width: 680px) {
  .main-image {
    max-width: 100%;
    height: auto;
  }
}
@media only screen and (max-width: 600px) {
  .gallery {
    flex-direction: column;
  }
  .gallery_selection {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
