<script setup lang="ts">
interface Props {
    data: {
        id: number | string
        img: string
        name: string
    }
}

defineProps<Props>()
</script>

<template>
    <div class="card-story">
        <div class="card-story__img">
            <img :src="data.img" :alt="data.name">
        </div>
        <div class="card-story__name">{{ data.name }}</div>
    </div>
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