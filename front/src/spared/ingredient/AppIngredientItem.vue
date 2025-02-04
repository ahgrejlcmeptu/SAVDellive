<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import {computed} from "vue";
const props = defineProps(['modelValue', 'id'])
const emits = defineEmits(['update:modeValue'])

const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    }
})
const status = computed(() => {
    return model.value[props.id] !== undefined ? model.value[props.id] === true ? 'active' : 'disabled' : null
})
const toggle = (val) => {
    model.value[props.id] == val ? delete model.value[props.id] : model.value[props.id] = val
}
</script>

<template>
    <div :class="['ingredient-item text-15', status]">
        <div class="ingredient-item__del" @click="toggle(false)">
            <AppSvg name="close"/>
        </div>
        <div class="ingredient-item__favorites" @click="toggle(true)">
            <AppSvg name="favorites-2"/>
        </div>
        <span><slot/></span>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.ingredient-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 7px 12px;
  border-radius: var(--radius-8);
  transition: .3s;
  margin-bottom: 2px;
  &:last-child {
    margin-bottom: 0;
  }

  @include media.hover {
    background: var(--main-color-5);
  }

  svg {
    transition: .3s;
  }

  &.active {
    background: var(--main-color-5);
    .ingredient-item__favorites {
      svg {
        fill: var(--main-color-1);
        stroke: var(--main-color-1);
      }
    }
  }
  &.disabled {
    background: var(--main-color-5);
    .ingredient-item__del {
      svg {
        fill: var(--main-color-1);
      }
    }
    span {
      text-decoration: line-through;
    }
  }

  &__del {
    svg {
      width: 12px;
      height: 12px;
      fill: var(--text-color-3);

      @include media.hover {
        fill: var(--main-color-1);
      }
    }
  }

  &__favorites {
    svg {
      width: 14px;
      height: 12px;
      stroke: var(--text-color-3);
      fill: transparent;
      @include media.hover {
        fill: var(--main-color-1);
        stroke: var(--main-color-1);
      }
    }
  }

}
</style>