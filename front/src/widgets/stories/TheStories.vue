<script setup lang="ts">
import AppSection from "@spared/AppSection.vue";
import AppCardStory from "@features/card/AppCardStory.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";

defineProps(['data'])

</script>

<template>
    <app-section class="mb-100" :title="data.title" header="center">
        <app-slider name=".stories" class="stories">
            <swiper-slide v-for="item in data.list" :key="item.documentId">
                <AppCardStory :data="item"/>
            </swiper-slide>
        </app-slider>
    </app-section>
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