<script setup lang="ts">
import AppSection from "@spared/AppSection.vue";
import {computed, markRaw, onMounted, ref} from "vue";
import TheNewsGrid from "@widgets/news/TheNewsGrid.vue";
import TheNewsSlider from "@widgets/news/TheNewsSlider.vue";

defineProps(['data'])

const slider = ref(false)
const blocks = markRaw({
    grid: TheNewsGrid,
    slider: TheNewsSlider
})


const block = computed(() => slider.value ? blocks.slider : blocks.grid)
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
    <app-section class="mb-100" header="center" :title="data.title">
        <component :is="block" :data="data.list" class="news"></component>
    </app-section>
</template>
