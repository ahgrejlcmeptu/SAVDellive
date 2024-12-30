<script setup lang="ts">
import AppCardOrder from "@entites/card/AppCardOrder.vue";

const LIST = [
    {
        id: '1',
        name: 'Рыбные палочки',
        description: 'Семга терияки, сливочный сыр, огурец, стружка тунца',
        img: '/img/products/1.jpg',
        price: 250,
        weight: '140 гр.',
        amount: 1
    },
    {
        id: '2',
        name: 'Рыбные палочки',
        description: 'Семга терияки, сливочный сыр, огурец, стружка тунца',
        img: '/img/products/2.jpg',
        price: 250,
        weight: '140 гр.',
        amount: 1
    },
    {
        id: '3',
        name: 'Рыбные палочки',
        description: 'Семга терияки, сливочный сыр, огурец, стружка тунца',
        img: '/img/products/3.jpg',
        price: 250,
        weight: '140 гр.',
        amount: 1
    },
]
</script>

<template>
    <div class="order-list">
        <AppCardOrder
                v-for="item in LIST"
                :key="item.id"
                :data="item"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.order-list {
  .card-order {
    margin-bottom: 30px;
    @include media.respond-to(640) {
      margin-bottom: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>