<script setup lang="ts">
defineProps(['data'])
</script>

<template>
    <div class="article">
        <div class="article__img">
            <img :src="data.img" alt="">
        </div>
        <div class="article__description text-16" v-html="data.description"></div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.article {
  &:after {
    content: '';
    display: table;
    clear: both;
  }

  &__img {
    float: left;
    margin-bottom: 10px;
    margin-right: 30px;
    max-width: 50%;
    @include media.respond-to(960) {
      margin-right: 20px;
    }
    @include media.respond-to(640) {
      width: 100%;
      max-width: none;
      margin-right: 0;
      margin-bottom: 20px;
    }

    img {
      display: block;
      max-width: 100%;
      border-radius: var(--radius-20);
    }
  }

  p {
    margin-bottom: 0.8em;
  }

}
</style>