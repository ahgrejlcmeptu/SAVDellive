<script setup lang="ts">
interface Props {
    className?: string;
    data: {
        name: string;
        amount: string;
        img: string;
        href: string;
        all: boolean
    };

}

defineProps<Props>()
</script>

<template>
    <a :href="data.href" :class="['card-category', className, {'card-category_full': data.all}]">
        <template v-if="!data.all">
            <div class="text-16">{{ data.name }}</div>
            <p class="text-15">{{ data.amount }}</p>
            <img :src="data.img" alt="">
        </template>
        <template v-else>
            <div class="text-16">{{ data.name }}</div>
        </template>
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
    color: var(--main-white);
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>