<script setup lang="ts">
import {onMounted, ref} from "vue";
import {checkUndefined} from "@app/utils/verification.ts";
defineProps(['tongue'])

const el = ref<HTMLElement | null>()
onMounted(() => {
    elPos()
})

function elPos() {
    const body = document.body
    const {left, width} = el.value?.getBoundingClientRect()
    el.value?.style.setProperty('--pos', null)
    if (left + width > innerWidth) el.value?.style.setProperty('--pos', (left + width - innerWidth + (innerWidth - body.offsetWidth)) + 'px')
}
</script>

<template>
    <div ref="el" class="app-tooltip-container">
        <div class="app-tooltip-container__tongue" v-if="checkUndefined(tongue)"></div>
        <slot></slot>
    </div>
</template>

<style lang="scss">
.app-tooltip-container {
    position: relative;
    left: calc(var(--pos, 0) * -1);
    width: var(--tooltip-width, 256px);
    max-width: 100vw;
    padding: 30px 20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    background: var(--tooltip-background, var(--main-white));
    border-radius: var(--radius-20);

    &__tongue {
        pointer-events: none;
        position: absolute;
        bottom: 100%;
        width: 80px;
        height: 30px;
        left: calc(var(--pos, 0px) + 35px);
        overflow: hidden;

        &:before {
            content: '';
            //left: calc(var(--pos) + 15px + 60px);
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 0) ;
            position: absolute;
            border-style: solid;
            border-width: 15px;
            border-color: transparent transparent var(--main-white) transparent;
            //width: 30px;
            //height: 30px;
            ////background: var(--main-white);
            //background: red;
            //box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
            filter: drop-shadow(0 8px 30px rgba(0, 0, 0, 1));
        }
    }
}
</style>
