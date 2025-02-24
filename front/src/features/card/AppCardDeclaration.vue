<script setup lang="ts">
import AppButton from "@spared/AppButton.vue";
import {HOST} from "@app/store/block.ts";

defineProps(['data'])
</script>

<template>
    <div class="card-declaration">
        <img :src="HOST + data.img.url" alt="">
        <div class="text-26">{{ data.title }}</div>
        <div class="text-14">{{ data.description }}</div>
        <app-button v-if="data.link" :href="data.linkHref">{{ data.linkText }}</app-button>
    </div>
</template>

<style lang="scss">
@use '@style/media';

.card-declaration {
  position: relative;
  transition: .3s;
  border-radius: var(--radius-30);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 30px 25px 20px;
  color: var(--main-white);
  z-index: 1;
  @include media.respond-to(960) {
    padding-left: 35px;
    padding-right: 35px;
  }
  @include media.respond-to(640) {}
  @include media.respond-to(360) {
    display: none;
  }

  .text-26 {
    margin-bottom: 15px;
  }

  .btn {
    margin-top: auto;
  }

  img, video {
    z-index: -1;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>