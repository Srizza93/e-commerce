<template>
  <div class="results">
    <div class="filters">
      <div 
      v-for="filter in filters"
      :key="filter.text"
      class="filters_filter">
        <h4 class="filters_filter_title">{{filter.text}}</h4>
        <span
        v-for="subtopic in filter.subtopics"
        :key="subtopic.text"
        class="filters_filter_topic">
          <input type="checkbox" 
          :id="subtopic.text" 
          name="filters_filter" 
          :value="subtopic.text" 
          v-on:click="filterTicked">
          <span>{{subtopic.text}}</span>
        </span>
      </div>
    </div>
    <div class="products">
      <div 
      class="products_product"
      v-for="product in productsFiltered"
      :key="product.text">
        <h4>{{product.text}}</h4>
        <img v-bind:src="getImgUrl(product.image)" 
        :alt="product.text" class="products_product_images">
        <span class="products_product_brand">{{product.brand}}</span>
        <span class="products_product_description">{{product.descritpion}}</span>
        <span class="products_product_price">{{product.price}}</span>
        <span class="products_product_reviews"><span class="star"></span> {{product.reviews}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.results {
  display: flex;
  flex-direction: row;
  background-color: #F5F5F5;
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

.filters_filter_title {
  margin: 10px 0 10px 0;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  flex-basis: 80%;
  margin: 0 0 0 5%;
  font-weight: 400px;
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
  padding: 1.33em 0 .50em 0;
}

.products_product_price {
  padding-bottom: .50em;
  font-weight: bold;
  font-size: 21px;
}

.star {
  color: #FF8C00;
}
.star::before {
  content: "\2605";
}
</style>

<script>

export default {
  name: 'Footer',
  methods: {
    getImgUrl(pic) {
    var images = require.context('../images/', false, /\.jpeg$/)
    return images('./' + pic)
    },
    filterTicked(event) {
      const filter = event.target.value;
      if (this.tickedFilters.includes(filter)) {
        this.tickedFilters.splice(this.tickedFilters.indexOf(filter), 1);
      }
      else {
        this.tickedFilters.push(event.target.value);
      }
    }
  },
  computed: {
    productsFiltered(event) {
      if (this.tickedFilters.length > 0) {
        return this.products.filter(product => {
          return Object.values(product).some(subtopic => {
            return this.tickedFilters.includes(subtopic);
          })
        });
      }
      return this.products;
    }
  },
  data() {
    return { 
      tickedFilters: [],
      filters: [
        {
          text: 'Reviews',
          subtopics: [
            {
              text: 'Excellent'
            },
            {
              text: 'Great'
            },
            {
              text: 'Good'
            },
            {
              text: 'Ok'
            },
            {
              text: 'Bad'
            }
          ]
        },
        {
          text: 'Price',
          subtopics: [
            {
              text: '0 to 25€'
            },
            {
              text: '26 to 50€'
            },
            {
              text: '51 to 100€'
            },
            {
              text: '101 to 200€'
            }
          ]
        },
        {
          text: 'Products',
          subtopics: [
            {
              text: 'Computer'
            },
            {
              text: 'Food'
            },
            {
              text: 'Garden'
            },
            {
              text: 'Beauty'
            },
            {
              text: 'Guitar'
            },
            {
              text: 'Shoes'
            }
          ]
        },
        {
          text: 'Brands',
          subtopics: [
            {
              text: 'Adidas'
            },
            {
              text: 'Nike'
            },
            {
              text: 'Apple'
            },
            {
              text: 'Samsung'
            },
            {
              text: 'Findus'
            },
            {
              text: 'Lacoste'
            }
          ]
        }
      ],
      products: [
        {
          text: 'Shoes',
          image: 'shoes.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '20€',
          range: '0 to 25€',
          reviews: 'Excellent',
          brand: 'Adidas'
        },
        {
          text: 'Computer',
          image: 'computer-product.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '2000€',
          range: '101 to 200€',
          reviews: 'Excellent',
          brand: 'Nike'
        },
        {
          text: 'Guitar',
          image: 'guitar.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '20€',
          range: '0 to 25€',
          reviews: 'Great',
          brand: 'Findus'
        },
        {
          text: 'Garden',
          image: 'garden.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '20€',
          range: '26 to 50€',
          reviews: 'Ok',
          brand: 'Adidas'
        },
        {
          text: 'Home',
          image: 'home.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '20€',
          range: '51 to 100€',
          reviews: 'Excellent',
          brand: 'Nike'
        },
        {
          text: 'Toys',
          image: 'toys.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '20€',
          range: '26 to 50€',
          reviews: 'Bad',
          brand: 'Apple'
        },
        {
          text: 'Food',
          image: 'food.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '20€',
          range: '101 to 200€',
          reviews: 'Good',
          brand: 'Nike'
        },
        {
          text: 'Beauty',
          image: 'beauty.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '20€',
          range: '0 to 25€',
          reviews: 'Good',
          brand: 'Samsung'
        },
        {
          text: 'Computers',
          image: 'computers.jpeg',
          descritpion: "Under Armour Men's Charged Assert 8 Running Shoe",
          price: '20€',
          range: '101 to 200€',
          reviews: 'Excellent',
          brand: 'Lacoste'
        }
      ]
    }
  }
}

</script>