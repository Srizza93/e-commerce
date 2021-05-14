import "../styles/style.css";

import mountResearch from "./mount-research";

import Vue from "vue";

import ResearchApp from "../vue/ResearchApp.vue";

document.body.appendChild(mountResearch());

new Vue({
  el: ".app-root",
  render: (a) => a(ResearchApp),
});
