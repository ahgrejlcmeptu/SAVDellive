<script setup lang="ts">
import AppSection from "@spared/AppSection.vue";
import AppDescriptionColumn from "@features/description/AppDescriptionColumn.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";
import {onMounted, ref, computed} from "vue";
import {HOST} from "@app/store/block.ts";
import {thumbnail} from "@app/utils/func.ts";

const props = defineProps(['data'])
const slider = ref(false)
const items = computed(() => {
    return {
        big: props.data.images[0],
        list: props.data.images.slice(1, 4),
        slide: props.data.images.slice(1)
    }
})
const amount = computed(() => props.data.images.slice(4))

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
    <app-section v-if="data" class="mb-100" :title="data.title">
        <AppDescriptionColumn class="mb-30" :description="data.description"/>
        <div class="team">
            <div class="team__big">
                <img :src="HOST + items.big.url" alt="">
            </div>
            <div class="team__column" v-if="!slider">
                <div class="team__item" v-for="(item, idx) in items.list" :key="item.documentId">
                    <img :src="HOST + thumbnail(item.url)" alt="">
                    <template v-if="idx === 2 && amount.length > 0">
                        <div class="team__amount text-55">+{{ amount.length }}</div>
                        <!-- сюда можно добавить спан для вывода галереи -->
                    </template>
                </div>
            </div>
            <app-slider v-else name=".team__slider" class="team__slider">
                <swiper-slide
                        v-for="item in items.slide"
                        :key="item.documentId"
                >
                    <img :src="HOST + thumbnail(item.url)" alt="">
                </swiper-slide>
            </app-slider>
        </div>
    </app-section>
</template>

<style lang="scss">
@use "@style/media";

.team {
  display: flex;
  gap: 20px;
  @include media.respond-to(640) {
    flex-wrap: wrap;
  }

  &__big {
    width: 75%;
    border-radius: var(--radius-30);
    overflow: hidden;
    @include media.respond-to(640) {
      width: 100%;
    }

    img {
      display: block;
      width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }

  &__column {
    width: 24%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include media.respond-to(640) {
      display: none;
    }
  }

  &__slider {
    width: 100%;
    overflow: visible;
    @include media.respond-from(640) {
      display: none;
    }

    .swiper-slide {
      overflow: hidden;
      border-radius: var(--radius-30);
      margin-right: 15px;
      width: 210px;
    }

    img {
      width: 100%;
      min-height: 100%;
    }
  }

  &__item {
    border-radius: var(--radius-30);
    overflow: hidden;
    position: relative;

    img {
      display: block;
      width: 100%;
    }

    &:has(.team__amount) {
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(#000, .5);
      }
    }
  }

  &__amount {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--main-white);
    z-index: 1;
  }
}
</style>