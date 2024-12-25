<script setup lang="ts">
import AppCardStory from "@entites/card/AppCardStory.vue";
import {Swiper, SwiperSlide} from "swiper/vue";

const LIST = [
    {
        id: 1,
        img: '/img/stories/1.jpg',
        name: 'Счастливые\n' +
            'часы'
    },

    {
        id: 3,
        img: '/img/stories/2.jpg',
        name: 'Акции, \n' +
            'спецпредложения…'
    },
    {
        id: 4,
        img: '/img/stories/3.jpg',
        name: 'Отзывы'
    },
    {
        id: 5,
        img: '/img/stories/4.jpg',
        name: 'Банкетное\n' +
            'меню'
    },
    {
        id: 6,
        img: '/img/stories/5.jpg',
        name: 'Доставка'
    },
    {
        id: 7,
        img: '/img/stories/6.jpg',
        name: 'Рестораны'
    },
    {
        id: 8,
        img: '/img/stories/7.jpg',
        name: 'Корпоративы'
    },
    {
        id: 9,
        img: '/img/stories/tg.svg',
        name: 'Мессенджеры'
    },
]
</script>

<template>
    <swiper class="stories" slides-per-view="auto">
        <swiper-slide v-for="item in LIST" :key="item.id">
            <AppCardStory :data="item"/>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss">
.stories {
  overflow: visible;

  .swiper-slide {
    width: auto;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>