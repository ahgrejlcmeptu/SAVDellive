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
    <label :class="['payment', {'payment_active': model === value}]">
        <input type="radio" :name="name" :value="value" v-model="model">
        <slot/>
        <span class="payment__box" v-if="model === value"></span>
    </label>
</template>

<style lang="scss">
@use "@style/media";

.payment {
  width: 10%;
  flex-grow: 1;
  cursor: pointer;
  display: flex;
  border-radius: var(--radius-10);
  position: relative;
  border: 1px solid var(--border-color-2);
  text-align: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 100px;
  font-size: media.sizeREM(13);
  color: var(--text-color-2);
  padding: 0 10px;

  &__box {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--main-color-1);
    right: 10px;
    top: -10px;
  }

  &_active {
    border-color: var(--main-color-1);
    color: var(--text-color-1);
    background: var(--main-color-2);
  }

  input {
    display: none;
  }
}
</style>