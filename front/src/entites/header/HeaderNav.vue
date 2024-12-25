<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {computed, onMounted, ref} from "vue";

const LIST = [
    {
        id: '1',
        name: 'Акции',
        highlight: true
    },
    {
        id: '2',
        name: 'Бургеры',
    },
    {
        id: '3',
        name: 'Шашлыки',
    },
    {
        id: '4',
        name: 'Салаты',
    },
    {
        id: '5',
        name: 'Супы',
    },
    {
        id: '6',
        name: 'Роллы',
    },
    {
        id: '7',
        name: 'Горячее',
    },
    {
        id: '8',
        name: 'Тест 1',
    },
    {
        id: '9',
        name: 'Тест 2',
    },
]

const full = ref(false)
const filter = computed(() => {
    return LIST.length > 7 && !full.value ? [LIST.slice(0, 7), LIST.slice(7)] : [LIST]
})
const updateVisibleItemsCount = () => {
    if (typeof window !== 'undefined') { // Проверка, доступен ли window
        full.value = window.innerWidth < 1200;
    }
};
onMounted(() => {
    updateVisibleItemsCount();
    window.addEventListener('resize', () => {
        updateVisibleItemsCount();
    });
});

</script>

<template>
    <swiper
            class="header-nav"
            slides-per-view="auto"
    >
        <swiper-slide
                v-for="item in filter[0]"
                :class="['header-nav__item', {'header-nav__item_highlight': item.highlight}]"
                :key="item.id"
        >{{ item.name }}
        </swiper-slide>
        <swiper-slide class="header-nav__item header-nav__item_more" v-if="filter.length > 1">
            Ещё
            <app-svg name="dropdown"></app-svg>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss">
@use "@style/media";

.header-nav {
  display: flex;
  width: 50%;
  flex-grow: 1;
  overflow: visible;

  .swiper-wrapper {
    align-items: center;
  }

  &__item {
    cursor: pointer;
    height: auto;
    width: auto;
    margin-right: 20px;
    line-height: 140%;
    transition: .3s background-color;
    @include media.respond-to(960) {
      margin-right: 10px;
      padding: 6px 20px;
      border-radius: 20px;
      background: var(--main-color-2);
      min-width: 120px;
      text-align: center;
      @include media.hover {
        background: var(--main-color-3-hover);
      }
    }
    @include media.respond-to(640) {
      min-width: 100px;
      padding: 4px 14px;
      font-size: media.sizeREM(15);
    }
    @include media.respond-to(360) {
      margin-right: 6px;
    }


    &_highlight {
      background: var(--main-color-1);
      color: var(--main-white);
      @include media.respond-from(960) {
        padding: 7px 25px 10px;
        border-radius: 50px;
      }
    }

    &_more {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 27px;
      border-radius: 50px;
      background: var(--main-color-2);

      svg {
        width: 9px;
        height: 4px;
        stroke: var(--text-color-1);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>