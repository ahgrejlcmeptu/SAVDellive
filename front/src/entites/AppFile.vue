<script setup lang="ts">
import AppButton from "@spared/AppButton.vue";
import AppSvg from "@spared/AppSvg.vue";
import {computed, onMounted, ref} from "vue";
import {checkUndefined} from "@app/utils/verification.ts";

const props = defineProps(['value', 'name', 'color', 'placeholder', 'modelValue', 'multiple'])
const emits = defineEmits(['update:modelValue'])
const model = computed({
    get() {
        return props.modelValue || [];
    },
    set(value) {
        emits("update:modelValue", value);
    }
})
const modalValue = computed((): string => model.value.map(({name}) => name).join(', '))
const input = ref(null)

const onChange = (file: any): void => {
    const names = []
    for (let i = 0; i < file.files.length; i++) {
        const item = file.files[i]
        names.push(item)
    }
    model.value = names
}
</script>

<template>
    <div :class="['input-file', color ? 'input-file_' + color : '']">
        <label class="input-file__item">
            <span>{{ modalValue || placeholder }}</span>
            <input ref="input" type="file" :name="name" @change="({target}) => onChange(target)" :multiple="checkUndefined(multiple)">
            <app-button color="light">
                <AppSvg name="download"/>
            </app-button>
        </label>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.input-file {
  --input-height: 50px;

  &_white {
    --input-border: var(--main-white);
  }

  &__item {
    position: relative;
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
    cursor: pointer;

    @include media.hover {
      --input-border: var(--main-color-1);

      .btn {
        --btn-background: var(--main-color-1);
        --btn-color: var(--main-white);
      }
    }

    .btn {
      padding: 0;
      position: absolute;
      top: 5px;
      bottom: 5px;
      right: 5px;
      width: 40px;
      height: auto;
      pointer-events: none;

      svg {
        width: 17px;
        height: 17px;
      }
    }
  }


  input {
    display: none;
  }
}
</style>