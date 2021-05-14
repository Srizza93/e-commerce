import "../styles/style.css";

import mount from "./mount";

import Vue from "vue";

import App from "../vue/App.vue"

document.body.appendChild(mount());

new Vue({
  el: ".app-root",
  render: (a) => a(App),
});
