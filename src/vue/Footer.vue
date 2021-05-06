<template>
<div class="footer">
  <ul class="footer_ul">
    <li
    v-for="topic in locations"
    :key="'locations-' + topic.id"
    class="footer_ul_li">
      <a
      class="footer_ul_li_link"
      :href="topic.link">
        {{ topic.text }}
      </a>
    </li>
  </ul>
  <ul class="footer_ul">
    <li
    v-for="topic in mainProducts"
    :key="'mainProducts-' + topic.id"
    class="footer_ul_li">
      <a
      class="footer_ul_li_link"
      :href="topic.link">
        {{ topic.text }}
      </a>
    </li>
  </ul>
  <ul class="footer_ul">
    <li
      v-for="topic in company"
      :key="'company-' + topic.id"
      class="footer_ul_li">
        <a
        class="footer_ul_li_link"
        :href="topic.link">
          {{ topic.text }}
        </a>
    </li>
  </ul>
  <ul class="footer_ul">
    <li
    v-for="topic in general"
    :key="'general-' + topic.id"
    class="footer_ul_li">
      <a
      class="footer_ul_li_link"
      :href="topic.link">
        {{ topic.text }}
      </a>
    </li>
  </ul>
  <ul class="footer_ul">
    <li
    v-for="topic in news"
    :key="'news-' + topic.id"
    class="footer_ul_li">
      <a
      class="footer_ul_li_link"
      :href="topic.link">
        {{ topic.text }}
      </a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      locations:  [
        {
          id: 1,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Countries'
        },
        {
          id: 2,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Regions'
        },
        {
          id: 3,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Cities'
        }
      ],
      mainProducts:  [
        {
          id: 1,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Computers'
        },
        {
          id: 2,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Home'
        },
        {
          id: 3,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Food'
        }
      ],
      company:  [
        {
          id: 1,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'About us'
        },
        {
          id: 2,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Careers'
        },
        {
          id: 3,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'World'
        }
      ],
      general:  [
        {
          id: 1,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Reviews'
        },
        {
          id: 2,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Partners'
        },
        {
          id: 3,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Discounts'
        }
      ],
      news:  [
        {
          id: 1,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'COVID'
        },
        {
          id: 2,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Growth'
        },
        {
          id: 3,
          link: 'https://vuejs.org/v2/api/#v-bind',
          text: 'Plans'
        }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  margin-top: 30px;
  height: 100px;
  width: 100%;
  background-color: #232f3e;
  text-align: center;
}

.footer_ul {
  padding-right: 30px;
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

@media only screen and (max-width: 600px) {
  .footer {
    flex-wrap: wrap;
    height: 100%;
    margin: 0;
  }
}
</style>