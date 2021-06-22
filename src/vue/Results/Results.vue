<template>
  <div class="results-contaienr">
    <div class="results">
      <div class="filters_button">
        <button
          class="filters_button_text"
          @click="openCloseFiltersOnSmallScreens"
        >
          Filter
        </button>
      </div>
      <div class="filters">
        <div class="filters_button_close">
          <span
            class="filters_button_close_x"
            @click="openCloseFiltersOnSmallScreens"
          >
            x
          </span>
        </div>
        <h3 class="filters_by filters_box">Filter by:</h3>
        <div
          v-for="filter in filteredFilters"
          :key="'filter-' + filter.topic + filter.id"
          class="filters_box"
        >
          <h4 class="filters_titles">{{ filter.topic }}</h4>
          <Filters
            v-for="filter1 in filter.subtopics"
            :key="'subfilter-' + filter1.text + filter1.id"
            :id="filter1.id"
            :topic="filter.topic"
            :value="filter1.text"
            :items-with-filter="
              productsForFilter[shownFilters.indexOf(filter1.text)]
            "
            @updateShownItemsAndFilters="filterGroupOfFilters(filter1.text)"
          />
        </div>
      </div>
      <div class="products">
        <h2 class="products_count">
          {{ filteredProductsLength }} Product(s) Found
        </h2>
        <div class="products_container">
          <Products
            v-for="product in filteredProducts"
            :key="product.text + product.id"
            :id="product.id"
            :text="product.text"
            :image="product.image"
            :brand="product.brand"
            :description="product.description"
            :price="product.price"
            :reviews="product.reviews"
            @hideResultsAndShowPurchase="buyProduct(product)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "../Results/Filters.vue";
