<script setup lang="ts">
import AppPlay from "@spared/AppPlay.vue";

interface Props {
    data: {
        id: string | number
        name: string
        date: string | number
        description: string
        img?: string
        video?: string
    },
}

defineProps<Props>()
</script>

<template>
    <div class="card-review">
        <div class="card-review__header">
            <div class="card-review__img">
                <img :src="data.img" :alt="data.name">
                <AppPlay v-if="data.video"/>
            </div>
            <div class="card-review__right">
                <div class="card-review__name">{{ data.name }}</div>
                <time :datetime="data.date">{{ data.date }}</time>
            </div>
        </div>
        <p class="card-review__description">{{ data.description }}</p>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-review {
  border-radius: var(--radius-30);
  background-color: var(--main-color-4);
  padding: 30px 40px;
  @include media.respond-to(640) {
    font-size: media.sizeREM(15);
  }

  .app-play {
    top: 100%;
    left: 100%;
    --play-size: 25px;
    --play-transform: -100%;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;

    time {
      font-size: media.sizeREM(11);
      color: var(--text-color-3);
    }
  }

  &__img {
    position: relative;

    img {
      width: var(--size, 64px);
      height: var(--size, 64px);
      border-radius: 50%;
      display: block;
    }
  }

  &__description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>