<script setup lang="ts">
import {ref, watch} from "vue";

const props = defineProps(['visible'])
const body = ref(null)
const height = ref(0)
watch(
    () => props.visible,
    (val) => {
        setTimeout(() => {
            height.value = body.value.clientHeight
        }, 0)
    }
)
</script>

<template>
    <Transition name="accordion">
        <div class="app-accordion-body" v-show="visible" :style="{'--accordion-height': height + 'px'}">
            <div ref="body">
                <slot/>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss">
@use "@style/transition";
</style>