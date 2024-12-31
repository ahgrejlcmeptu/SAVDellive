<script setup lang="ts">
import type {Radio} from "@app/utils/interfaces.ts";
import {computed} from "vue";

const props = defineProps<Radio>()
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
    <label :class="['radio', {'radio_active': model === value}]">
        <input type="radio" :name="name" :value="value" v-model="model" :readonly="readonly">
        <span class="radio__box"></span>
        <span class="radio__wrap"><slot/></span>
    </label>
</template>

<style lang="scss">
@use "@style/media";

.radio {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  cursor: pointer;
  color: var(--text-color-3);
  font-size: media.sizeREM(15);
  border-radius: var(--radius-8);

  input {
    display: none;
  }

  &__box {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid var(--border-color-2);
    position: relative;
  }

  &_active {
    background: var(--main-color-5);
    color: var(--main-color-1);

    .radio__box {
      &:before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--main-color-1);
      }
    }
  }
}
</style>