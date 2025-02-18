<script setup lang="ts">
import {popupOpen} from "@app/store/popup";
import {basketTotal} from "@app/store/basket";
import {presents, presentsSteps} from "@app/store/present";
import {useStore} from "@nanostores/vue";
import {computed, onMounted, ref} from "vue";

const presentBar = ref(null)
const $presents = useStore(presents)
const $basketTotal = useStore(basketTotal)
const $presentsSteps = useStore(presentsSteps)
const progress = computed(() => {
    return $basketTotal.value * 100 / $presentsSteps.value.max
})
const active = computed(() => $basketTotal.value > $presentsSteps.value.min)

onMounted(() => {
    if (active.value) setTimeout(() => popupOpen('present'), 500)
})
</script>

<template>
    <div ref="presentBar" v-if="Object.keys($presents).length" class="present-bar" @click="popupOpen('present')"
         :style="{'--present-progress': progress + '%'}">
        <div :class="['present-bar__btn', {active}]">
            <svg viewBox="0 0 62 62">
                <path d="M19.7861 30.0852V39.0881C19.7861 39.9164 20.4599 40.5886 21.2866 40.5886H28.7891V30.0852H19.7861Z"/>
                <path d="M40.7925 24.0842H36.0449C36.3855 23.8516 36.6781 23.6205 36.8822 23.4134C38.0931 22.1965 38.0931 20.2159 36.8822 18.999C35.7058 17.8136 33.6562 17.8166 32.4813 18.999C31.8301 19.6517 30.1045 22.3091 30.3431 24.0842H30.235C30.4721 22.3091 28.7466 19.6517 28.0968 18.999C26.9205 17.8166 24.8708 17.8166 23.6959 18.999C22.4865 20.2159 22.4865 22.1965 23.6944 23.4134C23.9 23.6205 24.1926 23.8516 24.5332 24.0842H19.7856C18.9589 24.0842 18.2852 24.7579 18.2852 25.5846V27.8354C18.2852 28.2495 18.6213 28.5856 19.0354 28.5856H28.7886V25.5846H31.7896V28.5856H41.5427C41.9569 28.5856 42.293 28.2495 42.293 27.8354V25.5846C42.293 24.7579 41.6207 24.0842 40.7925 24.0842ZM28.7 24.0346C28.7 24.0346 28.637 24.0842 28.4225 24.0842C27.3856 24.0842 25.4065 23.0068 24.7598 22.3556C24.1311 21.7224 24.1311 20.69 24.7598 20.0568C25.0644 19.7507 25.468 19.5827 25.8971 19.5827C26.3248 19.5827 26.7284 19.7507 27.033 20.0568C28.0443 21.0742 29.0497 23.673 28.7 24.0346ZM32.1542 24.0842C31.9411 24.0842 31.8781 24.0361 31.8781 24.0346C31.5285 23.673 32.5338 21.0742 33.5451 20.0568C34.1498 19.4461 35.2077 19.4431 35.8184 20.0568C36.4486 20.69 36.4486 21.7224 35.8184 22.3556C35.1717 23.0068 33.1925 24.0842 32.1542 24.0842Z"/>
                <path d="M31.791 30.0854V40.5889H39.2935C40.1217 40.5889 40.7939 39.9166 40.7939 39.0884V30.0854H31.791Z"/>
            </svg>
        </div>
        <div class="present-bar__progress">
            <div class="present-bar__line">
                <div class="present-bar__separators"></div>
                <div class="present-bar__separators"></div>
                <div class="present-bar__separators"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.present-bar {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  &__btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--main-color-2);
    position: relative;
    color: var(--text-color-3);
    fill: currentColor;
    transition: .3s;
    @include media.respond-to(360) {
      width: 50px;
      height: 50px;
    }

    @include media.hover {
      background: var(--main-color-1);
      color: var(--main-white);
    }

    &.active {
      background: var(--main-color-1);
      color: var(--main-white);

      @include media.hover {
        background: var(--main-color-1-hover);
      }
    }

    svg {
      width: 100%;
      height: 100%;
      stroke: none;
    }
  }

  &__progress {
    background: var(--main-white);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: var(--radius-15);
    width: 40px;
    height: 378px;
    display: flex;
    margin: auto;
    @include media.respond-to(960) {
      display: none;
    }
  }

  &__line {
    overflow: hidden;
    position: relative;
    margin: auto;
    background: var(--main-color-8);
    width: 10px;
    height: 328px;
    border-radius: var(--radius-10);

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: var(--present-progress);
      background: var(--main-color-1);
      max-height: 100%;
      transition: .3s;
      border-radius: inherit;
    }
  }

  &__separators {
    position: absolute;
    left: 0;
    width: 100%;
    background: var(--main-color-9);
    height: 1px;
    transform: translateY(50%);

    &:nth-child(1) {
      bottom: 25%;
    }

    &:nth-child(2) {
      bottom: 50%;
    }

    &:nth-child(3) {
      bottom: 75%;
    }
  }
}
</style>