<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";

interface Props {
    value: number
}

const props = defineProps<Props>()
defineEmits(['increment', 'decrement'])

</script>

<template>
    <div class="app-quantity">
        <div class="app-quantity__button app-quantity__button_decrement" v-if="value > 1" @click="$emit('decrement')">
            <AppSvg name="minus"/>
        </div>
        <div class="app-quantity__value text-18">{{value}}</div>
        <div class="app-quantity__button app-quantity__button_increment" @click="$emit('increment')">
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