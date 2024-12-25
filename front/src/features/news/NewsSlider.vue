<script setup lang="ts">
import AppCardNews from "@entites/card/AppCardNews.vue";
import {Swiper, SwiperSlide} from "swiper/vue";

interface Props {
    list: object
}

defineProps<Props>()
</script>

<template>
    <swiper
            slides-per-view="auto"
            class="news_slider">
        <swiper-slide
                v-for="item in list"
                :key="item.id"
        >
            <AppCardNews
                    :data="item"
            />
        </swiper-slide>
    </swiper>
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