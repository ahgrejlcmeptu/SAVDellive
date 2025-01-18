<script setup lang="ts">
import AppPlay from "@spared/AppPlay.vue";
import {checkUndefined} from "@app/utils/verification.ts";

defineProps<{
    data: object,
    reverse?: string
}>()
</script>

<template>
    <div :class="['review-header', {'review-header_reverse': checkUndefined(reverse)}]">
        <div class="review-header__img">
            <img :src="data.img" :alt="data.name">
            <AppPlay v-if="data.video"/>
        </div>
        <div class="review-header__right">
            <div class="review-header__name">{{ data.name }}</div>
            <time class="text-11" :datetime="data.date">{{ data.date }}</time>
        </div>
    </div>
</template>

<style lang="scss">
.review-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;

  &_reverse {
    flex-direction: row-reverse;
  }

  time {
    color: var(--text-color-3);
  }

  .app-play {
    top: 100%;
    left: 100%;
    --play-size: 25px;
    --play-transform: -100%;
  }

  &__img {
    position: relative;

    img {
      width: var(--size, 64px);
      height: var(--size, 64px);
      border-radius: 50%;
      display: block;
    }
  }
}
</style>