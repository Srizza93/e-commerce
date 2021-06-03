<template>
  <div class="app-root">
    <search-bar />
    <navigation-menu />
    <Banner />
    <Purchase />
    <Footer />
  </div>
</template>

<script>
  import SearchBar from '../vue/SearchBar.vue';
  import NavigationMenu from '../vue/NavigationMenu.vue';
  import Banner from '../vue/Banner.vue';
  import Purchase from '../vue/Purchase-folder/Purchase.vue';
  import Footer from '../vue/Footer.vue';
  export default {
    name: "ResearchApp",
    components: {
      SearchBar,
      NavigationMenu,
      Banner,
      Purchase,
      Footer
    }
  }
</script>

<style scoped>
.app-root {
  display: flex;
  flex-direction: column;
}
</style>