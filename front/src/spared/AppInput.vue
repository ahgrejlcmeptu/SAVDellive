<script setup lang="ts">
import type {Input} from "@app/utils/interfaces.ts";
import {computed, ref} from "vue";

const props = withDefaults(defineProps<Input>(), {
    type: 'text'
})

const emits = defineEmits(['update:modelValue'])
const isFocus = ref(false)
const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    }
})
const onFocus = () => isFocus.value = true
const onBlur = () => isFocus.value = false
</script>

<template>
    <div :class="['input', {'input_focus': isFocus || model}]">
        <div class="input__item">
            <div class="input__label" v-if="label">{{ label }}</div>
            <input
                    :type="type"
                    :name="name"
                    :placeholder="placeholder"
                    v-model.trim="model"
                    @focus="onFocus"
                    @blur="onBlur"
                    :readonly="readonly"
            >
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.input {

  .input__item {
    position: relative;
  }

  &__label {
    z-index: 1;
    position: absolute;
    font-size: media.sizeREM(15);
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-color-2);
    transition: .3s;
    pointer-events: none;
  }

  input {
    background: transparent;
    width: 100%;
    height: 50px;
    border-radius: var(--radius-10);
    border: 1px solid var(--border-color-2);
    padding: 15px 20px;
    display: block;
    transition: .3s;
    outline: none;
    color: var(--text-color-2);
    font-size: media.sizeREM(15);

    &::placeholder {
      color: var(--text-color-2);
    }
  }

  &_focus {
    .input__label {
      top: 0;
      font-size: media.sizeREM(12);

      &:before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 50%;
        left: -5px;
        right: -5px;
        height: 1px;
        background: var(--main-color-2);
      }
    }

    input {
      background: var(--main-color-2);
      border-color: var(--main-color-1);
    }
  }
}
</style>