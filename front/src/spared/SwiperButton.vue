<script setup lang="ts">
import AppSvg from "./AppSvg.vue";
import {defineProps} from 'vue';

interface Props {
    next?: any;
    prev?: any;
    tablet?: any;
}

defineProps<Props>();
import {checkUndefined} from "../app/utils/verification.ts";
</script>

<template>
    <div :class="['swiper-button', {
        'swiper-button-prev': checkUndefined(prev),
         'swiper-button-next': checkUndefined(next),
         'swiper-button_tablet': checkUndefined(tablet)
    }]">
        <app-svg name="swiper"></app-svg>
    </div>
</template>

<style lang="scss">
@use "/src/app/style/media";

.swiper-button {
  cursor: pointer;
  width: var(--button-size, 40px);
  height: var(--button-size, 40px);
  border-radius: 50%;
  border: 1px solid var(--main-white);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
    fill: var(--main-white);
  }

  &-prev {
    left: var(--button-pos, 0);
  }

  &-next {
    right: var(--button-pos, 0);

    svg {
      transform: rotate(180deg);
    }
  }

  &_tablet {
    @include media.respond-to(640) {
      display: none;
    }
  }
}
</style>