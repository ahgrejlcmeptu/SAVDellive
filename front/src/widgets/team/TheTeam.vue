<script setup lang="ts">
import {SwiperSlide} from "swiper/vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {onMounted, ref, computed} from "vue";

const props = defineProps(['data'])
const slider = ref(false)
const items = computed(() => {
    return {
        big: props.data[0],
        list: props.data.slice(1, 4),
        slide: props.data.slice(1)
    }
})
const amount = computed(() => props.data.slice(4))

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
    <div class="team">
        <div class="team__big">
            <img :src="items.big.img" alt="">
        </div>
        <div class="team__column" v-if="!slider">
            <div class="team__item" v-for="(item, idx) in items.list" :key="item.id">
                <img :src="item.img" alt="">
                <template v-if="idx === 2 && amount.length > 0">
                    <div class="team__amount text-55">+{{ amount.length }}</div>
                    <!-- сюда можно добавить спан для вывода галереи -->
                </template>
            </div>
        </div>
        <app-slider v-else name=".team__slider" class="team__slider">
            <swiper-slide
                    v-for="item in items.slide"
                    :key="item.id"
            >
                <img :src="item.img" alt="">
            </swiper-slide>
        </app-slider>
    </div>
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