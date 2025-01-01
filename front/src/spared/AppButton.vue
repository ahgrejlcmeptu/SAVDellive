<script setup lang="ts">
import {computed} from "vue";
import {checkUndefined} from "@app/utils/verification.ts";

type Color = 'main' | 'gray'
interface Props {
    type?: string;
    full?: string;
    color?: Color | undefined;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    color: 'main'
})
defineEmits(['action'])

const color = computed(() => 'btn_' + props.color)
</script>

<template>
    <button
        :type="type"
        :class="['btn', color, {'btn_full': checkUndefined(full)}]"
        @click.prevent="$emit('action')"
    >
        <slot/>
    </button>
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
    @include media.respond-to(360) {
        font-size: media.sizeREM(15);
    }

    @include media.hover {
        --btn-background: var(--btn-background-hover);
        --btn-border: var(--btn-border-hover);
        --btn-color: var(--btn-color-hover)
    }

    svg {
        transition: .3s;
        fill: var(--btn-color);
        stroke: var(--btn-color);
    }

    &_full {
        width: 100%;
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
}
</style>