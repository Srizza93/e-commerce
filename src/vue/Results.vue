<template>
  <div class="results">
    <div class="filters">
      <div v-for="filter in filters" :key="filter.id" class="filters_filter">
        <h4 class="filters_filter_title">
          {{ filter.text }}
        </h4>
        <span
          v-for="subtopic in filter.subtopics"
          :key="filter.text + '-' + subtopic.id"
          class="filters_filter_topic"
        >
          <input
            type="checkbox"
            :id="subtopic.text"
            name="filters_filter"
            :value="subtopic.text"
            @click="filterTicked"
          />
          <span>
            {{ subtopic.text }}
          </span>
        </span>
      </div>
    </div>
    <div class="products">
      <div
        class="products_product"
        v-for="product in productsFiltered"
        :key="product.text"
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
          {{product.descritpion}}
        </span>
        <span class="products_product_price">{{ product.price }}</span>
        <span class="products_product_reviews">
          <span class="star"></span>
          {{ product.reviews }}
        </span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      tickedFilters: [],
      filters: [
        {
          id: 1,
          text: "Reviews",
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
          text: "Price",
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
          ],
        },
        {
          id: 3,
          text: "Products",
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
          text: "Brands",
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
              text: "Findus",
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
          brand: "Nike",
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
        this.tickedFilters.push(event.target.value);
      }
    },
  },
  computed: {
    productsFiltered(event) {
      if (this.tickedFilters.length > 0) {
        return this.products.filter((product) => {
          return Object.values(product).some((subtopic) => {
            return this.tickedFilters.includes(subtopic);
          });
        });
      }
      return this.products;
    },
  }
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
  flex-direction: row;
}

.filters_filter_title {
  margin: 10px 0 10px 0;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  flex-basis: 80%;
  margin: 0 0 0 5%;
  font-weight: 400;
  padding-top: 25px;
}

.products_product {
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  max-width: 200px;
  border-bottom: 2px solid #ddd;
}

.products_product_images {
  width: 200px;
  height: 200px;
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
  .products_product {
    padding: 0;
  }
}
</style>
