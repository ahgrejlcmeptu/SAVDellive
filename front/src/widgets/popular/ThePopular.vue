<script setup lang="ts">
import AppCardProduct from "@entites/card/AppCardProduct.vue";
import AppLinkBottom from "@spared/AppLinkBottom.vue";
import AppTabsSlider from "@features/tabs/AppTabsSlider.vue";
import {computed, ref} from "vue";

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
        status: [1, 2],
        description: 'Котлета говяжья, салат, помидор, сыр, соус…',
        price: '259',
        weight: 140,
        img: '/img/products/2.jpg'
    },
    {
        id: '3',
        name: 'Мисо-суп',
        category: '1',
        status: [1, 2],
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
        status: [1, 2],
        description: 'Рис, курица, лук, петрушка, соус терияки…',
        price: 159,
        weight: 140,
        img: '/img/products/6.jpg'
    },
    {
        id: '7',
        name: 'Мисо-суп',
        category: '1',
        status: [1, 2],
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
    },

    {
        id: '9',
        name: 'Корейский ',
        category: '1',
        status: [1, 2],
        description: 'Мини-кукуруза, лук, морковь, капуста…',
        price: 159,
        oldPrice: 259,
        weight: 140,
        img: '/img/products/1.jpg'
    },
    {
        id: '10',
        name: 'Бургер',
        category: '1',
        status: [1, 2],
        description: 'Котлета говяжья, салат, помидор, сыр, соус…',
        price: '259',
        weight: 140,
        img: '/img/products/2.jpg'
    },
    {
        id: '11',
        name: 'Мисо-суп',
        category: '1',
        status: [1, 2],
        description: 'Суп с сёмгой, луком, морковью, картофелем и…',
        price: 159,
        oldPrice: 259,
        weight: 140,
        img: '/img/products/3.jpg'
    },
    {
        id: '12',
        name: 'Рыбные палочки',
        category: '1',
        status: [1, 2, 3],
        description: 'Рыбные палочки, панировка, морковь, лук…',
        price: 159,
        weight: 140,
        img: '/img/products/4.jpg'
    },
]
const STATUS = [
    {
        id: 1,
        name: 'Популярные',
        icon: '/status.svg#popular'
    },
    {
        id: 2,
        name: 'Рекомендованные',
        icon: '/status.svg#recommended'
    },
    {
        id: 3,
        name: 'Новинки',
        icon: '/status.svg#new'
    }
]
const active = ref(STATUS[0].id)
const filter = computed(() => LIST.filter(({status}) => status.includes(active.value)).slice(0, 8))
</script>

<template>
    <AppTabsSlider :slides="STATUS" v-model="active" />
    <TransitionGroup tag="div" class="popular" name="cards">
        <AppCardProduct
                class="card-product_mobile"
                v-for="item in filter"
                :key="item.id"
                :data="item"
        />
    </TransitionGroup>
    <app-link-bottom><a href="#">Смотреть все</a></app-link-bottom>
</template>

<style lang="scss">
@use "@style/media";
@use "@style/transition";

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