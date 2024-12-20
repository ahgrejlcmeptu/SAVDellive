<script setup lang="ts">
import SwiperButton from "../../spared/SwiperButton.vue";
import SwiperPagination from "../../spared/SwiperPagination.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Pagination, EffectFade} from 'swiper/modules';
import {defineProps} from 'vue';

interface Props {
    className: string;
}

defineProps<Props>()

const LIST = [
    {
        id: 1,
        img: '/img/banner1.jpg'
    },
    {
        id: 2,
        img: '/img/banner2.jpg'
    },
]
</script>

<template>
    <swiper
            :class="['banner', className]"
            :modules="[Navigation, Pagination, EffectFade]"
            loop
            effect="fade"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }"
    >
        <swiper-slide
                v-for="item in LIST"
                :key="item.id"
        >
            <img :src="item.img" alt="">
        </swiper-slide>
        <swiper-button tablet prev/>
        <swiper-button tablet next/>
        <swiper-pagination/>
    </swiper>
</template>

<style lang="scss">
@use "/src/app/style/media";

.banner {
  width: calc(100% - 20px);
  max-width: 1323px;
  margin-left: auto;
  margin-right: auto;
  --button-pos: 77px;
  --pagination-pos: 30px;
  border-radius: 30px;

  @include media.respond-to(960) {
    border-radius: 20px;
    --button-pos: 20px;
    --pagination-pos: 15px;
  }
  @include media.respond-to(640) {
    border-radius: 30px;
  }
  @include media.respond-to(360) {
    --pagination-pos: 10px;
    border-radius: 20px;
  }

  img {
    display: block;
    width: 100%;
    min-height: 253px;
    object-fit: cover;
  }
}
</style>