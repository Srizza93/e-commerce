import "../styles/style.css";

import mount from "./mount";

import Vue from "vue";

import ResearchApp from "../vue/ResearchApp.vue";

document.body.appendChild(mount());

new Vue({
  el: ".app-root",
  render: (a) => a(ResearchApp),
});
