<script setup lang="ts">
import {computed, ref, onMounted} from "vue";
import AppSvg from "@spared/AppSvg.vue";
import type {Select} from "@app/utils/interfaces.ts";
import {closeTheWindow} from "@app/utils/closeTheWindow.ts";

const select = ref(null)
const isOpen = ref(false)


const props = defineProps<Select>()

const emits = defineEmits(['update:modelValue'])
const model = computed({
    get() {
        return props.modelValue || null;
    },
    set(value) {
        emits("update:modelValue", value);
    }
})
onMounted(() => {
    closeTheWindow('select', select.value, () => isOpen.value = false)
})
</script>

<template>
    <div ref="select" :class="['select', {'select_show': isOpen}]">
        <div class="select__header" @click="isOpen = !isOpen">
            <span>{{ model || placeholder }}</span>
            <AppSvg name="dropdown"/>
        </div>
        <div class="select__body" v-if="isOpen">
            <div class="select__scroll scroll-container" @click="isOpen = false">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.select {
  position: relative;

  &__header {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 50px;
    border: 1px solid var(--border-color-2);
    border-radius: var(--radius-10);
    justify-content: space-between;
    gap: 5px;
    padding: 0 20px;
    font-size: media.sizeREM(15px);
    color: var(--text-color-2);

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    svg {
      width: 13px;
      height: 7px;
      stroke: var(--text-color-2);
    }
  }

  &__body {
    margin-top: 5px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 15px 10px;
    border-radius: var(--radius-10);
    border: 1px solid var(--border-color-2);
    background: var(--main-white);
    z-index: 2;
  }

  &__scroll {
    max-height: 160px;
  }

  &_show {
    .select__header {
      color: var(--main-color-1 );
      svg {
        transform: rotate(180deg);
        stroke: var(--main-color-1);
      }
    }
  }
}
</style>