<template>
  <div class="galery">
    <div v-for="product in products" :key="product.id" class="galery__topics">
      <img
        :src="getImgUrl(product.link)"
        alt="Home"
        class="galery__topics__pic"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.jpeg$/);
      return images("./" + pic);
    },
  },
  data() {
    return {
      products: [
        {
          id: 1,
          text: "Computers",
          link: "computers.jpeg",
        },
        {
          id: 2,
          text: "Home",
          link: "home.jpeg",
        },
        {
          id: 3,
          text: "Beauty",
          link: "beauty.jpeg",
        },
        {
          id: 4,
          text: "Garden",
          link: "garden.jpeg",
        },
        {
          id: 5,
          text: "Toys",
          link: "ball.jpeg",
        },
        {
          id: 6,
          text: "Food",
          link: "food.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.galery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgb(255, 140, 0);
  background: radial-gradient(
    circle,
    rgba(255, 140, 0, 1) 72%,
    rgba(19, 25, 33, 1) 100%
  );
  padding: 50px 0;
}

.galery__topics {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 260px;
  text-align: center;
  border-radius: 50px;
  margin: 4%;
  background-color: white;
  cursor: pointer;
  flex-grow: 1;
}

.galery__topics__pic {
  border: 1px solid black;
  border-radius: 25px;
}
</style>
