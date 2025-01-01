<script setup lang="ts">
import AppInput from "@spared/AppInput.vue";
import AppButton from "@spared/AppButton.vue";
import IconSubmit from "@spared/icons/IconSubmit.vue";
import type {Input} from "@app/utils/interfaces.ts";
import {computed, ref} from "vue";

const emits = defineEmits(['update:modelValue', 'action'])
const props = defineProps<Input>()
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
    <div class="input-submit">
        <div class="input-submit__item">
            <AppInput  v-model="model" :label="label"/>
            <app-button color="gray" @action="$emit('action')">
                <IconSubmit/>
            </app-button>
        </div>
    </div>
</template>

<style lang="scss">
.input-submit {
  &__item {
    position: relative;
  }

  .input input {
    padding-right: 50px;
  }

  .btn {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    padding: 0;

    svg {
      width: 11px;
      height: 10px;
    }
  }
}
</style>