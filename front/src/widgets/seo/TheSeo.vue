<script setup lang="ts">
import AppTabsSlider from "@features/tabs/AppTabsSlider.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";
import {computed, ref, watch} from "vue";
import type {Swiper as SwiperType} from "swiper";
import type {SeoTabs} from "@app/utils/interfaces.ts";


const props = defineProps<{
    data: SeoTabs[]
}>()

const tabs = computed(() => {
    return props.data.map(({id, title}) => ({id, name: title}))
})

const activeTabs = ref<string | number>(tabs.value[0].id)
const slider = ref<SwiperType | null>(null)
watch(activeTabs, (value): void => {
    const index = props.data.findIndex(({id}) => id === value)
    slider.value.slideTo(index)
})

const onSwiperInit = (swiper: SwiperType) => slider.value = swiper;
</script>

<template>
    <div class="seo">
        <AppTabsSlider v-if="tabs.length > 1" :slides="tabs" v-model="activeTabs"/>
        <app-slider
                @swiper="onSwiperInit"
                class="seo__slider"
                name=".seo"
                :slider="{
                    effect: 'fade',
                    'allow-touch-move': false,
                    'auto-height': true
                }"
        >
            <swiper-slide class="clearfix" v-for="item in data" :key="item.id">
                <div class="seo__img">
                    <img :src="item.img" :alt="item.title">
                </div>
                <div class="seo__body">
                    <h2>{{ item.title }}</h2>
                    <div class="seo__description" v-html="item.description"></div>
                </div>
            </swiper-slide>
        </app-slider>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.seo {
  position: relative;

  .tabs-slider {
    position: absolute;
    width: 57%;
    right: 0;
    top: 0;
    z-index: 2;
    @include media.respond-to(960) {
      position: relative;
      width: 100%;
    }

    + .seo__slider .seo__body {
      padding-top: 70px;
    }
  }

  &__slider {
    width: 100%;

    .swiper-slide {
      height: auto;
      background-color: var(--main-white);
    }
  }

  &__img {
    float: left;
    width: 40%;
    margin-right: 35px;
    margin-bottom: 10px;
    @include media.respond-to(960) {
      display: none;
    }

    img {
      width: 100%;
      border-radius: var(--radius-30);
    }
  }

  &__body {
    @include media.respond-to(960) {
      float: none;
      width: 100%;
    }

    h2 {
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 15px;
      line-height: 160%;
    }
  }
}
</style>