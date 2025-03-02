<script setup lang="ts">
import SuccessfullyItem from "@features/successfully/SuccessfullyItem.vue";
import {computed, ref} from "vue";
import type {Successfully} from "@app/utils/interfaces";

const props = defineProps(['status'])

const status = ref<Successfully[]>([
    {
        id: 1,
        value: 'в обработке'
    },
    {
        id: 2,
        img: '/img/successfully-video.jpg',
        video: 'true',
        circle: '/img/successfully-circle.svg',
        value: 'на кухне'
    },
    {
        id: 3,
        value: 'в пути',
    },
    {
        id: 4,
        value: 'доставлен',
    }
])
const active = computed(() => {
    return status.value.find(i => props.status === i.value)?.id
})

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