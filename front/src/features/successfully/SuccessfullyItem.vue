<script setup lang="ts">
import AppPlay from "@spared/AppPlay.vue";
import type {Successfully} from "@app/utils/interfaces";
import type {PropType} from "vue";

defineProps({
    item: {
        type: Object as PropType<Successfully>,
        required: true
    },
    active: {
        type: Number,
        required: true
    },
    big: {
        type: String
    }
})
</script>

<template>
    <div
            :class="['successfully-item', {'active': active >= item.id, 'successfully-item_big': big}]"
    >
        <div class="successfully-item__circle">
            <template v-if="!big">
                <div class="successfully-item__value">{{ item.id }}</div>
                <div class="successfully-item__name">{{ item.name }}</div>
            </template>
            <template v-else>
                <img class="successfully-item__img" :src="item.img" alt="">
                <img class="successfully-item__text" :src="item.circle" alt="">
                <AppPlay v-if="item.video"/>
            </template>
        </div>
        <div v-if="item.id !== 1" class="successfully-item__progress"></div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.successfully-item {
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  &_big {
    margin: 0 12px;

    + * {
      flex-grow: 0.7;
    }

    .successfully-item__circle {
      --item-size: 122px;
      @include media.respond-to(640) {
        --item-size: 92px;
        --play-size: 30px;
      }
    }

    .successfully-item__name {
      display: none;
    }
  }

  &:first-child {
    flex-grow: 0;
    margin-left: 0;
  }

  &.active {
    .successfully-item__progress {
      background: var(--main-color-1);
    }

    .successfully-item__circle {
      background: var(--main-color-1);
    }

    .successfully-item__value {
      color: var(--main-white);
    }

    .successfully-item__name {
      color: var(--text-color-1)
    }
  }

  &__circle {
    border-radius: 50%;
    width: var(--item-size, 42px);
    height: var(--item-size, 42px);
    background: var(--main-white);
    display: flex;
    position: relative;
    @include media.respond-to(640) {
      --item-size: 32px
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &__text {
    width: 135%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    --translateX: -50%;
    --translateY: -50%;
    animation: rotation 10s linear infinite reverse;
  }

  &__value {
    margin: auto;
    font-weight: 600;
    font-size: media.sizeREM(20);
    color: var(--text-color-2);
    @include media.respond-to(640) {
      font-size: media.sizeREM(14);
    }
  }

  &__name {
    margin-top: 6px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
    text-align: center;
    font-size: media.sizeREM(15);
    white-space: pre-line;
    @include media.respond-to(640) {
      font-size: media.sizeREM(12);
    }
  }

  &__progress {
    border-radius: 3px;
    width: calc(100% + 2px);
    height: 5px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: var(--main-white);
    z-index: -2;
  }
}
</style>