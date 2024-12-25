<script setup lang="ts">
import {computed, markRaw, onMounted, ref} from 'vue';

import CategoriesGrid from "@features/categories/CategoriesGrid.vue";
import CategoriesSlider from "@features/categories/CategoriesSlider.vue";

const slider = ref(false)
const blocks = markRaw({
    grid: CategoriesGrid,
    slider: CategoriesSlider
})


const block = computed(() => {
    return slider.value ? blocks.slider : blocks.grid;
})

const LIST = [
    {
        id: '1',
        name: 'Шашлыки',
        amount: '4 блюда',
        img: '/img/categories/1.png',
        href: "#"
    },
    {
        id: '2',
        name: 'Бургеры',
        amount: '4 блюда',
        img: '/img/categories/2.png',
        href: "#"
    },
    {
        id: '3',
        name: 'Салаты',
        amount: '4 блюда',
        img: '/img/categories/3.png',
        href: "#"
    },
    {
        id: '4',
        name: 'Горячие блюда',
        amount: '4 блюда',
        img: '/img/categories/4.png',
        href: "#"
    },
    {
        id: '5',
        name: 'Супы',
        amount: '4 блюда',
        img: '/img/categories/5.png',
        href: "#"
    },
    {
        id: '6',
        name: 'Все блюда',
        href: "#",
        all: true
    },
]
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
    <component :is="block" :list="LIST" class="categories"></component>
</template>