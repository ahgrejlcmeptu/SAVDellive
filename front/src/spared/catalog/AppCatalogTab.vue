<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps(['modelValue', 'value'])
const emits = defineEmits(['update:modelValue'])
// const input = ref(null)
const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    }
})
const change = () => model.value !== props.value ? model.value = props.value : model.value = null
</script>

<template>
    <div :class="['app-catalog-tab', {active: value === model}]" @click="change">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.app-catalog-tab {
  cursor: pointer;
  padding: 6px 23px;
  border-radius: var(--radius-20);
  background: var(--main-color-2);
  transition: .3s;

  input {
    display: none;
  }

  @include media.hover {
    background: var(--main-color-1-hover);
    color: var(--main-white);
  }

  &.active {
    background: var(--main-color-1);
    color: var(--main-white);
  }
}
</style>