<template>
  <div class="search-bar">
    <a href="./index.html">
      <img
        class="logo"
        :key="logo.id"
        :src="getImgUrl(logo.link)"
        :alt="logo.link"
      />
    </a>
    <div class="container-form">
      <select class="select selected select_responsive">
        <option v-for="option in options" :key="option.id">
          {{ option.text }}
        </option>
      </select>
      <input
        v-model="search"
        @click="showSuggestions"
        @blur="showSuggestions"
        type="search"
        placeholder="Write something..."
        class="search-form"
      />
      <input type="submit" value="Search" class="lens selected" />
      <div class="suggestions">
        <span
          class="suggestions_topic"
          v-for="option in filteredList"
          :key="option.id"
        >
          {{ option.text }}
          <a
            class="suggestions_topic_subtopic"
            v-for="subtopic in option.subtopics"
            :key="subtopic.text + '-' + subtopic.id"
            :href="subtopic.link"
          >
            {{ subtopic.text }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search-bar",
  data() {
    return {
      search: [],
      logo: {
        text: 'doelogo',
        link: 'doelogo.png'

      },
      options: [
        {
          id: 1,
          text: "Tech",
          subtopics: [
            {
              id: 1,
              link: "./research.html",
              text: "TV",
            },
            {
              id: 2,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Speakers",
            },
            {
              id: 3,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Earphones",
            },
          ],
        },
        {
          id: 2,
          text: "Arts",
          subtopics: [
            {
              id: 1,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Colours",
            },
            {
              id: 2,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Pictures",
            },
            {
              id: 3,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Music",
            },
          ],
        },
        {
          id: 3,
          text: "Baby",
          subtopics: [
            {
              id: 1,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Toys",
            },
            {
              id: 2,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Milk",
            },
            {
              id: 3,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Food",
            },
          ],
        },
        {
          id: 4,
          text: "Books",
          subtopics: [
            {
              id: 1,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Thriller",
            },
            {
              id: 2,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Horror",
            },
            {
              id: 3,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Adventure",
            },
          ],
        },
        {
          id: 5,
          text: "Computers",
          subtopics: [
            {
              id: 1,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Desktop",
            },
            {
              id: 2,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Laptop",
            },
            {
              id: 3,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Tablet",
            },
          ],
        },
        {
          id: 6,
          text: "Smartphone",
          subtopics: [
            {
              id: 1,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "LG",
            },
            {
              id: 2,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Samsung",
            },
            {
              id: 3,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Huawei",
            },
          ],
        },
        {
          id: 7,
          text: "Apple",
          subtopics: [
            {
              id: 1,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Iphone",
            },
            {
              id: 2,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Macbook",
            },
            {
              id: 3,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Ipad",
            },
          ],
        },
        {
          id: 8,
          text: "Dogs",
          subtopics: [
            {
              id: 1,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Food",
            },
            {
              id: 2,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Toys",
            },
            {
              id: 3,
              link: "https://vuejs.org/v2/api/#v-bind",
              text: "Clothes",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.png$/);
      return images("./" + pic);
    },
    showSuggestions: function() {
      const suggestions = document.querySelector(".suggestions");
      const classes = suggestions.classList;
      !classes.contains("show_suggestions")
        ? classes.add("show_suggestions")
        : classes.remove("show_suggestions");
    },
  },
  computed: {
    filteredList() {
      if (this.search.length > 0) {
        return this.options.filter((option) => {
          return option.subtopics.some((subtopic) => {
            return subtopic.text
              .toLowerCase()
              .includes(this.search.toLowerCase());
          });
        });
      } else {
        return this.options;
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  background-color: #131921;
  color: white;
  padding: 5px;
}

.search-form {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.logo {
  width: 50px;
  height: 50px;
  padding: 2px 35px 0px 15px;
  cursor: pointer;
}

.container-form {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 70px;
}
.select {
  padding: 12px;
  border: 1px solid #ccc;
  width: auto;
  border-right-width: 10px;
  border-radius: 4px 0 0 4px;
  background-color: rgb(202, 202, 202);
  margin: 6px 0 16px 0;
  cursor: pointer;
}
.selected:hover {
  opacity: 0.8;
}
.lens {
  width: 65px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0;
  border-right: 0;
  background-color: #ff8c00;
  margin-top: 6px;
  margin-bottom: 16px;
  cursor: pointer;
}

.suggestions {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  max-width: 500px;
  top: 58px;
  border: 2px solid #ff8c00;
  background-color: white;
  color: black;
  line-height: 1.5em;
  z-index: 99999;
  border-radius: 0 5% 5% 5%;
  transition-duration: 2s;
}

.suggestions_topic {
  display: flex;
  flex-direction: column;
  padding: 20px 15px 0 15px;
  font-weight: bold;
}

.suggestions_topic_subtopic {
  font-weight: normal;
  color: black;
  cursor: pointer;
  text-decoration: none;
}

.suggestions_topic_subtopic:hover {
  color: #ff8c00;
}

.show_suggestions {
  visibility: visible;
  opacity: 100%;
}

@media only screen and (max-width: 600px) {
  .select_responsive {
    display: none;
  }

  .search-form {
    border-radius: 4px 0 0 4px;
  }
}
</style>
