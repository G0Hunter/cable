<template>
  <section class="product container">
	<div class="product-head">
		<div class="product-img">
			<img :src="`/img/${product.img}`" :alt="product.img">
		</div>
		<div class="product-controls">
			<div class="product__row">
				<h1 class="product-title">{{ product.name }}</h1>
				<div class="product-price">{{ product.price }}</div>
			</div>
			<div class="product__row">
				<div class="product-exist">
					В налиии
				</div>
				<div class="product-buy-btn">
					<button class="product-button">Купить</button>
				</div>
			</div>
			<div class="product__row">
				<div class="product-download">
					Скачать
				</div>
			</div>

		</div>
	</div>
	<div class="product-info">
		<div class="product-nav">
			<div :class="['product-nav-item product-nav-item--border', { active: showExp }]" @click="showExp = true">Описание</div>
			<div :class="['product-nav-item', { active: !showExp }]" @click="showExp = false">Характеристики</div>
		</div>
		<div v-if="showExp" class="product-explaine">
			{{ product.description }}
		</div>
		<div v-else class="product-explaine">
			{{ product.specifications }}
		</div>
	</div>
  </section>
</template>

<script>
export default {
  name: 'Product',
  data () {
  	return {
  		showExp: true
  	}
  },
  computed: {
  	id () {
  		return this.$route.params.catalog
  	},
    product () {
      return Object.values(this.$store.state.products).find(product => { return product.id === this.id })
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
	padding-top: 50px;
	&-head {
		display: flex;
	}
	&-price {
		color: red;
	}
	&-explaine {
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 60px;
	}
	&-nav {
		display: flex;
		margin: 30px 0;
		&-item {
			margin-left: 30px;
			text-transform: uppercase;
			font-size: 16px;
			padding-bottom: 3px;
			cursor: pointer;
			&:first-child {
				margin-left: 0;
			}
			&.active {
				border-bottom: 2px solid #df2d2d;
			}
			&--border::after {
				content: '';
				border-left: 2px solid grey;
				margin-left: 10px;
			}
		}
	}
	&-img {
		border: 1px solid grey;
		margin-right: 15px;
		max-width: 500px;
    	max-height: 400px;
	}
	&-controls {
		width: 100%;
	}
	&__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&-exist {
		color: #03c303;
	}
	&-button {
		width: 160px;
		padding: 10px 0;
		border-color: red;
		border-radius: 3px;
		background-color: transparent;
		text-transform: uppercase;
		cursor: pointer;
	}
}
</style>


