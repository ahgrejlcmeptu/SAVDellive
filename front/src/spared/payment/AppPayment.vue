<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import type {Radio} from "@app/utils/interfaces";
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
        <span class="payment__wrap"><slot/></span>
        <span class="payment__box" v-if="model === value">
            <AppSvg name="check"/>
        </span>
    </label>
</template>

<style lang="scss">
@use "@style/media";

.payment {
  width: 10%;
  flex-grow: 1;
  cursor: pointer;
  display: block;
  border-radius: var(--radius-10);
  position: relative;
  border: 1px solid var(--border-color-2);
  font-size: media.sizeREM(13);
  color: var(--text-color-2);
  padding: 0 10px;

  &__wrap {
    height: 98px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    svg {
      width: 35px;
      height: 31px;
      fill: var(--color-icon, var(--text-color-2));
      stroke: var(--color-icon, var(--text-color-2));
    }
  }

  &__box {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--main-color-1);
    right: 10px;
    top: -10px;
    display: flex;

    svg {
      margin: auto;
      width: 11px;
      height: 8px;
      fill: var(--main-white);
    }
  }

  &_active {
    border-color: var(--main-color-1);
    color: var(--text-color-1);
    background: var(--main-color-2);
    --color-icon: var(--main-color-1)
  }

  input {
    display: none;
  }
}
</style>