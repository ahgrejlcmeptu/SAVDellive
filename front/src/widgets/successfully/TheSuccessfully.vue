<script setup lang="ts">
import {ref} from "vue";
import type {Successfully} from "@app/utils/interfaces";

const status = ref<Successfully[]>([
    {
        id: 1,
        name: 'Заказ на кухне'
    },
    {
        id: 2,
        name: 'Заказ передан курьеру'
    },
    {
        id: 3,
        name: 'Заказ\n' +
            'в пути'
    },
    {
        id: 4,
        name: 'Заказ доставлен'
    }
])
</script>

<template>
    <div class="successfully">
        <div
                v-for="(item, idx) in status"
                :key="item.id"
                class="successfully-item"
        >
            <div class="successfully-item__value">{{ idx + 1 }}</div>
            <div class="successfully-item__name">{{ item.name }}</div>
            <div v-if="idx < status.length -1" class="successfully-item__progress"></div>
        </div>
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
  z-index: 1;
  position: relative;

  &-item {
    border-radius: 50%;
    width: var(--item-size, 42px);
    height: var(--item-size, 42px);
    background: var(--main-white);
    display: flex;
    position: relative;

    &__value {
      margin: auto;
      font-weight: 600;
      font-size: sizeREM(20);
      color: var(--text-color-2);
    }

    &__name {
      margin-top: 6px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      text-align: center;
      font-size: sizeREM(15);
      white-space: pre-line;
    }

    &__progress {
      width: 200px;
      height: 5px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%);
      background: var(--main-white);
      z-index: -2;
    }
  }
}
</style>