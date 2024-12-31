<script setup>
import {computed} from "vue";

const props = defineProps({
    value: String || Number,
    modelValue: String || Number
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
</script>

<template>
    <div
            :class="['app-tabs-item', {'app-tabs-item_active': model === value}]"
            @click="model = value"
    >
        <slot/>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.app-tabs-item {
  cursor: pointer;
  height: 40px;
  border-radius: var(--radius-10);
  width: 10%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: media.sizeREM(15);
  color: var(--text-color-2);

  &_active {
    background: var(--main-color-1);
    color: var(--main-white);
  }
}
</style>