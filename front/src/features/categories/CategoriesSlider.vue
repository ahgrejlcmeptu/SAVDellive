<script setup lang="ts">
import AppCardCategory from "../../entites/card/AppCardCategory.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {defineProps} from "vue";

interface Props {
    className: object;
    list: object;
}

defineProps<Props>()
</script>

<template>
    <swiper
            slides-per-view="auto"
            :class="[className, 'categories_slider']">
        <swiper-slide
                v-for="item in list"
                :key="item.id"
        >
            <AppCardCategory :data="item"/>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss">
@use "/src/app/style/media";

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