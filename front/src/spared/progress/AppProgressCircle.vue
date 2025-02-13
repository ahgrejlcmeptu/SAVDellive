<script setup lang="ts">
import {computed} from "vue";

const props = defineProps(['progress'])

const SIZE_C = 143.58201599121094
const value = computed(() => {
    if (props.progress === 100) return SIZE_C * 2
    return Math.ceil(SIZE_C * props.progress / 100)
})
//6.28

</script>

<template>
    <div class="progress-circle" :style="{'--dasharray-progress': value}">
        <span class="text-20">
            <slot></slot>
        </span>
        <svg  viewBox="0 0 48 48">
            <circle ref="svg" cx="24" cy="24" r="23" stroke-width="2" fill="none"/>
        </svg>

    </div>
</template>

<style lang="scss">
.progress-circle {
  --cirlce-size: 48px;
  --dasharray : 143.58201599121094;
  //--dasharray: calc(2 * 3.14 * var(--cirlce-size) - 1.2);
  width: var(--cirlce-size);
  height: var(--cirlce-size);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    border: 1px solid var(--border-color-1);
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
  }

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    //stroke-linecap: round;
    stroke: var(--main-color-1);
    transform: rotate(-90deg);
    //stroke-dasharray: 145.72 150.72
    stroke-dasharray: var(--dasharray-progress) var(--dasharray);
    // 2 * 3,14 * var(--cirlce-size)
  }
}
</style>