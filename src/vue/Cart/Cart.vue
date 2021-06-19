<template>
  <div class="cart-container">
    <a href="./research.html" class="back-to-search">
      ❮
    </a>
    <div class="cart-container_no-products">
      <h3>There are no products in your cart</h3>
      <a
        class="cart-container_no-products_back-to-search"
        href="./research.html"
        >Please go back to search</a
      >
    </div>
    <cart-product
      v-for="product in products"
      :key="product.id + product.text"
      :pid="product.id"
      :id="product.id"
      :text="product.text"
      :image="product.image"
      :description="product.description"
      :reviews="product.reviews"
      :brand="product.brand"
      :price="product.price"
      :quantity="product.quantity"
      :trash-image="trash.link"
      :trash-alt="trash.alt"
      @deleteItem="deleteProduct"
    />
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
import CartProduct from "./CartProduct.vue";

export default {
  name: "Cart",
  components: { CartProduct },
  data() {
    return {
      products: [
        {
          id: 1,
          text: "Soccer ball",
          image: "ball.jpeg",
          description: "Nike Sport, white and blue",
          price: 120.99,
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
          price: 145.99,
          range: "101 to 200€",
          reviews: "Bad",
          brand: "Technics",
          quantity: 3,
          stock: 1,
        },
      ],
      trash: {
        id: 1,
        link: "trash.png",
        alt: "trash",
      },
    };
  },
  props: ["pid"],
  methods: {
    totalPrice() {
      return this.products.reduce((accumulator, product) => {
        var price = product.price;
        return price * product.quantity + accumulator;
      }, 0);
    },
    deleteProduct(item) {
      const product = item.event.currentTarget.closest(
        ".cart-container_products_product"
      );
      const productId = Number(product.getAttribute("pid"));
      const paymentDetails = document.querySelector(
        ".cart-container_payment-details"
      );
      const backToSearch = document.querySelector(".back-to-search");
      const noProdMessage = document.querySelector(
        ".cart-container_no-products"
      );
      product.classList.add("delete-product");
      this.products = this.products.filter((product) => {
        return product.id !== productId;
      });
      if (this.totalPrice() === 0) {
        paymentDetails.classList.add("delete-product");
        backToSearch.classList.add("back-to-search-show");
        noProdMessage.classList.add("cart-container_no-products_show");
      }
    },
    openPayment() {
      const alt = this.products.map((product) => {
        return product.text;
      });
      const price = alt.length > 1 ? this.totalPrice() : this.products[0].price;
      var quantity = this.products.reduce((prevVal, currentVal) => {
        return prevVal + currentVal.quantity;
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
  width: 250px;
  height: 250px;
  margin: 0 25px;
}
.cart-container_products_product_info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  height: 400px;
  padding: 25px;
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
  border-radius: 15px;
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
.container-trash-icon {
  margin: 10px;
}
.container-trash-icon_icon {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.delete-product {
  display: none;
}
.back-to-search {
  display: none;
  position: fixed;
  top: 50%;
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
.cart-container_no-products {
  display: none;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.cart-container_no-products_show {
  display: flex;
}
.cart-container_no-products_back-to-search {
  color: black;
  font-weight: bold;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #ff8c00;
  text-decoration: none;
}
.cart-container_no-products_back-to-search:hover {
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
