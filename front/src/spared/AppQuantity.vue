<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import {computed} from "vue";

interface Props {
    modelValue: number
}

const props = defineProps<Props>()
const emits = defineEmits(["update:modelValue"])

const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    }
})
const increment = () => {
    model.value++
}
const decrement = () => model.value--
</script>

<template>
    <div class="app-quantity">
        <div class="app-quantity__button app-quantity__button_decrement" v-if="model >= 1" @click="decrement">
            <AppSvg name="minus"/>
        </div>
        <div class="app-quantity__value text-18">{{model}}</div>
        <div class="app-quantity__button app-quantity__button_increment" @click="increment">
            <AppSvg name="plus"/>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.app-quantity {
  display: flex;
  align-items: center;

  &__value {
    width: 35px;
    text-align: center;
    color: var(--text-color-2);
  }

  &__button {
    transition: .3s;
    cursor: pointer;
    width: var(--quantity-button, 24px);
    height: var(--quantity-button, 24px);
    border-radius: 50%;
    background: var(--main-color-2);
    display: flex;
    @include media.hover {
      background: var(--main-color-1);
      svg {
        stroke: var(--main-white);
      }
    }

    &_decrement {
      svg {
        width: 50%;
        height: 8%;
      }
    }

    &_increment {
      svg {
        width: 58%;
        height: 58%;
      }
    }

    svg {
      transition: .3s;
      stroke: var(--text-color-3);
      margin: auto;
    }
  }
}
</style>