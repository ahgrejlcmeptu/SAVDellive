<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps(['modelValue', 'name', 'value'])
const emits = defineEmits(['update:modelValue'])
const input = ref(null)
const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    }
})
</script>

<template>
    <label :class="['app-catalog-tab', {active: input?.checked}]">
        <input ref="input" type="radio" :name :value v-model="model"/>
        <slot></slot>
    </label>
</template>

<style lang="scss">
@use "@style/media";

.app-catalog-tab {
  display: block;
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