<script setup lang="ts">
import {onMounted, ref} from "vue";
import {closeTheWindow} from "@app/utils/closeTheWindow.ts";

const tooltip = ref(null)
const isOpen = ref(false)

onMounted(() => {
    closeTheWindow('tooltip', tooltip.value, () => isOpen.value = false)
})
</script>

<template>
    <div ref="tooltip" class="tooltip">
        <div @click="isOpen = !isOpen" class="tooltip__btn">
            <slot name="btn"/>
        </div>
        <transition>
            <div class="tooltip__body" v-if="isOpen">
                <slot/>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.tooltip {
  position: relative;

  &.full {
    .tooltip__btn svg {
      background: var(--main-color-2);
      stroke: var(--main-color-1);
      border: none;
    }
  }

  &__btn {
    cursor: pointer;

    svg {
      display: block;
      width: var(--tooltip-size, 22px);
      height: var(--tooltip-size, 22px);
      border-radius: 50%;
      border: 1px solid var(--text-color-3);
      stroke: var(--text-color-3);
    }
  }

  &__body {
    z-index: 2;
    position: absolute;
    padding: 25px;
    background: var(--main-white);
    border-radius: var(--radius-20);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    left: -40px;
    bottom: 100%;
    margin-bottom: 20px;
    width: 376px;
    max-width: 100vw;

    @include media.respond-to(640) {
      left: calc(var(--conteiner-padding) * -1);
      padding: 20px var(--conteiner-padding);
    }

    &:before {
      content: '';
      position: absolute;
      top: 100%;
      left: 35px;
      border-width: 15px;
      border-style: solid;
      border-color: var(--main-white) transparent transparent transparent;
      @include media.respond-to(640) {
        left: calc(var(--conteiner-padding) - 1px);
      }
    }

    h6 {
      font-size: media.sizeREM(14);
      font-weight: 700;
      margin-bottom: 8px;

      span {
        color: var(--main-color-1)
      }
    }

    p {
      font-weight: 500;
      font-size: media.sizeREM(14);
      line-height: 150%;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: underline;
      }
    }
  }
}
</style>