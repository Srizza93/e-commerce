<template>
  <div class="gallery_selection">
    <img
      class="gallery_selection_product-image gallery_selection_gallery-image"
      v-for="(image, index) in gallery"
      :key="id + index"
      :src="getImgUrl(image)"
      :alt="alt"
      :id="index"
      @click="$emit('getIndexOfClickedPhoto', { event: $event, id })"
    />
  </div>
</template>

<script>
export default {
  name: "Gallery",
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
  },
};
</script>

<style>
.gallery_selection_gallery-image {
  max-width: 50px;
  max-height: 50px;
  border: 1px solid #ddd;
  margin: 5px 10px 5px 0;
  cursor: pointer;
}
.gallery_selection_gallery-image:hover {
  opacity: 0.7;
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
