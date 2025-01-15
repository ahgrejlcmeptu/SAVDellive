<script setup lang="ts">
import SuccessfullyItem from "@features/successfully/SuccessfullyItem.vue";
import {ref} from "vue";
import type {Successfully} from "@app/utils/interfaces";

const status = ref<Successfully[]>([
    {
        id: 1,
        name: 'Заказ\n\ на кухне',
        img: '/img/successfully-video.jpg',
        video: 'true',
        circle: '/img/successfully-circle.svg',
    },
    {
        id: 2,
        name: 'Заказ передан курьеру'
    },
    {
        id: 3,
        name: 'Заказ\n\ в пути'
    },
    {
        id: 4,
        name: 'Заказ доставлен'
    }
])
const active = ref<number>(3)

</script>

<template>
    <div class="successfully">
        <SuccessfullyItem
                v-for="(item, idx) in status"
                :key="item.id"
                :item="item"
                :active="active"
                :big="item.img"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.successfully {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(86.86deg, var(--gradient));
  border-radius: var(--radius-30);
  height: 200px;
  padding: 0 70px 15px;
  position: relative;
  z-index: 1;

  &-item {
    position: relative;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;

    &_big {
      margin: 0 12px;

      .successfully-item__circle {
        --item-size: 122px;
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
    }

    &__value {
      margin: auto;
      font-weight: 600;
      font-size: media.sizeREM(20);
      color: var(--text-color-2);
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
}
</style>