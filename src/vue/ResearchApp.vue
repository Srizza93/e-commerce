<template>
  <div>
    <SearchBar />
    <NavigationMenu />
    <Banner />
    <Results />
    <Footer />
  </div>
</template>

<script>
  import SearchBar from '../vue/SearchBar.vue';
  import NavigationMenu from '../vue/NavigationMenu.vue';
  import Banner from '../vue/Banner.vue';
  import Results from '../vue/Results.vue';
  import Footer from '../vue/Footer.vue';
  export default {
    name: "App",
    components: {
      SearchBar,
      NavigationMenu,
      Banner,
      Results,
      Footer
    }
  }
</script>