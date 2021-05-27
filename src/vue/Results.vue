<template>
  <div class="results">
    <div class="filters_button">
      <button
        class="filters_button_text"
        @click="openCloseFiltersOnSmallScreens"
      >
        Filters
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
          :key="filter1.text + filter1.id"
          :id="filter1.id"
          :text="filter1.text"
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
        />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "../vue/Filters.vue";
import Products from "../vue/Products.vue";
export default {
  name: "Results",
  props: ["pkey"],
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
              text: "Excellent",
            },
            {
              id: 2,
              text: "Great",
            },
            {
              id: 3,
              text: "Good",
            },
            {
              id: 4,
              text: "Ok",
            },
            {
              id: 5,
              text: "Bad",
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
          ],
        },
        {
          id: 4,
          topic: "Brands",
          subtopics: [
            {
              id: 1,
              text: "Adidas",
            },
            {
              id: 2,
              text: "Nike",
            },
            {
              id: 3,
              text: "Apple",
            },
            {
              id: 4,
              text: "Samsung",
            },
            {
              id: 5,
              text: "Kenzo",
            },
            {
              id: 6,
              text: "Lacoste",
            },
          ],
        },
      ],
      products: [
        {
          id: 1,
          text: "Shoes",
          image: "shoes.jpeg",
          description: "Jaguar, Red and white",
          price: "21.99€",
          range: "0 to 25€",
          reviews: "Excellent",
          brand: "Adidas",
        },
        {
          id: 2,
          text: "Computer",
          image: "computer-product.jpeg",
          description: "Mac 120, limited edition",
          price: "2199.00€",
          range: "+200€",
          reviews: "Excellent",
          brand: "Apple",
        },
        {
          id: 3,
          text: "Guitar",
          image: "guitar.jpeg",
          description: "Kenzo Music, Standard",
          price: "127.51€",
          range: "101 to 200€",
          reviews: "Great",
          brand: "Kenzo",
        },
        {
          id: 4,
          text: "Garden",
          image: "garden.jpeg",
          description: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "26 to 50€",
          reviews: "Ok",
          brand: "Adidas",
        },
        {
          id: 5,
          text: "Home",
          image: "home.jpeg",
          description: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "51 to 100€",
          reviews: "Excellent",
          brand: "Nike",
        },
        {
          id: 6,
          text: "Toys",
          image: "toys.jpeg",
          description: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "26 to 50€",
          reviews: "Bad",
          brand: "Apple",
        },
        {
          id: 7,
          text: "Food",
          image: "food.jpeg",
          description: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "101 to 200€",
          reviews: "Good",
          brand: "Nike",
        },
        {
          id: 8,
          text: "Beauty",
          image: "beauty.jpeg",
          description: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "0 to 25€",
          reviews: "Good",
          brand: "Samsung",
        },
        {
          id: 9,
          text: "Computers",
          image: "computers.jpeg",
          description: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "101 to 200€",
          reviews: "Excellent",
          brand: "Lacoste",
        },
        {
          id: 10,
          text: "Computers",
          image: "computers.jpeg",
          description: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "101 to 200€",
          reviews: "Excellent",
          brand: "Lacoste",
        },
        {
          id: 11,
          text: "Toys",
          image: "ball.jpeg",
          description: "Nike Sport, white and blue",
          price: "120.99€",
          range: "101 to 200€",
          reviews: "Good",
          brand: "Nike",
        },
        {
          id: 12,
          text: "Music",
          image: "ball.jpeg",
          description: "Turntables",
          price: "145.99€",
          range: "101 to 200€",
          reviews: "Bad",
          brand: "Technics",
        },
      ],
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
  background-color: #f5f5f5;
  padding: 40px 0 10px 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
}
.filters {
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  min-width: 225px;
  box-sizing: border-box;
  height: 100vh;
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
  padding-bottom: 10px;
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
  border-radius: 10%;
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
  opacity: .7;
} 
.open-button {
  left: 215px;
}
.products {
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  margin-left: 5%;
  font-weight: 400;
  padding-top: 25px;
}
.products_count {
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
  }
}
</style>
