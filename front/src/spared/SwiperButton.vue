<script setup lang="ts">
import AppSvg from "./AppSvg.vue";
import {checkUndefined} from "../app/utils/verification.ts";

type Color = ['white', 'gray'];

interface Props {
    next?: any;
    prev?: any;
    tablet?: any;
    color?: Color | string | undefined
}

withDefaults(defineProps<Props>(), {
    color: 'gray'
});

</script>

<template>
    <div :class="['swiper-button', 'swiper-button_' + color,{
        'swiper-button-prev': checkUndefined(prev),
         'swiper-button-next': checkUndefined(next),
         'swiper-button_tablet': checkUndefined(tablet)
    }]">
        <AppSvg name="swiper"/>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.swiper-button {
  cursor: pointer;
  width: var(--button-size, 40px);
  height: var(--button-size, 40px);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: .3s;

  &_gray {
    background-color: var(--main-color-4);

    svg {
      fill: var(--text-color-2);
    }
  }

  &_white {
    border: 1px solid var(--main-white);

    svg {
      fill: var(--main-white);
    }
  }

  svg {
    width: 100%;
    height: 100%;
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