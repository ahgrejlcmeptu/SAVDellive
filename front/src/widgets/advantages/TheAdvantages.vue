<script setup lang="ts">
import {SwiperSlide} from "swiper/vue";
import AppSlider from "@entites/slider/AppSlider.vue";

const LIST = [
    {
        id: 1,
        title: 'Качество ингредиентов',
        description: 'Уделяем особое внимание качеству ингредиентов',
        img: '/img/advantages/1.svg'
    },
    {
        id: 2,
        title: 'Опыт работы',
        description: '10 лет работаем в сфере доставки',
        img: '/img/advantages/2.svg'
    },
    {
        id: 3,
        title: 'Личная парковка',
        description: 'Имеем свой собственный автопарк',
        img: '/img/advantages/3.svg'
    },
    {
        id: 4,
        title: 'Спецпредложения',
        description: 'Лояльная система бонусов и подарков',
        img: '/img/advantages/4.svg'
    }
]
</script>

<template>
    <app-slider name=".advantages" class="advantages">
        <swiper-slide
                class="advantages-item"
                v-for="item in LIST"
                :key="item.id"
        >
            <div class="advantages-item__img">
                <img :src="item.img" :alt="item.title">
            </div>
            <div class="advantages-item__body">
                <div class="text-16">{{ item.title }}</div>
                <p class="text-15">{{ item.description }}</p>
            </div>
        </swiper-slide>
    </app-slider>
</template>

<style lang="scss">
@use "@style/media";

.advantages {
  overflow: visible;

  &-item {
    display: flex;
    gap: 15px;
    margin-right: 30px;
    width: 20%;
    flex-grow: 1;
    min-width: 270px;
    @include media.respond-to(640) {
      margin-right: 20px;
    }

    &:last-child {
      margin-right: 0;
    }

    .text-15 {
      margin-top: 5px;
    }
  }
}
</style>