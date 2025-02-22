<script setup lang="ts">
import AppSection from "@spared/AppSection.vue";
import {computed, markRaw, onMounted, ref} from "vue";
import TheSocialsGrid from "@widgets/socials/TheSocialsGrid.vue";
import TheSocialsSlider from "@widgets/socials/TheSocialsSlider.vue";

defineProps(['data'])

const slider = ref(false)
const blocks = markRaw({
    grid: TheSocialsGrid,
    slider: TheSocialsSlider
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
    <app-section class="mb-100" :title="data.title" header="center">
        <component :is="block" :data="data"></component>
    </app-section>
</template>
