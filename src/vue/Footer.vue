<template>
<div class="footer">
  <ul class="footer_ul">
    <li
    v-for="topic in locations"
    :key="topic.text" 
    class="footer_ul_li"
    > 
      <a 
      class="footer_ul_li_link"
      :href="topic.link"
        >{{topic.text}}
      </a>
    </li>
  </ul>
  <ul class="footer_ul">
    <li
    v-for="topic in mainProducts"
    :key="topic.text" 
    class="footer_ul_li"
    >
      <a 
      class="footer_ul_li_link"
      :href="topic.link"
        >{{topic.text}}
      </a>
    </li>
  </ul>
  <ul class="footer_ul">
    <li 
      v-for="topic in company"
      :key="topic.text" 
      class="footer_ul_li">
        <a 
        class="footer_ul_li_link"
        :href="topic.link"
        >{{topic.text}}
        </a>
    </li>
  </ul>
  <ul class="footer_ul">
    <li
    v-for="topic in general"
    :key="topic.text" 
    class="footer_ul_li"
    >
      <a 
      class="footer_ul_li_link"
      :href="topic.link"
        >{{topic.text}}
      </a>
    </li>
  </ul>
  <ul class="footer_ul">
    <li
    v-for="topic in news"
    :key="topic.text" 
    class="footer_ul_li"
    >
      <a 
      class="footer_ul_li_link"
      :href="topic.link"
        >{{topic.text}}
      </a>
    </li>
  </ul>
</div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #232f3e;
  text-align: center;
}

.footer_ul {
  padding-right: 40px;
}

.footer_ul_li {
  list-style: none;
  line-height: 23px;
}

.footer_ul_li_link {
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-weight: 400;
}

.footer_ul_li_link:hover {
  color: orange;
}
</style>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      locations:  [
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Countries'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Regions'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Cities'
        }
      ],
      mainProducts:  [
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Computers'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Home'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Food'
        }
      ],
      company:  [
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'About us'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Careers'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'World'
        }
      ],
      general:  [
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Reviews'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Partners'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Discounts'
        }
      ],
      news:  [
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'COVID'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Growth'
        },
        { 
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Plans'
        }
      ]
    }
  }
}
</script>