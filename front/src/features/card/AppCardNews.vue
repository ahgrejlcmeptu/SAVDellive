<script setup lang="ts">
import {HOST} from "@app/store/block.ts";
import {ref} from "vue";

const props = defineProps(['data'])
const item = ref(props.data.card)
</script>

<template>
    <a class="card-news" :href="'/news/' + item.href">
        <span class="card-news__img">
            <img :src="HOST + item.img.url" :alt="item.name">
        </span>
        <h6 class="card-news__name">{{ item.name }}</h6>
        <p>{{ item.subtitle }}</p>
    </a>
</template>

<style lang="scss">
@use "@style/media";

.card-news {
  display: block;

  &__img {
    border-radius: var(--radius-30);
    overflow: hidden;

    img {
      display: block;
      width: 100%;
    }
  }

  h6 {
    margin: 10px 0;
  }

  p {
    @include media.respond-to(960) {
      font-size: media.sizeREM(15);
    }
  }
}
</style>