<template>
 <div class="about-us">
    <h2 class="block-title about-us-title">КАТАЛОГ</h2>
    <p class="block-text about-us-text">На сегодня наша компания
        производит высококачественные силовые, сигнальные, <strong>огнестойкие</strong> кабели и кабели связи</p>
    
    <ul class="listOfProducts">
      <li v-for="(product, index) in products" :key="index" class="product">
        <img class="product-img" :src="`/img/${product.img}`" alt="">
        <nuxt-link :to="`/catalog/${product.link}`">
          <h2 class="product-name"
              @click="addCurrentProduct(product)">
            {{ product.name }}
          </h2>
        </nuxt-link>
        <div class="product-price">
          {{ product.description }}
        </div>

        <!-- <btn btnColor="btn btn-large btn-sucess"
            :cartIcon="true"
            @click.native="addProductToCart(product)">
          Add to cart
        </btn> -->
      </li>
  </ul>
 </div>
</template>
<script>
// import { mapActions } from 'vuex';
// import btn from './Btn';
export default {
  // props: ['products'],
  // components: {
  //   btn,
  // },
  head () {
    return {
      title: 'Каталог'
    }
  },
  data () {
    return {
      products: [
        {
          'name': 'J-Y(St)Y...Lg',
          'img': 'j-red.png',
          'link': '1',
          'description': 'Кабель для телефонных сетей,систем пожарной и охра и сигнализации.'
        },
        {
          'name': 'J-H(St)H...Bd',
          'img': 'j-red.png',
          'link': '2',
          'description': 'Инсталляционный кабель с огнестойкостью, электростатическим экраном из алюминиевой фольги, с изоляцией и оболочкой выполненной из компаунда, не содержащего галогенов, не распространяющего дыма.'
        },
        {
          'name': 'J-Y(St)Y...Lg',
          'img': 'j-red.png',
          'link': '1',
          'description': 'Кабель для телефонных сетей,систем пожарной и охра и сигнализации.'
        },
        {
          'name': 'J-H(St)H...Bd',
          'img': 'j-red.png',
          'link': '2',
          'description': 'Инсталляционный кабель с огнестойкостью, электростатическим экраном из алюминиевой фольги, с изоляцией и оболочкой выполненной из компаунда, не содержащего галогенов, не распространяющего дыма.'
        }
      ]
    }
  },
  methods: {
    // ...mapActions([
    //   'addProduct',
    //   'currentProduct',
    // ]),
    // addProductToCart(product) {
    //   this.addProduct(product);
    // },
    // addCurrentProduct(product) {
    //   this.currentProduct(product);
    // },
  },
}
</script>

<style lang="scss" scoped>
  .listOfProducts {
    width: 100%;
    max-width: 1170px;
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }
  .product {
    width: 340px;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    &-img {
      max-width: 100%;

    }
  }
  .product-name {
    font-size: 1.2em;
    font-weight: normal;
    margin: 20px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid red;
  }
  .product-name:hover {
    cursor: pointer;
    color: red;
    transition: .6s;
    border-bottom-color: transparent;
  }
  .product-price {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    justify-content: space-between;
    margin-bottom: .5em;
  }
  .about-us {
    padding: 30px 0 100px;
    background-color: #fff;
    background-image: url('~@/assets/img/about.png');
    background-repeat: no-repeat;
    background-position: top -20px left;
    background-size: 18%;
    position: relative;
    &-text {
      max-width: 60%;
      font-weight: 300;
      margin: 20px auto 0;
      text-align: center;
    }
  }
</style>