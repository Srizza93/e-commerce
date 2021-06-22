<template>
  <div class="app-root">
    <a
      class="back-to-search"
      href="./research.html"
    >
      ❮
    </a>
    <div class="transaction">
      <div class="transaction_loading-message">
        Processing the payment<span class="loader__dot">.</span
        ><span class="loader__dot">.</span><span class="loader__dot">.</span>
      </div>
      <div class="transaction_loader"></div>
    </div>
    <div class="successful-payment">
      <h1> {{ outcome }}</h1>
      <div class="successful-payment_message">
        <p> {{ message1 }}</p>
        <p> {{ message2 }} {{ email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionApp",
  data() {
    return {
      outcome: 'Payment successful!',
      message1: 'Congratulations! The payment has been processed.',
      message2: 'You will shortly receive a confirmation email to ',
      email: this.getEmail(),
    };
  },
  mounted() {
    this.successfullOrFailed();
    setTimeout(function() {
      var appRoot = document.querySelector(".app-root");
      var loading = document.querySelector(".transaction");
      var successful = document.querySelector(".successful-payment");
      var backToSearch = document.querySelector(".back-to-search");
      appRoot.classList.add("background-root");
      loading.classList.add("payment-processed");
      successful.classList.add("successful-payment-show");
      backToSearch.classList.add("back-to-search-show");
    }, 5000);
  },
  methods: {
    successfullOrFailed() {
      var chance = Math.random();
      if (chance >= 0.5) {
        this.outcome = 'Payment failed',
        this.message1 = `We're sorry for any inconvenience`,
        this.message2 = 'Please try again';
        this.email = '';
      }
    },
    getEmail() {
      const urlParams = new URLSearchParams(window.location.search);
      var email = urlParams.get("email");
      return email;
    },
  },
};
</script>

<style scoped>
.app-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  height: 100vh;
  background: rgb(255, 140, 0);
  background: radial-gradient(
    circle,
    rgba(255, 140, 0, 1) 72%,
    rgba(19, 25, 33, 1) 100%
  );
}
.background-root {
  background: none;
}
.transaction {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.transaction_loading-message {
  color: #232f3e;
  margin: 25px;
  font-size: 25px;
}
.transaction_loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #232f3e;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
.successful-payment {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border: 2px solid #ff8c00;
}
.successful-payment-show {
  display: flex;
}
.successful-payment_message {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment-processed {
  display: none;
}
.back-to-search {
  display: none;
  position: fixed;
  left: 0;
  margin: 25px 0;
  padding: 8px;
  border: none;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: #ff8c00;
  cursor: pointer;
}
.back-to-search-show {
  display: block;
}
.back-to-search:hover {
  opacity: 0.7;
}
/* Safari */
@keyframes spin {
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
  .transaction_loading-message {
    font-size: 20px;
    margin: 15px;
  }
  .back-to-search {
    top: 25px;
  }
}
</style>
