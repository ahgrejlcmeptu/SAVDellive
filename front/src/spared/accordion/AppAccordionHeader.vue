<script setup lang="ts">
const props = defineProps(['value', 'active'])
const emits = defineEmits(['action'])
const action = () => emits('action', props.value === props.active ? null : props.value)
</script>

<template>
    <div class="app-accordion-header" @click="action">
        <slot></slot>
    </div>
</template>