<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {computed, onMounted, ref} from "vue";

const NAV = {
    menu: [
        {
            id: '1',
            name: 'Роллы'
        },
        {
            id: '2',
            name: 'Наборы'
        },
        {
            id: '3',
            name: 'Суши'
        },
        {
            id: '4',
            name: 'Салаты'
        },
        {
            id: '5',
            name: 'Блюда гриль'
        },
        {
            id: '6',
            name: 'Горячие блюда'
        },
        {
            id: '7',
            name: 'Пицца'
        },
        {
            id: '8',
            name: 'Супы'
        },
        {
            id: '9',
            name: 'Десерты'
        },
        {
            id: '10',
            name: 'Напитки'
        },
        {
            id: '11',
            name: 'Соусы'
        },
    ],
    links: [
        {
            id: '1',
            name: 'О нас'
        },
        {
            id: '2',
            name: 'Доставка и оплата'
        },
        {
            id: '3',
            name: 'Отзывы'
        },
        {
            id: '4',
            name: 'Контакты'
        },
    ],
    highlight: [
        {
            id: '01',
            name: 'Акции',
            highlight: true
        },
    ]
}
const MORE_NAV = [
    {
        id: '02',
        name: 'Главная',
    },
    {
        id: '03',
        name: 'Наше меню',
        menu: true
    },
]

const full = ref(false)
const filter = computed(() => {
    return !full.value ? [...NAV.highlight, ...MORE_NAV, ...NAV.links] : [...NAV.highlight, ...NAV.menu]
})
const updateVisibleItemsCount = () => {
    if (typeof window !== 'undefined') { // Проверка, доступен ли window
        full.value = window.innerWidth < 1200;
    }
};
const menu = ref(null)

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
                v-for="item in filter"
                :class="['header-nav__item', {'header-nav__item_highlight': item.highlight}]"
                :key="item.id"
        >
            <a class="header-nav__link" href="#" v-if="!item.menu">
                {{ item.name }}
            </a>
            <template v-else>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <div class="header-nav__link" v-bind="props">
                            {{ item.name }}
                            <app-svg name="dropdown"></app-svg>
                        </div>
                    </template>
                    <v-list>
                        <div class="header-nav__item"
                            v-for="item in NAV.menu"
                            :key="item.id"
                        >
                            <a class="header-nav__link" href="#">{{ item.name }}</a>
                        </div>
                    </v-list>
                </v-menu>
            </template>


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

    svg {
      width: 9px;
      height: 4px;
      stroke: var(--text-color-1);
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
}
</style>