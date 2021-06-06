import "../styles/style.css";

import mount from "./mount";

import Vue from "vue";

import CartApp from "../vue/CartApp.vue";

document.body.appendChild(mount());

new Vue({
  el: ".app-root",
  render: (a) => a(CartApp),
});
