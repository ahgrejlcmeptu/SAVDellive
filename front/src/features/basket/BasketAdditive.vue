<script setup lang="ts">
import AppSlider from "@entites/slider/AppSlider.vue";
import AppCardAdditive from "@features/card/AppCardAdditive.vue";
import {SwiperSlide} from "swiper/vue";

const LIST = [
    {
        id: 1,
        name: 'Соус острый',
        img: '/img/additive/1.png',
        price: 15,
        weight: '30 гр.'
    },
    {
        id: 2,
        name: 'Соус сырно-сливочный',
        img: '/img/additive/2.png',
        price: 15,
        weight: '30 гр.'
    },
    {
        id: 3,
        name: 'Васаби',
        img: '/img/additive/3.png',
        price: 15,
        weight: '30 гр.'
    },
    {
        id: 4,
        name: 'Имбирь',
        img: '/img/additive/4.png',
        price: 15,
        weight: '30 гр.'
    }
]
</script>

<template>
    <app-slider class="basket-additive">
        <swiper-slide v-for="item in LIST" :key="item.id">
            <AppCardAdditive :data="item"/>
        </swiper-slide>
    </app-slider>
</template>

<style lang="scss">
.basket-additive {
  overflow: visible;

  .swiper-slide {
    height: auto;
    margin-right: 9px;
    width: auto;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>