<script setup lang="ts">
import {computed, markRaw, onMounted, ref} from "vue";
import NewsGrid from "@features/news/NewsGrid.vue";
import NewsSlider from "@features/news/NewsSlider.vue";

const LIST = [
    {
        id: '1',
        name: 'Скидка на первый заказ',
        description: 'Делай первый заказ и экономь',
        img: '/img/news/1.jpg',
    },
    {
        id: '2',
        name: 'Новое меню',
        description: 'Запустили новое меню и приглашаем\n' +
            'вас отведать его первыми',
        img: '/img/news/2.jpg',
    },
    {
        id: '3',
        name: 'Две пиццы по цене одной',
        description: 'Специальное предложение для любителей пиццы',
        img: '/img/news/3.jpg',
    },
    {
        id: '4',
        name: 'Винный ужин',
        description: 'Джазовая мелодия в сочетании с курсами\n' +
            'из вина и блюд от шефа',
        img: '/img/news/4.jpg',
    },
    {
        id: '5',
        name: 'Скидка 10% на самовывоз',
        description: 'На все заказы действует скидка 10%\n' +
            'при самовывозе из ресторана',
        img: '/img/news/5.jpg',
    },
    {
        id: '6',
        name: 'Фотоотчет с корпоратива',
        description: 'Показываем как мы отмечали корпоратив нашей большой командой',
        img: '/img/news/6.jpg',
    },
]
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
    <component :is="block" :list="LIST" class="news"></component>
</template>
