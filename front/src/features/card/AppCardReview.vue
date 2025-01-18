<script setup lang="ts">
import AppReviewHeader from "@entites/reviews/AppReviewHeader.vue";

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
    <a class="card-review" :href="'/reviews#review-' + data.id">
        <AppReviewHeader :data="data"/>
        <p class="card-review__description">{{ data.description }}</p>
    </a>
</template>

<style lang="scss">
.card-review {
  display: block;
  border-radius: var(--radius-30);
  background-color: var(--main-color-4);
  padding: 30px 40px;

  &__description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>