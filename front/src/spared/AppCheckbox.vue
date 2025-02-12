<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import {computed, ref} from "vue";
import {checkUndefined} from "@app/utils/verification";
import type {Checkbox} from "@app/utils/interfaces";

const props = withDefaults(defineProps<Checkbox>(), {
    type: 'checkbox'
})
const emits = defineEmits(['update:modelValue'])
const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    }
})
const input = ref(null)

</script>

<template>
    <label ref="input" :class="['app-checkbox', {'app-checkbox_required': checkUndefined(required)}]">
        <input :type="type" :name="name" :value="value" v-model="model" :required='checkUndefined(required)'>
        <span class="app-checkbox__box">
            <AppSvg name="check"></AppSvg>
        </span>
        <span class="app-checkbox__text size-14"><slot/></span>
    </label>
</template>

<style lang="scss">
@use "@style/media";

.app-checkbox {
  display: flex;
  gap: 10px;
  cursor: pointer;

  @include media.hover {
    .app-checkbox__box {
      border-color: var(--main-color-1);
      background: var(--main-color-2);
    }
  }

  input {
    display: none;

    &:checked + .app-checkbox__box {
      border-color: var(--main-color-1);
      background: #--main-color-2;
      --svg: block;
    }
  }

  &_required {
    input:not(:checked) + .app-checkbox__box {
      border-color: var(--main-error-2);
    }
  }

  &__box {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    flex-shrink: 0;
    margin-top: 4px;
    border: 1px solid var(--border-color-2);
    display: flex;

    svg {
      display: var(--svg, none);
      width: 9px;
      height: 7px;
      margin: auto;
      fill: var(--main-color-1);
    }
  }

  &__text {
    color: var(--text-color-3);

    a {
      text-decoration: underline;
    }

    //a {
    //  color: var(--main-color-1);
    //  border-color: 1px solid var(--main-color-1);
    //}
  }
}
</style>