<script setup lang="ts">
import AppReviewHeader from "@entites/reviews/AppReviewHeader.vue";

defineProps(['data', 'active'])
</script>

<template>
    <div :class="['card-feedback', {'card-feedback_active': active === '#review-' + data.id}]"
         :id="'review-' + data.id">
        <div class="card-feedback__item card-feedback_review">
            <AppReviewHeader :data="data.review"/>
            <div class="text-15" v-html="data.review.description"></div>
        </div>
        <div class="card-feedback__item card-feedback_ask" v-if="data.ask">
            <AppReviewHeader reverse :data="data.ask"/>
            <div class="text-15" v-html="data.ask.description"></div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-feedback {
  border-radius: var(--radius-30);
  background-color: var(--main-color-6);
  padding: var(--padding-top, 30px) var(--padding-left, 50px);
  @include media.respond-to(640) {
    --padding-top: 20px;
  }
  @include media.respond-to(360) {
    --padding-left: 15px;
  }

  &_active {
      //box-shadow: 0 0 20px rgba(#000, .5);
      filter: drop-shadow(0 0 20px rgba(#000, .2));
  }

  &__item {
    position: relative;
    --pos: calc(100% + var(--padding-left, 50px));

    &:before {
      content: '';
      position: absolute;
      right: var(--pos);
      top: 0;
      border-width: 17px 12px 17px 12px;
      border-style: solid;
      border-color: var(--main-color-6) var(--main-color-6) transparent transparent;
      @include media.respond-to(640) {
        border-width: 14px 9px 14px 9px;
      }
    }
  }

  &_ask {
    margin-top: 20px;
    border-top: 1px solid var(--border-color-2);
    padding-top: 20px;
    text-align: right;

    &:before {
      right: auto;
      left: var(--pos);
      top: 20px;
      transform: scaleX(-1);
    }
  }
}
</style>