import Products from "../Results/Products.vue";
export default {
  name: "Results",
  event: "click",
  components: { Filters, Products },
  data() {
    return {
      tickedFilters: [],
      filters: [
        {
          id: 1,
          topic: "Reviews",
          subtopics: [
            {
              id: 1,
              text: "5",
            },
            {
              id: 2,
              text: "4",
            },
            {
              id: 3,
              text: "3",
            },
            {
              id: 4,
              text: "2",
            },
            {
              id: 5,
              text: "1",
            },
          ],
        },
        {
          id: 2,
          topic: "Price",
          subtopics: [
            {
              id: 1,
              text: "0 to 25€",
            },
            {
              id: 2,
              text: "26 to 50€",
            },
            {
              id: 3,
              text: "51 to 100€",
            },
            {
              id: 4,
              text: "101 to 200€",
            },
            {
              id: 5,
              text: "+200€",
            },
          ],
        },
        {
          id: 3,
          topic: "Department",
          subtopics: [
            {
              id: 1,
              text: "Computer",
            },
            {
              id: 2,
              text: "Food",
            },
            {
              id: 3,
              text: "Garden",
            },
            {
              id: 4,
              text: "Beauty",
            },
            {
              id: 5,
              text: "Guitar",
            },
            {
              id: 6,
              text: "Shoes",
            },
            {
              id: 7,
              text: "Music",
            },
            {
              id: 8,
              text: "Home",
            },
            {
              id: 9,
              text: "Toys",
            },
          ],
        },
        {
          id: 4,
          topic: "Brands",
          subtopics: [
            {
              id: 1,
              text: "Nike",
            },
            {
              id: 2,
              text: "Gemco",
            },
            {
              id: 3,
              text: "Apple",
            },
            {
              id: 4,
              text: "Arventia",
            },
            {
              id: 5,
              text: "Kenzo",
            },
            {
              id: 6,
              text: "Sender",
            },
            {
              id: 7,
              text: "Disney",
            },
            {
              id: 7,
              text: "Lekker",
            },
            {
              id: 8,
              text: "Technics",
            },
          ],
        },
      ],
      products: [
        {
          id: 1,
          text: "Nike hj200",
          image: "shoes.jpeg",
          department: "Shoes",
          gallery: ["shoes.jpeg", "shoes2.jpeg", "shoes3.jpeg", "shoes4.jpeg"],
          description: "Jaguar, Red and white",
          price: "21.99€",
          range: "0 to 25€",
          reviews: "5",
          brand: "Nike",
          quantity: 3,
        },
        {
          id: 2,
          text: "Imac 120",
          image: "computer.jpeg",
          department: "Computer",
          gallery: [
            "computer.jpeg",
            "computer2.jpeg",
            "computer3.jpeg",
            "computer4.jpeg",
          ],
          description: "Mac 120, limited edition",
          price: "2199.00€",
          range: "+200€",
          reviews: "5",
          brand: "Apple",
          quantity: 9,
        },
        {
          id: 3,
          text: "Kenzo 2000",
          image: "guitar.jpeg",
          department: "Guitar",
          gallery: ["guitar.jpeg", "guitar3.jpeg", "guitar4.jpeg"],
          description: "Kenzo Music, Standard",
          price: "127.51€",
          range: "101 to 200€",
          reviews: "2",
          brand: "Kenzo",
          quantity: 7,
        },
        {
          id: 4,
          text: "Plants and flowers",
          image: "garden.jpeg",
          department: "Garden",
          gallery: [
            "garden.jpeg",
            "garden2.jpeg",
            "garden3.jpeg",
            "garden4.jpeg",
          ],
          description: "Roses, Violets",
          price: "29€",
          range: "26 to 50€",
          reviews: "3",
          brand: "Sender",
          quantity: 1,
        },
        {
          id: 5,
          text: "Country house",
          image: "home.jpeg",
          department: "Home",
          gallery: ["home.jpeg", "home2.jpeg", "home3.jpeg", "home4.jpeg"],
          description: "Gelderland area, 200mq",
          price: "68.75€",
          range: "51 to 100€",
          reviews: "5",
          brand: "Gemco",
          quantity: 3,
        },
        {
          id: 6,
          text: "Mini cars",
          image: "toys.jpeg",
          department: "Toys",
          gallery: ["toys.jpeg", "toys2.jpeg", "toys3.jpeg", "toys4.jpeg"],
          description: "+3 years, 1 piece",
          price: "31€",
          range: "26 to 50€",
          reviews: "1",
          brand: "Disney",
          quantity: 4,
        },
        {
          id: 7,
          text: "Cesar sandwich",
          image: "food.jpeg",
          department: "Food",
          gallery: ["food.jpeg", "food2.jpeg", "food4.jpeg"],
          description: "Salad, tomatoes, onion, cheese",
          price: "120€",
          range: "101 to 200€",
          reviews: "4",
          brand: "Lekker",
          quantity: 12,
        },
        {
          id: 8,
          text: "Red lipstich",
          image: "beauty.jpeg",
          department: "Beauty",
          gallery: ["beauty.jpeg", "beauty2.jpeg", "beauty3.jpeg"],
          description: "Color purple red, brilliant",
          price: "20€",
          range: "0 to 25€",
          reviews: "4",
          brand: "Arventia",
          quantity: 8,
        },
        {
          id: 9,
          text: "Macbook pro",
          image: "computers.jpeg",
          department: "Computer",
          gallery: [
            "computers.jpeg",
            "computers2.jpeg",
            "computers3.jpeg",
            "computers4.jpeg",
          ],
          description: "Macbook pro 120, 1kg",
          price: "199€",
          range: "101 to 200€",
          reviews: "5",
          brand: "Apple",
          quantity: 10,
        },
        {
          id: 10,
          text: "IMac",
          image: "mac.jpeg",
          department: "Computer",
          gallery: ["mac.jpeg", "mac2.jpeg", "mac3.jpeg"],
          description: "Processor Intel Core i5 2.7 GHz",
          price: "1299€",
          range: "+200€",
          reviews: "5",
          brand: "Apple",
          quantity: 9,
        },
        {
          id: 11,
          text: "Soccer ball",
          image: "ball.jpeg",
          department: "Toys",
          gallery: ["ball.jpeg", "ball2.jpeg", "ball3.jpeg"],
          description: "Nike Sport, white and blue",
          price: "120.99€",
          range: "101 to 200€",
          reviews: "4",
          brand: "Nike",
          quantity: 2,
        },
        {
          id: 12,
          text: "Technics 1200SK",
          image: "turntable2.jpeg",
          department: "Music",
          gallery: [
            "turntable.jpeg",
            "turntable2.jpeg",
            "turntable3.jpeg",
            "turntable4.jpeg",
          ],
          description: "Turntable, 1 piece",
          price: "145.99€",
          range: "101 to 200€",
          reviews: "1",
          brand: "Technics",
          quantity: 4,
        },
      ],
      selectedProduct: [],
    };
  },
  methods: {
    filterGroupOfFilters(filter) {
      if (this.tickedFilters.includes(filter)) {
        this.tickedFilters.splice(this.tickedFilters.indexOf(filter), 1);
      } else {
        this.tickedFilters.push(filter);
      }
    },
    openCloseFiltersOnSmallScreens() {
      const container = document.querySelector(".filters");
      const button = document.querySelector(".filters_button");
      container.classList.contains("open-filters")
        ? container.classList.remove("open-filters")
        : container.classList.add("open-filters");
      button.classList.contains("open-button")
        ? button.classList.remove("open-button")
        : button.classList.add("open-button");
    },
    buyProduct(product) {
      var productClicked =
        product.id +
        "-" +
        product.image +
        "-" +
        product.text +
        "-" +
        product.description +
        "-" +
        product.price +
        "-" +
        product.reviews +
        "-" +
        product.gallery +
        "-" +
        (product.quantity + 1);
      window.open("./purchase.html?product=" + encodeURI(productClicked));
    },
  },
  computed: {
    filteredFilters() {
      var shownProducts = [];
      this.filteredProducts.forEach((product) => {
        shownProducts = shownProducts.concat(Object.values(product));
      });
      if (this.tickedFilters.length > 0) {
        return this.filters
          .map((filter) => {
            return {
              id: filter.id,
              topic: filter.topic,
              subtopics: filter.subtopics.filter((subtopic) => {
                return shownProducts.includes(subtopic.text);
              }),
            };
          })
          .filter((filter) => {
            return filter.subtopics.length > 0;
          });
      }
      return this.filters;
    },
    filteredProducts() {
      if (this.tickedFilters.length > 0) {
        return this.products.filter((product) => {
          return (
            Object.values(product).some((subtopic) => {
              return this.tickedFilters.includes(subtopic);
            }) &&
            this.tickedFilters.every((filter) => {
              return Object.values(product).includes(filter);
            })
          );
        });
      }
      return this.products;
    },
    filteredProductsLength() {
      return this.filteredProducts.length;
    },
    shownFilters() {
      return this.filteredFilters
        .map((filter) => {
          return filter.subtopics.map((subtopic) => {
            return subtopic.text;
          });
        })
        .flat(1);
    },
    productsForFilter() {
      return this.shownFilters.map((filter) => {
        return Object.values(this.filteredProducts).reduce(
          (products, currentProduct) => {
            if (Object.values(currentProduct).includes(filter)) {
              return products + 1;
            }
            return products;
          },
          0
        );
      });
    },
  },
};
</script>

