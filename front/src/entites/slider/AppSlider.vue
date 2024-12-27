<script setup lang="ts">
import {Swiper} from "swiper/vue";
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules'
import SwiperPagination from "@spared/SwiperPagination.vue";
import SwiperButton from "@spared/SwiperButton.vue";

const modules = [Navigation, Pagination, Autoplay, EffectFade]

defineProps(['slider', 'navigation', 'pagination'])

const options = {
    modules: modules,
    pagination: {el: '.swiper-pagination', clickable: true},
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
    // slideActiveClass: '-active',
    // slideNextClass: '-next',
    // slidePrevClass: '-previous',
    // slideVisibleClass: '-visible',
    // slideFullyVisibleClass: '-fully-visible',
    // slidesPerView: 'auto',
}
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
