<script setup lang="ts">
import AppPlay from "@spared/AppPlay.vue";

defineProps(['data'])
</script>

<template>
    <div class="card-gallery">
        <img :src="data.img" alt="">
        <AppPlay v-if="data.video"/>
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