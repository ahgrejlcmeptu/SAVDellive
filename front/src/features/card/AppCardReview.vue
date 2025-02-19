<script setup lang="ts">
import AppReviewHeader from "@entites/reviews/AppReviewHeader.vue";
import {ref} from "vue";

const props = defineProps(['data'])
const review = ref(props.data.review)
</script>

<template>
    <a class="card-review" :href="'/reviews#review-' + data.documentId">
        <AppReviewHeader :data="review"/>
        <div class="card-review__description" v-html="review.description"></div>
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