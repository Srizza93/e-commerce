import '../styles/style.css';

import searchBar from './search-bar';
import '../styles/search-bar.css';

import navigation from './navigation';
import '../styles/navigation.css';

import subNav from './sub-nav';
import '../styles/sub-nav.css';

import Vue from 'vue';

import navigationBar from '../vue/Navigation-menu.vue';

import searchComponent from '../vue/Search-bar.vue';

import mountResearch from './mount-research';

import Results from '../vue/Results.vue';

import Footer from '../vue/Footer.vue';

document.body.appendChild(searchBar());
document.body.appendChild(navigation());
document.body.appendChild(subNav());
document.body.appendChild(mountResearch());

new Vue({
  el: '.navigation-bar',
  render: a => a(navigationBar)
})

new Vue({
  el: '.container-form',
  render: a => a(searchComponent)
})

new Vue({
  el: '.results',
  render: a => a(Results)
})

new Vue({
  el: '.footer',
  render: a => a(Footer)
})