<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import {HOST} from "@app/store/block.ts";
import {ref} from "vue";
import {thumbnail} from "@app/utils/func.ts";

const props = defineProps(['data', 'item', 'last'])
const link = ref(props.data.link && props.last)
// thumbnail
</script>

<template>
    <component :is="link ? 'a' : 'div'" :href="data.link" target="_blank" :class="['card-social', {'card-social_dark': link}]">
        <img class="card-social__img" :src="HOST + thumbnail(item.url)" alt="">

        <template v-if="link && data.linkImg">
            <img :src="HOST + data.linkImg.url" alt="" class="card-social__text">
            <span class="card-social__link">
                <AppSvg name="link-arr"/>
            </span>
        </template>
    </component>
</template>

<style lang="scss">
@use "@style/media";

.card-social {
  display: block;
  cursor: pointer;
  border-radius: var(--radius-30);
  overflow: hidden;
  position: relative;
  padding-top: 100%;

  &_dark {
    &:before {
      --opacity: 1;
    }
  }

  @include media.hover {
    --svg-color: var(--main-color-1);
    --opacity: 1;
  }

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    top: 0;
    left: 0;
  }

  &__link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    svg {
      width: 32px;
      height: 32px;
      display: block;
      transition: .3s;
      fill: var(--svg-color, var(--main-white));
      @include media.respond-to(360) {
        width: 22px;
        height: 22px;
      }
    }
  }

  &__text {
    position: absolute;
    width: 56%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    --translateX: -50%;
    --translateY: -50%;
    animation: rotation 10s linear infinite reverse;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    background: rgba(#000, .5);
    z-index: 1;
    opacity: var(--opacity, 0);
    transition: .3s;
  }
}
</style>