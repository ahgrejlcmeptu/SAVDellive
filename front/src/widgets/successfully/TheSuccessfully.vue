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
        name: 'Заказ передан\n\ курьеру'
    },
    {
        id: 3,
        name: 'Заказ\n\ в пути'
    },
    {
        id: 4,
        name: 'Заказ\n\ доставлен'
    }
])
const active = ref<number>(3)

</script>

<template>
    <div class="scroll-container_x">
        <div class="successfully">
            <SuccessfullyItem
                    v-for="item in status"
                    :key="item.id"
                    :item="item"
                    :active="active"
                    :big="item.img"
            />
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
  position: relative;
  z-index: 1;
  @include media.respond-to(960) {
    padding: 0 55px 10px;
  }
  @include media.respond-to(640) {
    padding: 0 40px;
    height: 174px;
  }
  @include media.respond-to(360) {
    min-width: 620px;
  }
}
</style>