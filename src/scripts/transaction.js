import "../styles/style.css";

import mount from "./mount";

import Vue from "vue";

import TransactionApp from "../vue/TransactionApp.vue";

document.body.appendChild(mount());

new Vue({
  el: ".app-root",
  render: (a) => a(TransactionApp),
});
