<template>
  <div class="app-root">
    <search-bar />
    <navigation-menu />
    <Banner />
    <Cart />
    <Footer />
  </div>
</template>

<script>
  import SearchBar from '../vue/SearchBar.vue';
  import NavigationMenu from '../vue/NavigationMenu.vue';
  import Banner from '../vue/Banner.vue';
  import Cart from '../vue/Cart/Cart.vue';
  import Footer from '../vue/Footer.vue';
  export default {
    name: "ResearchApp",
    components: {
      SearchBar,
      NavigationMenu,
      Banner,
      Cart,
      Footer
    }
  }
</script>