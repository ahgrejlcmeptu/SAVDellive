<script setup lang="ts">
import type {Input} from "@app/utils/interfaces";
import {vMaska} from "maska/vue"
import {computed, ref} from "vue";

const props = withDefaults(defineProps<Input>(), {
    type: 'text'
})

const emits = defineEmits(['update:modelValue'])
const isFocus = ref(false)
const options = ref({
    phone: {
        mask: "+7(9##)##-##-###",
    },
    test: {
        mask: '+7 %## ### ## ##',
        eager: true,
        tokens: {
            '%': {
                pattern: /[1-6]|[9]/,
            },
        },
    }
})
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
    <div :class="['input', {'input_focus': isFocus || model}, color ? 'input_' + color : '']">
        <div class="input__item">
            <div class="input__label" v-if="label">{{ label }}</div>
            <template v-if="!mask">
            <textarea
                    v-if="type === 'textarea'"
                    :name="name"
                    :placeholder="placeholder"
                    v-model.trim="model"
                    @focus="onFocus"
                    @blur="onBlur"
                    :readonly="readonly"
            ></textarea>
                <input
                        v-else
                        :type="type"
                        :name="name"
                        :placeholder="placeholder"
                        v-model.trim="model"
                        @focus="onFocus"
                        @blur="onBlur"
                        :readonly="readonly"
                >
            </template>
            <input
                    v-else
                    :type="type"
                    :name="name"
                    :placeholder="placeholder"
                    v-model.trim="model"
                    @focus="onFocus"
                    @blur="onBlur"
                    v-maska="options[mask]"
            >
        </div>
        <div class="input__error" v-if="error">{{ error }}</div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.input {
  --input-height: 50px;

  &_white {
    --input-border: var(--main-white);
  }

  &__item {
    position: relative;
    @include media.hover {
      --input-border: var(--main-color-1)
    }
  }

  &__label {
    z-index: 1;
    position: absolute;
    font-size: media.sizeREM(15);
    left: 20px;
    top: calc(var(--input-height) / 2);
    transform: translateY(-50%);
    color: var(--text-color-2);
    transition: .3s;
    pointer-events: none;
  }

  input, textarea {
    background: transparent;
    width: 100%;
    height: var(--input-height);
    border-radius: var(--radius-10);
    border: 1px solid var(--input-border, var(--border-color-2));
    padding: 15px 20px;
    display: block;
    transition: .3s;
    outline: none;
    color: var(--text-color-2);
    font-size: media.sizeREM(15);
    background: var(--main-white);

    &::placeholder {
      color: var(--text-color-2);
    }
  }

  textarea {
    height: 120px;
    resize: none;
  }

  &__error {
    font-size: 12px;
    color: var(--main-error-2);
    margin-top: 3px;
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

    input, textarea {
      background: var(--main-color-2);
      border-color: var(--main-color-1);
    }
  }
}
</style>