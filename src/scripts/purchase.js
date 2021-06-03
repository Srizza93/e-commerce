import "../styles/style.css";

import mount from "./mount";

import Vue from "vue";

import PurchaseApp from "../vue/PurchaseApp.vue";

document.body.appendChild(mount());

new Vue({
  el: ".app-root",
  render: (a) => a(PurchaseApp),
});
