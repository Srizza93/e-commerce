<template>
  <div class="banner" @click="openBanner">
    <div class="banner_main">
      <span class="banner_main_text">
        {{ mainText }}
      </span>
      <i class="banner_main_arrow"></i>
    </div>
    <div class="banner_hidden">
      <p>
        {{ message.text }}
      </p>
      <a class="banner_hidden_link" :href="message.link">Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    openBanner() {
      const hiddenBanner = document.querySelector(".banner_hidden");
      this.turnArrow();
      return hiddenBanner.classList.contains("open-banner")
        ? hiddenBanner.classList.remove("open-banner")
        : hiddenBanner.classList.add("open-banner");
    },
    turnArrow() {
      const arrow = document.querySelector(".banner_main_arrow");
      return arrow.classList.contains("arrow-clicked")
        ? arrow.classList.remove("arrow-clicked")
        : arrow.classList.add("arrow-clicked");
    }
  },
  data() {
    return {
      mainText: "Due to COVID you might experience some delay",
      message: {
        text: "Some products may not be available after purchase due to restrictions",
        link: "https://vuejs.org/v2/guide/#Declarative-Rendering"
      }
    };
  },
};
</script>

<style scoped>
.banner {
  padding: 5px 30px 5px 30px;
  background-color: #ff8c00;
  border: 1px solid black;
  font-weight: bold;
  cursor: pointer;
}

.banner_main {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.banner_hidden {
  display: none;
  padding: 10px 0px 10px 20px;
}

.banner_hidden_link {
  color: #232f3e;
  padding-top: 30px;
  text-decoration: none;
}

.banner_hidden_link:hover {
  opacity: 0.7;
}

.open-banner {
  display: flex;
  flex-direction: column;
}

.banner_main_text {
  padding: 10px 0px 10px 20px;
}

.banner_main_arrow {
  display: inline-block;
  height: 20px;
  border: solid black;
  border-width: 0 3px 3px 0;
  padding: 0 0px 0 20px;
  margin: 0 30px 0 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  cursor: pointer;
}

.arrow-clicked {
  margin-top: 30px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.banner_main_arrow:hover {
  opacity: 0.7;
}

@media only screen and (max-width: 600px) {
  .banner {
    padding: 5px;
  }
  .banner_main_arrow { 
    margin-top: 15px;
  }
}
</style>
