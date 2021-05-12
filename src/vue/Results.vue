<template>
  <div class="results">
    <div class="filters">
      <label
        v-for="filter in filteredFilters"
        :key="'filter-' + filter.id"
        :pkey="'filter-' + filter.id"
        class="filters_filter_topic"
      >
        <div>
          <input
            class="filters_filter_topic_checkbox"
            type="checkbox"
            :id="filter.id"
            name="filters_filter"
            :value="filter.text"
            @click="filterTicked"
          />
          <span class="filters_filter_topic_checkmark"></span>
          <span class="filters_filter_topic_container"></span>
          <span class="filters_filter_topic_label_text">
            {{ filter.text }}
          </span>
        </div>
        <span class="filters_filter_topic_label_count">
          ({{ filteredProductsLength }})
        </span>
      </label>
    </div>
    <div class="products">
      <h2 class="products_count">
        {{ filteredProductsLength }} Product(s) Found
      </h2>
      <div class="products_container">
        <div
          class="products_product"
          v-for="product in filteredProducts"
          :key="`products-` + product.id"
          :pkey="'product-' + product.id"
        >
          <h4>
            {{ product.text }}
          </h4>
          <img
            v-bind:src="getImgUrl(product.image)"
            :alt="product.text"
            class="products_product_images"
          />
          <span class="products_product_brand">{{ product.brand }}</span>
          <span class="products_product_description">
            {{ product.descritpion }}
          </span>
          <span class="products_product_price">{{ product.price }}</span>
          <span class="products_product_reviews">
            <span class="star"></span>
            {{ product.reviews }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["pkey"],
  data() {
    return {
      tickedFilters: [],
      shownProducts: [],
      filters: [
        {
          id: 1,
          topic: "Reviews",
          text: "Excellent",
        },
        {
          id: 2,
          topic: "Reviews",
          text: "Great",
        },
        {
          id: 3,
          topic: "Reviews",
          text: "Good",
        },
        {
          id: 4,
          topic: "Reviews",
          text: "Ok",
        },
        {
          id: 5,
          topic: "Reviews",
          text: "Bad",
        },
        {
          id: 6,
          topic: "Price",
          text: "0 to 25€",
        },
        {
          id: 7,
          topic: "Price",
          text: "26 to 50€",
        },
        {
          id: 8,
          topic: "Price",
          text: "51 to 100€",
        },
        {
          id: 9,
          topic: "Price",
          text: "101 to 200€",
        },
        {
          id: 10,
          topic: "Products",
          text: "Computer",
        },
        {
          id: 11,
          topic: "Products",
          text: "Food",
        },
        {
          id: 12,
          topic: "Products",
          text: "Garden",
        },
        {
          id: 13,
          topic: "Products",
          text: "Beauty",
        },
        {
          id: 14,
          topic: "Products",
          text: "Guitar",
        },
        {
          id: 15,
          topic: "Products",
          text: "Shoes",
        },
        {
          id: 16,
          topic: "Brands",
          text: "Adidas",
        },
        {
          id: 17,
          topic: "Brands",
          text: "Nike",
        },
        {
          id: 18,
          topic: "Brands",
          text: "Apple",
        },
        {
          id: 19,
          topic: "Brands",
          text: "Samsung",
        },
        {
          id: 20,
          topic: "Brands",
          text: "Findus",
        },
        {
          id: 21,
          topic: "Brands",
          text: "Lacoste",
        },
      ],
      products: [
        {
          id: 1,
          text: "Shoes",
          image: "shoes.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "0 to 25€",
          reviews: "Excellent",
          brand: "Adidas",
        },
        {
          id: 2,
          text: "Computer",
          image: "computer-product.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "2000€",
          range: "101 to 200€",
          reviews: "Excellent",
          brand: "Apple",
        },
        {
          id: 3,
          text: "Guitar",
          image: "guitar.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "0 to 25€",
          reviews: "Great",
          brand: "Findus",
        },
        {
          id: 4,
          text: "Garden",
          image: "garden.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "26 to 50€",
          reviews: "Ok",
          brand: "Adidas",
        },
        {
          id: 5,
          text: "Home",
          image: "home.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "51 to 100€",
          reviews: "Excellent",
          brand: "Nike",
        },
        {
          id: 6,
          text: "Toys",
          image: "toys.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "26 to 50€",
          reviews: "Bad",
          brand: "Apple",
        },
        {
          id: 7,
          text: "Food",
          image: "food.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "101 to 200€",
          reviews: "Good",
          brand: "Nike",
        },
        {
          id: 8,
          text: "Beauty",
          image: "beauty.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "0 to 25€",
          reviews: "Good",
          brand: "Samsung",
        },
        {
          id: 9,
          text: "Computers",
          image: "computers.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "101 to 200€",
          reviews: "Excellent",
          brand: "Lacoste",
        },
        {
          id: 10,
          text: "Computers",
          image: "computers.jpeg",
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: "20€",
          range: "101 to 200€",
          reviews: "Excellent",
          brand: "Lacoste",
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      var images = require.context("../images/", false, /\.jpeg$/);
      return images("./" + pic);
    },
    filterTicked(event) {
      const filter = event.target.value;
      if (this.tickedFilters.includes(filter)) {
        this.tickedFilters.splice(this.tickedFilters.indexOf(filter), 1);
      } else {
        this.tickedFilters.push(filter);
      }
      this.shownProducts = [];
    },
  },
  computed: {
    filteredFilters() {
      if (this.tickedFilters.length > 0) {
        this.filteredProducts.forEach((product) => {
          this.shownProducts = this.shownProducts.concat(
            Object.values(product)
          );
        });
        return this.filters.filter((filter) => {
          return this.shownProducts.includes(filter.text);
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
  },
};
</script>

<style scoped>
.results {
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  padding: 10px 0 10px 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
}

.filters {
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  height: 100%;
  padding: 0 12px;
  border-right: 2px solid #ddd;
}

.filters_filter {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.filters_filter_topic {
  display: flex;
  justify-content: space-between;
  padding: 5px 0 5px 0;
}

.filters_filter_topic_label {
  cursor: pointer;
}

.filters_filter_topic_label:hover {
  opacity: 0.7;
}

.filters_filter_topic_container {
  position: absolute;
  left: 10px;
  border: 1px solid black;
  opacity: 0.4;
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.filters_filter_topic_container:hover {
  opacity: 0.2;
}

.filters_filter_topic_checkbox:checked ~ .filters_filter_topic_container {
  background-color: #2196f3;
  opacity: 1;
}

.filters_filter_topic_checkbox {
  transform: scale(1.5);
  opacity: 0;
}

.filters_filter_topic_checkmark {
  content: "";
  position: absolute;
  display: none;
  cursor: pointer;
  left: 18px;
  width: 5px;
  height: 10px;
  padding-top: 4px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 999;
}

.filters_filter_topic_checkbox:checked ~ .filters_filter_topic_checkmark {
  display: inline-flex;
}

.filters_filter_topic_label_text {
  cursor: pointer;
  padding-right: 30px;
}

.filters_filter_topic_label_count {
  cursor: pointer;
  font-size: 13px;
  text-align: right;
  color: #6b6b6b;
}

.products {
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  margin: 0 0 0 5%;
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

.products_product {
  display: flex;
  flex-direction: column;
  padding: 0 12px 30px 12px;
  max-width: 200px;
  border-bottom: 2px solid #ddd;
}

.products_product_images {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.products_product_description {
  padding: 1.33em 0 0.5em 0;
}

.products_product_price {
  padding-bottom: 0.5em;
  font-weight: bold;
  font-size: 21px;
}

.star {
  color: #ff8c00;
}
.star::before {
  content: "\2605";
}

@media only screen and (max-width: 600px) {
  .filters {
    padding: 0;
  }

  .results {
    padding: 25px 25px 0 0;
  }

  .products_product {
    padding: 0 0 30px 0;
  }

  .products_count {
    padding: 0;
  }
}
</style>
