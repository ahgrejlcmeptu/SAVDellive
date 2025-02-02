<script setup lang="ts">
import AppSlider from "@entites/slider/AppSlider.vue";
</script>

<template>
    <app-slider class="catalog-categories text-16" v-bind="{
        breakpoints: {
          0: {
            allowTouchMove: true,
          },
          1200: {
             allowTouchMove: false,
          }
        },
    }">
        <slot/>
    </app-slider>
</template>

<style lang="scss">
@use "@style/media";

.catalog-categories {
  margin-left: 0;
  max-width: 500px;
  overflow: visible;
  @include media.respond-to(960) {
    width: 100%;
    max-width: 100%;
  }

  .swiper {
    &-wrapper {
      @include media.respond-from(960) {
        height: auto;
        flex-wrap: wrap;
        gap: 12px 20px;
      }

    }

    &-slide {
      width: auto;
      @include media.respond-to(960) {
        margin-right: var(--gap-page);
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>