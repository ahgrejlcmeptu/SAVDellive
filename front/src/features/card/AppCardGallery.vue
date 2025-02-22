<script setup lang="ts">
import AppPlay from "@spared/AppPlay.vue";
import {HOST} from "@app/store/block.ts";
import {thumbnail} from "@app/utils/func.ts";

defineProps(['data'])
</script>

<template>
    <div class="card-gallery">
        <img :src="HOST + thumbnail(data.poster.url)" alt="">
        <AppPlay v-if="data.gallery?.mime"/>
    </div>
</template>

<style lang="scss">
@use "@style/media";
.card-gallery {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-30);
  --play-size: 70px;

  @include media.respond-to(960) {
    --img-height: 426px;
  }
  @include media.respond-to(640) {
    --img-height: 275px;
    --play-size: 50px;
  }
  @include media.respond-to(360) {
    --img-height: 152px;
  }

  img {
    display: block;
    width: 100%;
    height: var(--img-height, 555px);
    object-fit: cover;

  }
}
</style>