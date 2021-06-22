<template>
  <div class="navigation-bar">
    <button
      type="button"
      @click="showHamburger()"
      class="buttons icon hamburger-menu"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar last-bar"></div>
    </button>
    <a
      type="button"
      v-for="button in menu"
      :key="button.id"
      :href="button.link"
      class="buttons buttons_responsive"
    >
      {{ button.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Navigation-menu",
  methods: {
    showHamburger() {
      const navigation = document.querySelector(".navigation-bar");
      const buttons = document.querySelectorAll(".buttons_responsive");
      if (!navigation.classList.contains("hamburger-open")) {
        navigation.classList.add("hamburger-open");
        buttons.forEach((button) => {
          button.classList.add("hamburger-clicked");
        });
      } else {
        navigation.classList.remove("hamburger-open");
        buttons.forEach((button) => {
          button.classList.remove("hamburger-clicked");
        });
      }
    },
  },
  data() {
    return {
      menu: [
        {
          id: 1,
          text: "All",
          link: "./research.html",
        },
        {
          id: 2,
          text: `Today's Deal`,
          link: "./research.html",
        },
        {
          id: 3,
          text: "Customer Service",
          link: "./research.html",
        },
        {
          id: 4,
          text: "Gift Cards",
          link: "./research.html",
        },
        {
          id: 5,
          text: "Best Sellers",
          link: "./research.html",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navigation-bar {
  display: inline-flex;
  width: 100%;
  overflow-y: hidden;
  background-color: #232f3e;
  color: white;
  text-align: center;
  box-sizing: border-box;
}

.buttons {
  display: inline-flex;
  height: fit-content;
  padding: 8px;
  margin: 5px;
  border: 0;
  background-color: #232f3e;
  color: white;
  font-family: auto;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

.buttons:hover {
  outline: 1px solid white;
}

.icon {
  display: none;
}

.hamburger-open {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.hamburger-clicked {
  width: 200px;
}

.bar {
  width: 35px;
  height: 4px;
  background-color: white;
  margin-bottom: 5px;
}

.last-bar {
  margin: 0;
}

@media only screen and (max-width: 600px) {
  .buttons_responsive {
    display: none;
  }

  .hamburger-clicked {
    display: block;
  }

  .icon {
    display: inline-block;
  }
}
</style>
