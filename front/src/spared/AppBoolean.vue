<script setup lang="ts">
import type {Boolean} from "@app/utils/interfaces.ts";
import {computed} from "vue";

const props = defineProps<Boolean>()

const emits = defineEmits(['update:modelValue'])
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
    <label :class="['boolean', {'boolean_active': model}]">
        <input type="checkbox" :name="name" v-model="model">
    </label>
</template>

<style lang="scss">
.boolean {
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: var(--radius-20);
  background: var(--text-color-4);
  transition: .3s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--main-white);
    transition: .3s;
  }

  &_active {
    background: var(--main-color-1);

    &:before {
      transform: translate(100%, -50%);
    }
  }

  input {
    display: none;
  }
}
</style>