<template>
  <div class="home-container">
    <slideshow
      :gallery="getGallery()"
      :id="slideshow[0].id"
      :alt="slideshow[0].text"
    />
    <div class="welcome-message">
      <span
        >Welcome to <b>e-commerce.com</b>. Please visit the website to discover
        number one products and best deals.</span
      >
    </div>
    <div class="galery">
      <div v-for="product in products" :key="product.id" class="galery__topics">
        <div class="galery__topics_child">
          <h2 class="galery__topics_title">{{ product.text }}</h2>
        </div>
        <div class="galery__topics_child">
          <a href="./research.html">
            <img
              :src="getImgUrl(product.image)"
              alt="Home"
              class="galery_topics_pic"
            />
          </a>
        </div>
        <div class="galery__topics_child">
          <a class="galery__topics_link" href="./research.html">
            {{ product.link }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from "./SlideShow.vue";

export default {
  name: "App",
  components: { Slideshow },
  data() {
    return {
      products: [
        {
          id: 1,
          text: "Computers and accessories",
          image: "computers.jpeg",
          link: "Shop now",
        },
        {
          id: 2,
          text: "Home",
          image: "home.jpeg",
          link: "Explore now",
        },
        {
          id: 3,
          text: "Beauty",
          image: "beauty.jpeg",
          link: "See more",
        },
        {
          id: 4,
          text: "Garden",
          image: "garden.jpeg",
          link: "See more",
        },
        {
          id: 5,
          text: "Toys",
          image: "ball.jpeg",
          link: "Shop now",
        },
        {
          id: 6,
          text: "Food",
          image: "food.jpeg",
          link: "See more",
        },
        {
          id: 7,
          text: "Music",
          image: "guitar.jpeg",
          link: "See more",
        },
        {
          id: 8,
          text: "Apple",
          image: "mac2.jpeg",
          link: "See more",
        },
        {
          id: 9,
          text: "Turntables",
          image: "turntable2.jpeg",
          link: "Shop now",
        },
        {
          id: 10,
          text: "Deals and promotion",
          image: "shoes.jpeg",
          link: "Shop now",
        },
        {
          id: 11,
          text: "Shop top categories",
          image: "mac3.jpeg",
          link: "Shop now",
        },
        {
          id: 12,
          text: "For kids",
          image: "toys4.jpeg",
          link: "Explore now",
        },
      ],
      slideshow: [
        {
          id: 1,
          image: "slideshow1.jpeg",
          text: "Find the best deals",
        },
        {
          id: 2,
          image: "slideshow2.jpeg",
          text: "Best quality",
        },
        {
          id: 3,
          image: "slideshow3.jpeg",
          text: "All sort of categories",
        },
        {
          id: 4,
          image: "slideshow4.jpeg",
          text: "Travel with us",
        },
        {
          id: 5,
          image: "slideshow5.jpeg",
          text: "Shop now",
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.jpeg$/);
      return images("./" + pic);
    },
    getGallery() {
      return this.slideshow.map((prop) => {
        return prop.image;
      });
    },
  },
};
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  background: rgb(255, 140, 0);
  background: radial-gradient(
    circle,
    rgba(255, 140, 0, 1) 72%,
    rgba(19, 25, 33, 1) 100%
  );
}
.welcome-message {
  text-align: center;
  padding: 15px;
  margin: 25px 50px 0 50px;
  background-color: white;
}
.galery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  min-height: 600px;
  padding-bottom: 50px;
}
.galery__topics {
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: left;
  margin: 25px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
.galery__topics_child {
  padding: 25px 20px;
}
.main-image {
  width: 100%;
  height: 300px;
}
.galery_topics_pic {
  position: relative;
  width: 100%;
  max-width: 257px;
  height: auto;
}
.galery__topics_title {
  margin: 0;
}
.galery__topics_link {
  font-size: 13px;
  text-decoration: none;
  color: #007185;
}
.galery__topics_link:hover {
  text-decoration: underline;
  color: red;
}
@media only screen and (max-width: 600px) {
  .welcome-message {
    margin: 25px;
  }
}
</style>
