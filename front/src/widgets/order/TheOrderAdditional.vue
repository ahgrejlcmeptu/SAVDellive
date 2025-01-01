<script setup lang="ts">
import AppCardAdditional from "@entites/card/AppCardAdditional.vue";
const LIST = [
    {
        id: 1,
        img: '/img/products/1.jpg',
        name: 'Бургер',
        price: 259,
        weight: '200 гр.'
    },
    {
        id: 2,
        img: '/img/products/2.jpg',
        name: 'Шашлык',
        price: 259,
        weight: '200 гр.'
    },
    {
        id: 3,
        img: '/img/products/3.jpg',
        name: 'Бургер 2',
        price: 259,
        weight: '200 гр.'
    },
    {
        id: 4,
        img: '/img/products/4.jpg',
        name: 'Шашлык 2',
        price: 259,
        weight: '200 гр.'
    },
]
</script>

<template>
    <div class="order-additional">
        <AppCardAdditional
          v-for="item in LIST"
          :key="item.id"
          :data="item"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.order-additional {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;

  @include media.respond-to(960) {
    grid-gap: 20px
  }
  @include media.respond-to(360) {
    grid-gap: 15px;
    grid-template-columns: 100%;
  }
}
</style>
