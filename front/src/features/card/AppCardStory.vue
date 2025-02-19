<script setup lang="ts">
import {HOST} from "@app/store/block.ts";

defineProps(['data'])
</script>

<template>
    <component :is="data.href ? 'a' : 'div'" :href="data.href" target="_blank" class="card-story">
        <div class="card-story__img">
            <img :src="HOST + data.img.url" :alt="data.name">
        </div>
        <div class="card-story__name">{{ data.name }}</div>
    </component>
</template>

<style lang="scss">
@use "@style/media";

.card-story {
  cursor: pointer;
  width: var(--size, 120px);
  text-align: center;
  position: relative;
  margin-bottom: media.sizeREM(54);

  &__img {
    width: 100%;
    height: var(--size, 120px);
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--main-color-1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    position: absolute;
    top: 100%;
    margin-top: 10px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
      max-width: calc(var(--size) + 30px);
  }
}
</style>