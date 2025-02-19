<script setup lang="ts">
import {HOST} from "@app/store/block.ts";

interface Props {
    data: {
        name: string;
        amount: string;
        img: string;
        all?: boolean
        href?: string
    };

}

defineProps<Props>()
</script>

<template>
    <a v-if="!data.all" :href="'/catalog?categories=' + data.name" class="card-category">
        <div class="text-16">{{ data.name }}</div>
        <p class="text-15">{{ data.amount }}</p>
        <img :src="HOST + data.img.url" alt="">
    </a>
    <a v-else class="card-category card-category_full" :href="data.href">
        <span class="text-16">{{ data.name }}</span>
    </a>
</template>

<style lang="scss">
.card-category {
  display: block;
  overflow: hidden;
  border-radius: var(--radius-30);
  padding: 25px;
  position: relative;
  border: 1px solid var(--border-color-1);

  p {
    color: var(--text-color-3);
    margin-top: 5px;
  }

  &_full {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-color-1);
    border-color: var(--main-color-1);
    span {
        color: var(--main-white);
    }
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>