<template>
  <div class="cart-container">
    <div class="cart-container_products">
      <div
        class="cart-container_products_product"
        v-for="product in products"
        :key="product.id + product.text"
      >
        <img
          class="cart-container_products_product_img"
          :alt="product.text"
          :src="getImgUrl(product.image)"
        />
        <div class="cart-container_products_product_info">
          <h3 class="cart-container_products_product_info_title">
            {{ product.text }}
          </h3>
          <span class="cart-container_products_product_info_span">
            {{ product.description }}
          </span>
          <span class="cart-container_products_product_info_span">
            {{ product.reviews }}
          </span>
          <span class="cart-container_products_product_info_span">
            {{ product.brand }}
          </span>
        </div>
        <div
          class="cart-container_products_product_info cart-container_products_product_payment"
        >
          <h3 class="cart-container_products_product_info_title">Price</h3>
          <span class="cart-container_products_product_info_span">
            {{ product.price }}
          </span>
          <h3 class="cart-container_products_product_info_title">Quantity</h3>
          <span class="cart-container_products_product_info_span">
            {{ product.quantity }}
          </span>
          <h3 class="cart-container_products_product_info_title">Total</h3>
          <span class="cart-container_products_product_info_span">
            {{ totalProduct(product.price, product.quantity) }}
          </span>
        </div>
      </div>
    </div>
    <div class="cart-container_products_product cart-container_payment-details">
      <h2
        class="cart-container_products_product_info_title cart-container_products_product_info_span"
      >
        Total price
      </h2>
      <span class="cart-container_products_product_info_span">
        {{ totalPrice() }}€</span
      >
      <span class="payment-box_taxes cart-container_products_product_info_span"
        >+ €26.34 Shipping and Import Fees outside of France</span
      >
      <button class="payment-box_button" @click="openPayment()">
        Buy Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      products: [
        {
          id: 1,
          text: "Soccer ball",
          image: "ball.jpeg",
          description: "Nike Sport, white and blue",
          price: "120.99€",
          range: "101 to 200€",
          reviews: "Good",
          brand: "Nike",
          quantity: 2,
          stock: 23,
        },
        {
          id: 2,
          text: "Turntable",
          image: "turntable2.jpeg",
          description: "Turntables",
          price: "145.99€",
          range: "101 to 200€",
          reviews: "Bad",
          brand: "Technics",
          quantity: 3,
          stock: 1,
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context(
        "/Users/martina/e-commerce/src/images",
        false,
        /\.jpeg$/
      );
      return images("./" + pic);
    },
    totalProduct(price, quantity) {
      price = Number(price.substring(0, price.indexOf("€")));
      return price * quantity;
    },
    totalPrice() {
      return this.products.reduce((accumulator, product) => {
        var price = product.price;
        price = Number(price.substring(0, price.indexOf("€")));
        return price * product.quantity + accumulator;
      }, 0);
    },
    openPayment() {
      const price = this.totalPrice();
      const alt = this.products.map((product) => {
        return product.text;
      });
      const quantity = this.products.reduce((prevVal, currentVal) => {
        return prevVal + Number(currentVal.quantity);
      }, 0);
      window.open(
        "./payment.html?final-details=" +
          encodeURI(alt + "-" + price + "-" + quantity)
      );
    },
  },
};
</script>

<style>
.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  padding: 25px;
}
.cart-container_products {
  display: flex;
  flex-direction: column;
  margin: 25px;
}
.cart-container_products_product {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  margin-bottom: 10px;
  border: 1px solid #ddd;
}
.cart-container_products_product_img {
  width: 300px;
  height: 300px;
  margin: 0 25px;
}
.cart-container_products_product_info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  height: 400px;
  padding: 50px;
  border-right: 1px solid #ddd;
}
.cart-container_products_product_info_title {
  margin: 0;
}
.cart-container_products_product_info_span {
  padding: 25px 0;
}
.cart-container_products_product_payment {
  border: 0;
}
.cart-container_payment-details {
  align-items: baseline;
  justify-content: space-evenly;
  border: 0;
}
.payment-box_taxes {
  color: #565959;
}
.payment-box_button {
  width: 200px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #ff8c00;
  cursor: pointer;
  color: black;
  text-align: center;
  padding: 10px;
}
.payment-box_button:hover {
  opacity: 0.7;
}
@media only screen and (max-width: 720px) {
  .cart-container_products_product {
    flex-direction: column;
  }
  .cart-container_payment-details {
    margin: 0 50px 50px 50px;
  }
  .cart-container_products_product_img {
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
  }
  .cart-container_products_product_info {
    padding: 0;
    border: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .payment-box_button {
    width: auto;
  }
}
@media only screen and (max-width: 320px) {
  .cart-container_products_product_img {
    width: 100%;
    height: auto;
  }
}
</style>
