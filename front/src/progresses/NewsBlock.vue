<script setup lang="ts">
import {computed, markRaw, onMounted, ref} from "vue";
import TheNewsGrid from "@widgets/news/TheNewsGrid.vue";
import TheNewsSlider from "@widgets/news/TheNewsSlider.vue";
defineProps(['data'])

const slider = ref(false)
const blocks = markRaw({
    grid: TheNewsGrid,
    slider: TheNewsSlider
})


const block = computed(() => {
    return slider.value ? blocks.slider : blocks.grid;
})
const updateVisibleItemsCount = () => {
    if (typeof window !== 'undefined') {
        slider.value = window.innerWidth < 960;
    }
}
onMounted(() => {
    updateVisibleItemsCount();
    window.addEventListener('resize', updateVisibleItemsCount);
})
</script>

<template>
    <component :is="block" :data="data" class="news"></component>
</template>
