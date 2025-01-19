<script setup lang="ts">
import {SwiperSlide} from "swiper/vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import AppCardGallery from "@features/card/AppCardGallery.vue";

defineProps(['data'])
</script>

<template>
    <app-slider
            :slider="{loop: true}"
            name=".gallery"
            class="gallery"
    >
        <swiper-slide
                v-for="item in data"
                :key="item.id"
        >
            <AppCardGallery :data="item"/>
        </swiper-slide>
    </app-slider>
</template>

<style lang="scss">
@use "@style/media";

.gallery {
  overflow: visible;

  .swiper-slide {
    margin-right: 20px;
    @include media.respond-to(360) {
      margin-right: 12px;
    }
  }
}
</style>