<script setup lang="ts">
import TheCategoriesGrid from "@widgets/categories/TheCategoriesGrid.vue";
import TheCategoriesSlider from "@widgets/categories/TheCategoriesSlider.vue";
import {computed, markRaw, onMounted, ref} from 'vue';

defineProps(['data'])

const slider = ref(false)
const blocks = markRaw({
    grid: TheCategoriesGrid,
    slider: TheCategoriesSlider
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
    <component :is="block" :list="data" class="categories"></component>
</template>