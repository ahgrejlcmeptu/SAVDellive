<script setup lang="ts">
interface Props {
    data: {
        id: string | number
        name: string
        description: string
        img: string
    }
}

defineProps<Props>()
</script>

<template>
    <a class="card-news" :href="data.id">
<span class="card-news__img">
    <img :src="data.img" :alt="data.name">
</span>
        <h6 class="card-news__name">{{ data.name }}</h6>
        <p>{{ data.description }}</p>

    </a>
</template>

<style lang="scss">
@use "@style/media";

.card-news {
  display: block;

  &__img {
    border-radius: var(--radius-30);
    overflow: hidden;
    @include media.respond-to(360) {
      border-radius: var(--radius-20);
    }

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