<style scoped>
.results {
  display: flex;
  flex-direction: row;
  min-height: 600px;
  background-color: #f5f5f5;
  padding: 50px 0 10px 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 24px;
}
.filters {
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  min-width: 225px;
  box-sizing: border-box;
  padding: 0 12px;
  border-right: 2px solid #ddd;
}

.filters_by {
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  border-radius: 5px 5px 0 0;
  margin: 0;
  padding: 10px 0 10px 10px;
}

.filters_box {
  border-bottom: 2px solid #ddd;
  border-left: 2px solid #ddd;
  border-right: 2px solid #ddd;
  padding-bottom: 25px;
}
.filters_titles {
  border-bottom: 2px solid #ddd;
  margin: 0 0 20px 0;
  padding: 10px 0 10px 10px;
}
.filters_button {
  display: none;
  background-color: #232f3e;
  justify-content: center;
  border-bottom: 1px solid black;
}

.filters_button_text {
  background-color: #232f3e;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
}
.filters_button_text:hover {
  opacity: 0.7;
}
.filters_button_close {
  display: none;
  justify-content: flex-end;
  margin: 0 5px 10px 0px;
}

.filters_button_close_x {
  border: 2px solid #ddd;
  background-color: #232f3e;
  color: #ddd;
  border-radius: 50%;
  padding: 0px 8px;
  cursor: pointer;
}
.filters_button_close_x:hover {
  opacity: 0.7;
}
.open-button {
  left: 215px;
}
.products {
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  margin-left: 25px;
  font-weight: 400;
}
.products_count {
  margin-top: 0;
  padding-left: 12px;
}
.products_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
@media only screen and (max-width: 600px) {
  .results {
    flex-direction: column;
    padding: 0;
  }
  .filters {
    display: none;
    flex-direction: column;
    position: fixed;
    justify-content: initial;
    overflow: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 12px 12px 0 12px;
    border: 0;
    background-color: white;
  }
  .filters_button_close {
    display: flex;
  }
  .open-filters {
    display: flex;
  }
  .filters_button {
    display: flex;
  }
  .products {
    margin: 0;
  }
  .products_container {
    justify-content: center;
  }
  .products_count {
    text-align: center;
    padding: 0;
    margin-top: 50px;
  }
}
</style>
