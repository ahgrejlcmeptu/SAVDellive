<script setup lang="ts">
import AppCardCategory from "@features/card/AppCardCategory.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";

interface Props {
    list: object;
}

defineProps<Props>()
</script>

<template>
    <app-slider name=".categories_slider" class="categories_slider">
        <swiper-slide
                v-for="item in list"
                :key="item.id"
        >
            <AppCardCategory :data="item"/>
        </swiper-slide>
    </app-slider>
</template>

<style lang="scss">
@use "@style/media";

.categories_slider {
  overflow: visible;

  .swiper-slide {
    width: 205px;
    margin-right: 20px;
    @include media.respond-to(360px) {
      margin-right: 16px;
      width: 150px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .card-category {
    height: 200px;
    border-radius: var(--radius-20);
    @include media.respond-to(360) {
      height: 160px;
      padding: 16px;
    }

    img {
      height: 180px;
      bottom: -50px;
      right: -80px;
      @include media.respond-to(360) {
        height: 130px;
        bottom: -20px;
        right: -60px;
      }
    }
  }
}
</style>