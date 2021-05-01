<template>
  <div class="container-form">
    <select class="select selected">
      <option 
      v-for="option in options"
      :key="option.text" >
        {{ option.text }}
      </option>
    </select>
    <input v-model="search" v-on:click="showSuggestions" type="search" 
    placeholder="Write something..." class="search-form">
    <input type="submit" value="Search" class="lens selected">
    <div class="suggestions"> 
      <span 
      class="suggestions_topic"
      v-for="option in filteredList"
      :key="option.text" >
        {{ option.text }}
        <a
        class="suggestions_topic_subtopic"
        v-for="subtopic in option.subtopics"
        :key="subtopic.text"
        :href="subtopic.link"
        > 
        {{ subtopic.text }}
        </a>
      </span>
    </div>
  </div>
</template>

<style scoped>
.container-form {
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 70px;
}

.select {
  width: auto;
  padding: 12px;
  border: 1px solid #ccc;
  border-right-width: 10px;
  border-radius: 4px 0 0 4px;
  background-color: rgb(202, 202, 202);
  margin: 6px 0 16px 0;
  cursor: pointer;
}

.selected:hover {
  opacity: .8;
}

.lens {
  width: 65px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0;
  border-right: 0;
  background-color: orange;
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
  border: 2px solid orange;
  background-color: white;
  color: black;
  line-height: 1.5em;
  z-index: 99999;
  border-radius: 5%;
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
  color: orange;
}

.show_suggestions {
  visibility: visible;
  opacity: 100%;
}
</style>

<script>
export default {
  name: 'Search-bar',
  methods: {
    showSuggestions: function () {
      const suggestions = document.querySelector('.suggestions');
      const classes = suggestions.classList;
      !classes.contains('show_suggestions') ? classes.add('show_suggestions')
      : classes.remove('show_suggestions');
    }
  },
  computed: {
    filteredList() {
      if (this.search.length > 0) {
        return this.options.filter(option => {
          return option.subtopics.some(subtopic => {
            return subtopic.text.toLowerCase().includes(this.search.toLowerCase());
          });
        })
      }
      else {
        return this.options;
      }
    }
  },
  data() {
    return {
      search: [],
      options: [
        { 
          text: 'Tech',
          subtopics: [
            { 
              link: './research.html',
              text: 'TV' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Speakers' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Earphones'
            }
          ]
        },
        { 
          text: 'Arts',
          subtopics: [
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Colours' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Pictures' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Music'
            }
          ] 
        },
        { 
          text: 'Baby',
          subtopics: [
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Toys' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Milk' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Food'
            }
          ]
        },
        { 
          text: 'Books',
          subtopics: [
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Thriller' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Horror'
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Adventure'
            }
          ]
        },
        { 
          text: 'Computers',
          subtopics: [
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Desktop'
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Laptop' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Tablet'
            }
          ]
        },
        { 
          text: 'Smartphone',
          subtopics: [
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'LG' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Samsung' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Huawei'
            }
          ]
          },
        { 
          text: 'Apple',
          subtopics: [
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Iphone' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Macbook' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Ipad'
            }
          ]
        },
        { 
          text: 'Dogs',
          subtopics: [
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Food' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Toys' 
            },
            { 
              link: 'https://vuejs.org/v2/api/#v-bind',
              text: 'Clothes'
            }
          ] 
        }
      ]
    }
  }
}
</script>
