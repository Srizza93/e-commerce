<template v-for="id in message">
  <div class="footer">
    {{ message.id }}
  </div>
</template>

<style scoped src='./styles/footer.css'></style>

<script>
export default {
  name: 'App',
  props: ['Hello'],
  data() {
    return {
      message: {
        id:'You loaded this page on ' + new Date().toLocaleString()},
        id: 'hello',
        id: 'here'
    }
  }
};
</script>
