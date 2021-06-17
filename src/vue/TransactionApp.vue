<template>
  <div class="app-root">
    <div class="loading">
      Processing the payment<span class="loader__dot">.</span
      ><span class="loader__dot">.</span><span class="loader__dot">.</span>
    </div>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "TransactionApp",
};
</script>

<style scoped>
.app-root {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(255, 140, 0);
  background: radial-gradient(
    circle,
    rgba(255, 140, 0, 1) 72%,
    rgba(19, 25, 33, 1) 100%
  );
}
.loading {
  color: #232f3e;
  margin: 25px;
  font-size: 25px;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #232f3e;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes blink {
  50% {
    color: transparent;
  }
}
.loader__dot {
  animation: 1s blink infinite;
}
.loader__dot:nth-child(2) {
  animation-delay: 250ms;
}
.loader__dot:nth-child(3) {
  animation-delay: 500ms;
}

@media only screen and (max-width: 600px) {
  .loading {
    font-size: 16px;
  }
}
</style>
