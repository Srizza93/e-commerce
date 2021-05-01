import '../styles/style.css';

import searchBar from './search-bar';
import '../styles/search-bar.css';

import navigation from './navigation';
import '../styles/navigation.css';

import subNav from './sub-nav';
import '../styles/sub-nav.css';

import pageContent from './page-content';
import '../styles/page-content.css';

import mount from './mount'

import Vue from 'vue';
import Footer from '../vue/Footer.vue';

import searchComponent from '../vue/Search-bar.vue';

document.body.appendChild(searchBar());
document.body.appendChild(navigation());
document.body.appendChild(subNav());
document.body.appendChild(pageContent());
document.body.appendChild(mount());

new Vue({
  el: '.footer',
  render: a => a(Footer)
})

new Vue({
  el: '.container-form',
  render: a => a(searchComponent)
})
