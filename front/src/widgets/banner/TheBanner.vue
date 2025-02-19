<script setup lang="ts">
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";
import {HOST} from "@app/store/block.ts";

defineProps(['data'])


</script>

<template>
    <app-slider
            class="banner"
            :slider="{loop: true, effect: 'fade' }"
            name=".banner"
            :navigation="{color: 'white', tablet: true}"
            :pagination="{}"
    >
        <swiper-slide
                v-for="item in data"
                :key="item.documentId"
        >
            <picture v-if="true">
                <source media="(min-width: 640px" :srcset="HOST + item.img.url">
                <img :src="HOST+ item.mobile.url" alt="">
            </picture>
            <img v-else :src="HOST + item.img.url" alt="">
        </swiper-slide>
    </app-slider>
</template>

<style lang="scss">
@use "@style/media";

.banner {
  width: calc(100% - 20px);
  max-width: 1323px;
  margin-left: auto;
  margin-right: auto;
  --button-pos: -50px;
  --pagination-pos: 30px;
  border-radius: 30px;

  .swiper-button {
    opacity: 0;
  }

  @include media.hover {
    --button-pos: 50px;
    .swiper-button {
      opacity: 1;
    }
  }

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

  .swiper-slide {
    height: auto;
  }

  img {
    display: block;
    width: 100%;
    //min-height: 345px;
    min-height: 100%;
    object-fit: cover;
    object-position: left;
  }
}
</style>