<script setup lang="ts">
import AppCardProduct from "../../entites/card/AppCardProduct.vue";
import AppLinkBottom from "../../spared/AppLinkBottom.vue";
import {defineProps} from "vue";

interface Props {
    className?: string;
}

defineProps<Props>()
const LIST = [
    {
        id: '1',
        name: 'Корейский ',
        category: '1',
        status: [1],
        description: 'Мини-кукуруза, лук, морковь, капуста…',
        price: 159,
        oldPrice: 259,
        weight: 140,
        img: '/img/products/1.jpg'
    },
    {
        id: '2',
        name: 'Бургер',
        category: '1',
        status: [1],
        description: 'Котлета говяжья, салат, помидор, сыр, соус…',
        price: '259',
        weight: 140,
        img: '/img/products/2.jpg'
    },
    {
        id: '3',
        name: 'Мисо-суп',
        category: '1',
        status: [1],
        description: 'Суп с сёмгой, луком, морковью, картофелем и…',
        price: 159,
        oldPrice: 259,
        weight: 140,
        img: '/img/products/3.jpg'
    },
    {
        id: '4',
        name: 'Рыбные палочки',
        category: '1',
        status: [1],
        description: 'Рыбные палочки, панировка, морковь, лук…',
        price: 159,
        weight: 140,
        img: '/img/products/4.jpg'
    },
    {
        id: '5',
        name: 'Wok',
        category: '1',
        status: [1],
        description: 'Пшеничная лапша, курица, шампиньоны, перец…',
        price: 159,
        oldPrice: 259,
        weight: 140,
        img: '/img/products/5.jpg'
    },
    {
        id: '6',
        name: 'Рис с курицей',
        category: '1',
        status: [1],
        description: 'Рис, курица, лук, петрушка, соус терияки…',
        price: 159,
        weight: 140,
        img: '/img/products/6.jpg'
    },
    {
        id: '7',
        name: 'Мисо-суп',
        category: '1',
        status: [1],
        description: 'Суп с сёмгой, луком, морковью, картофелем и…',
        price: 159,
        oldPrice: 259,
        weight: 140,
        img: '/img/products/7.jpg'
    },
    {
        id: '8',
        name: 'Рис по‑тайски',
        category: '1',
        status: [1],
        description: 'Рис, креветки, красный перец, лук, стручковая…',
        price: 159,
        weight: 140,
        img: '/img/products/8.jpg'
    }
]
</script>

<template>

    <div class="popular">
        <AppCardProduct
                class="card-product_mobile"
                v-for="item in LIST"
                :key="item.id"
                :data="item"
        />
    </div>
    <app-link-bottom><a href="#">Смотреть все</a></app-link-bottom>
</template>

<style lang="scss">
@use "/src/app/style/media";

.popular {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width, 20%), 1fr));
  grid-gap: 30px;
  @include media.respond-to(960) {
    grid-gap: 30px 20px;
    --card-width: 30%;
    .card-product {
      &:nth-child(n+7) {
        display: none;
      }
    }
  }
  @include media.respond-to(640) {
    grid-gap: 20px;
    --card-width: 40%;
  }
  @include media.respond-to(360) {
    grid-gap: 10px;
    --card-width: 100%;
      .card-product {
          &:nth-child(n+5) {
              display: none;
          }
      }
  }
}
</style>