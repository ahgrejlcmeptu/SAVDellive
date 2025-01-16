<script setup lang="ts">
import {computed, markRaw, onMounted, ref} from "vue";
import NewsGrid from "@features/news/NewsGrid.vue";
import NewsSlider from "@features/news/NewsSlider.vue";
defineProps(['data'])

const slider = ref(false)
const blocks = markRaw({
    grid: NewsGrid,
    slider: NewsSlider
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
    <component :is="block" :list="data" class="news"></component>
</template>
