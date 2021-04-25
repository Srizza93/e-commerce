import Vue from 'vue';
import App from './App.vue';

import './styles/style.css';

import searchBar from './scripts/search-bar';
import './styles/search-bar.css';

import navigation from './scripts/navigation';
import './styles/navigation.css';

import subNav from './scripts/sub-nav';
import './styles/sub-nav.css';

import pageContent from './scripts/page-content';
import './styles/page-content.css';

<<<<<<< HEAD
import mount from './scripts/mount'

import Vue from 'vue';
import Footer from './vue/Footer.vue';

import searchComponent from './vue/Search-bar.vue';
=======
import footer from './scripts/footer'

// import './image-component';
>>>>>>> 2f2c11887b22280120d52e3dece7ee91949eecec

document.body.appendChild(searchBar());
document.body.appendChild(navigation());
document.body.appendChild(subNav());
document.body.appendChild(pageContent());
<<<<<<< HEAD
document.body.appendChild(mount());

new Vue({
  el: '.footer',
  render: a => a(Footer)
})

new Vue({
  el: '.container-form',
  render: a => a(searchComponent)
})
=======
document.body.appendChild(footer());

new Vue({
  el: '.footer',
  render: a => a(App)
})
>>>>>>> 2f2c11887b22280120d52e3dece7ee91949eecec
