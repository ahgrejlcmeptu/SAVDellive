<script setup>
import {Swiper} from "swiper/vue";
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper';
import SwiperPagination from "@spared/SwiperPagination.vue";
import SwiperButton from "@spared/SwiperButton.vue";
import {reactive} from "vue";

const modules = [Navigation, Pagination, Autoplay, EffectFade]
const props = defineProps(['slider', 'navigation', 'pagination', 'name'])

const options = reactive({
    modules: modules,
    slidesPerView: 'auto',
    pagination: {el: `${props.name || ''} .swiper-pagination`, clickable: true},
    navigation: {
        prevEl: `${props.name || ''} .swiper-button-prev`,
        nextEl: `${props.name || ''} .swiper-button-next`,
    },
})


</script>

<template>
    <swiper
            v-bind="{
        ...options,
        ...slider
        }"
    >
        <slot/>
        <template v-if="navigation">
            <swiper-button v-bind="navigation" prev/>
            <swiper-button v-bind="navigation" next/>
        </template>
        <swiper-pagination v-if="pagination" v-bind="pagination"/>
    </swiper>
</template>
