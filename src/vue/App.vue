<template>
  <div>
    <SearchBar />
    <NavigationMenu />
    <Banner />
    <Home />
    <Footer />
  </div>
</template>

<script>
  import SearchBar from '../vue/SearchBar.vue';
  import NavigationMenu from '../vue/NavigationMenu.vue';
  import Banner from '../vue/Banner.vue';
  import Home from '../vue/HomeContent.vue';
  import Footer from '../vue/Footer.vue';
  export default {
    name: "App",
    components: {
      SearchBar,
      NavigationMenu,
      Banner,
      Home,
      Footer
    }
  }
</script>