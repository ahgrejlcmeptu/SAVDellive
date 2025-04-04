<script setup lang="ts">
import {computed} from "vue";
import {checkUndefined} from "@app/utils/verification.ts";

type Color = 'main' | 'gray'

interface Props {
    type?: string;
    full?: string;
    size?: string;
    href?: string;
    color?: Color | undefined;
    disabled?: boolean | undefined
    wait?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    color: 'main'
})
const emits = defineEmits(['action'])

const color = computed(() => 'btn_' + props.color)
const onClick = (event: Event) => {
    if (props.disabled) return;
    emits('action', event)
}
</script>

<template>
    <button
            :type="type"
            :class="['btn', color, {'btn_full': checkUndefined(full), 'btn_big': size === 'big', 'btn_wait': wait}]"
            @click="onClick"
            :disabled="disabled"
            v-if="!href"
    >
        <slot/>
    </button>
    <a :class="['btn', color, {'btn_full': checkUndefined(full), 'btn_big': size === 'big'}]" :href="href" v-else>
        <slot/>
    </a>
</template>

<style lang="scss">
@use "@style/media";

.btn {
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  outline: none;
  border: none;
  height: 40px;
  border-radius: var(--radius-10);
  font-weight: 500;
  transition: .3s;
  background-color: var(--btn-background, transparent);
  border-color: var(--btn-border, transparent);
  color: var(--btn-color);
  padding: 0 var(--btn-paddin, 30px);
  fill: currentColor;
  stroke: currentColor;
  @include media.respond-to(360) {
    font-size: media.sizeREM(15);
  }

  @include media.hover {
    --btn-background: var(--btn-background-hover);
    --btn-border: var(--btn-border-hover);
    --btn-color: var(--btn-color-hover)
  }

  &:disabled {
    opacity: .5;
    filter: grayscale(1);
    cursor: no-drop;
  }

  &_wait {
    cursor: wait!important;
  }

  &_full {
    width: 100%;
    display: flex;
  }

  &_big {
    @include media.respond-from(640) {
      height: 50px;
      font-size: 1rem;
    }
  }

  &_main {
    --btn-background: var(--main-color-1);
    --btn-color: var(--main-white);
    --btn-background-hover: var(--main-color-1-hover);
    --btn-color-hover: var(--main-white);
  }

  &_gray {
    --btn-background: var(--border-color-2);
    --btn-color: var(--text-color-3);
    --btn-background-hover: var(--main-color-1);
    --btn-color-hover: var(--main-white);
  }

  &_light {
    --btn-background: var(--main-color-2);
    --btn-color: var(--text-color-3);
    --btn-background-hover: var(--main-color-1);
    --btn-color-hover: var(--main-white);
  }

  &_border {
    border-width: 1px;
    border-style: solid;
    --btn-border: var(--border-color-2);
    --btn-color: var(--text-color-3);
    --btn-background-hover: var(--main-color-1);
    --btn-border-hover: var(--main-color-1);
    --btn-color-hover: var(--main-white);
  }
}
</style>