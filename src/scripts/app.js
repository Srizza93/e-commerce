import "../styles/style.css";

import searchBar from "./search-bar";
import "../styles/search-bar.css";

import navigation from "./navigation";

import subNav from "./sub-nav";
import "../styles/sub-nav.css";

import pageContent from "./page-content";
import "../styles/page-content.css";

import mount from "./mount";

import Vue from "vue";
import Footer from "../vue/Footer.vue";

import searchComponent from "../vue/Search-bar.vue";

import navigationBar from "../vue/Navigation-menu.vue";

document.body.appendChild(searchBar());
document.body.appendChild(navigation());
document.body.appendChild(subNav());
document.body.appendChild(pageContent());
document.body.appendChild(mount());

new Vue({
  el: ".footer",
  render: (a) => a(Footer),
});

new Vue({
  el: ".navigation-bar",
  render: (a) => a(navigationBar),
});

new Vue({
  el: ".container-form",
  render: (a) => a(searchComponent),
});
