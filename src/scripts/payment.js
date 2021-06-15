import "../styles/style.css";

import mount from "./mount";

import Vue from "vue";

import PaymentApp from "../vue/PaymentApp.vue";

document.body.appendChild(mount());

new Vue({
  el: ".app-root",
  render: (a) => a(PaymentApp),
});
