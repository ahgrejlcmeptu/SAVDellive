<script setup lang="ts">
import AppCardReview from "@entites/card/AppCardReview.vue";
import AppLinkBottom from "@spared/AppLinkBottom.vue";
import SwiperButton from "@spared/SwiperButton.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";

const LIST = [
    {
        id: '1',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/1.jpg',
        video: '/video/video.mp4'
    },
    {
        id: '2',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/2.jpg',
        video: '/video/video.mp4'
    },
    {
        id: '3',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/1.jpg',
    },
    {
        id: '4',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/2.jpg'
    },

    {
        id: '5',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/1.jpg',
        video: '/video/video.mp4'
    },
    {
        id: '6',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/2.jpg',
        video: '/video/video.mp4'
    },
    {
        id: '7',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/1.jpg',
    },
    {
        id: '8',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/2.jpg'
    },

    {
        id: '7',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/1.jpg',
    },
    {
        id: '8',
        name: 'Дмитрий Малых',
        date: '15.05.20',
        description: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском\n' +
            'языке,…',
        img: '/img/reviews/2.jpg'
    },
]
</script>

<template>
    <div class="reviews">
        <swiper-button tablet prev/>
        <swiper-button tablet next/>
        <app-slider
                :slider="{loop: true}"
                name=".reviews"
        >
            <swiper-slide
                    v-for="item in LIST"
                    :key="item.id"
            >
                <AppCardReview
                        :data="item"
                />
            </swiper-slide>
        </app-slider>
    </div>
    <app-link-bottom><a href="#">Смотреть все</a></app-link-bottom>
</template>

<style lang="scss">
@use "@style/media";

.reviews {
  --button-pos: -100px;
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @include media.respond-to(960) {
    width: 100%;
    --button-pos: 0;
  }

  .swiper {
    overflow: visible;
    margin: 0;
    @include media.respond-from(640) {
      @include media.respond-to(960) {
        width: 71%;
        overflow: hidden;
      }
    }
  }

  .swiper-slide {
    width: calc(50% - 15px);
    flex-grow: 1;
    margin-right: 30px;
    transition: .3s transform;
    @include media.respond-to(960) {
      margin-right: 20px;
      width: 100%;
    }
    @include media.respond-to(360) {
      margin-right: 15px;
    }

    &-prev {
      transform: translateX(-160px);
    }
    &-next {
      + .swiper-slide {
        transform: translateX(160px);
      }
    }
  }
}
</style>