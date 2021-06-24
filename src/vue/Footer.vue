<template>
  <div class="footer">
    <div class="footer_links-container">
      <ul class="footer_ul">
        <li
          v-for="topic in locations"
          :key="'locations-' + topic.id"
          class="footer_ul_li"
        >
          <a class="footer_ul_li_link" :href="topic.link">
            {{ topic.text }}
          </a>
        </li>
      </ul>
      <ul class="footer_ul">
        <li
          v-for="topic in mainProducts"
          :key="'mainProducts-' + topic.id"
          class="footer_ul_li"
        >
          <a class="footer_ul_li_link" :href="topic.link">
            {{ topic.text }}
          </a>
        </li>
      </ul>
      <ul class="footer_ul">
        <li
          v-for="topic in company"
          :key="'company-' + topic.id"
          class="footer_ul_li"
        >
          <a class="footer_ul_li_link" :href="topic.link">
            {{ topic.text }}
          </a>
        </li>
      </ul>
      <ul class="footer_ul">
        <li
          v-for="topic in general"
          :key="'general-' + topic.id"
          class="footer_ul_li"
        >
          <a class="footer_ul_li_link" :href="topic.link">
            {{ topic.text }}
          </a>
        </li>
      </ul>
      <ul class="footer_ul">
        <li
          v-for="topic in news"
          :key="'news-' + topic.id"
          class="footer_ul_li"
        >
          <a class="footer_ul_li_link" :href="topic.link">
            {{ topic.text }}
          </a>
        </li>
      </ul>
    </div>
    <div class="footer_copyright">
      <span>Copyright © 1993–2021 e-commerce. All rights reserved</span>
      <span
        >e-commerce is the world leader in online purchases and related
        services.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      locations: [
        {
          id: 1,
          link: "./research.html",
          text: "Countries",
        },
        {
          id: 2,
          link: "./research.html",
          text: "Regions",
        },
        {
          id: 3,
          link: "./research.html",
          text: "Cities",
        },
      ],
      mainProducts: [
        {
          id: 1,
          link: "./research.html",
          text: "Computers",
        },
        {
          id: 2,
          link: "./research.html",
          text: "Home",
        },
        {
          id: 3,
          link: "./research.html",
          text: "Food",
        },
      ],
      company: [
        {
          id: 1,
          link: "./research.html",
          text: "About us",
        },
        {
          id: 2,
          link: "./research.html",
          text: "Careers",
        },
        {
          id: 3,
          link: "./research.html",
          text: "World",
        },
      ],
      general: [
        {
          id: 1,
          link: "./research.html",
          text: "Reviews",
        },
        {
          id: 2,
          link: "./research.html",
          text: "Partners",
        },
        {
          id: 3,
          link: "./research.html",
          text: "Discounts",
        },
      ],
      news: [
        {
          id: 1,
          link: "./research.html",
          text: "COVID",
        },
        {
          id: 2,
          link: "./research.html",
          text: "Growth",
        },
        {
          id: 3,
          link: "./research.html",
          text: "Plans",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #232f3e;
  color: white;
}

.footer_links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  margin-top: 25px;
  text-align: center;
  overflow-y: hidden;
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

.footer_copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

@media only screen and (max-width: 600px) {
  .footer {
    flex-wrap: wrap;
    height: 100%;
    margin: 0;
  }
  .footer_links-container {
    flex-direction: column;
  }
}
</style>
