<script setup lang="ts">
import AppSection from "@spared/AppSection.vue";
import {HOST} from "@app/store/block";

defineProps(['data'])
</script>

<template>
    <app-section class="block-color mb-100">
        <div class="about">
            <div class="about__body">
                <h2>{{ data.title }}</h2>
                <div class="about__description" v-html="data.description"></div>
            </div>
            <div class="about__img">
                <img :src="HOST + data.img.url" alt="">
            </div>
        </div>
    </app-section>
</template>

<style lang="scss">
@use "@style/media";

.about {
  position: relative;
  padding: 100px 0;
  min-height: 570px;
  @include media.respond-to(960) {
    padding: 50px 0;
    min-height: 510px;
  }
  @include media.respond-to(640) {
    font-size: media.sizeREM(15);
    min-height: auto;
  }
  @include media.respond-to(360) {
    padding: 40px 0;
  }

  &__body {
    width: 58%;
    @include media.respond-to(640) {
      width: 100%;
    }

    *:last-child {
      margin-bottom: 0;
    }

    h2 {
      margin-bottom: 30px;
      @include media.respond-to(360) {
        margin-bottom: 20px;
      }
    }

    p {
      margin-bottom: 40px;
      line-height: 1.6;
      @include media.respond-to(960) {
        margin-bottom: 30px;
      }
      @include media.respond-to(360) {
        margin-bottom: 20px;
      }
    }
  }

  &__img {
    position: absolute;
    bottom: 0;
    right: -80px;
    z-index: 1;
    overflow: hidden;
    width: 472px;
    @include media.respond-to(960) {
      width: 440px;
    }
    @include media.respond-to(640) {
      display: none;
    }

    &:before {
      width: 472px;
      height: 472px;
      border-radius: 50%;
      background-color: var(--main-color-1);
      content: '';
      position: absolute;
      z-index: -1;
      left: 50%;
      bottom: -55px;
      transform: translateX(-50%);
      @include media.respond-to(960) {
        width: 440px;
        height: 440px;
      }
    }

    img {
      max-width: 100%;
      width: 443px;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>