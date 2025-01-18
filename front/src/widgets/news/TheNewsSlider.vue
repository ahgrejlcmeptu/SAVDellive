<script setup lang="ts">
import AppCardNews from "@features/card/AppCardNews.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";

interface Props {
    data: object
}

defineProps<Props>()
</script>

<template>
    <app-slider name=".news_slider" class="news_slider">
        <swiper-slide
                v-for="item in data"
                :key="item.id"
        >
            <AppCardNews
                    :data="item"
            />
        </swiper-slide>
    </app-slider>
</template>

<style lang="scss">
@use "@style/media";

.news_slider {
  overflow: visible;

  .swiper-slide {
    width: 280px;
    margin-right: 20px;
    @include media.respond-to(360) {
      margin-right: 16px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>