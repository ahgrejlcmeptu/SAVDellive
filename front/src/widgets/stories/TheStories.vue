<script setup lang="ts">
import AppCardStory from "@features/card/AppCardStory.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";
defineProps(['data'])

</script>

<template>
    <app-slider name=".stories" class="stories">
        <swiper-slide v-for="item in data" :key="item.id">
            <AppCardStory :data="item"/>
        </swiper-slide>
    </app-slider>
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