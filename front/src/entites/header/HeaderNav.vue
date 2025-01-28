<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
// import AppDropdown from "@entites/dropdown/AppDropdown.vue";
import {SwiperSlide} from 'swiper/vue';
import {computed, onMounted, ref} from "vue";
// import {CDropdownItem} from '@coreui/vue';

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
            name: 'О нас',
            href: '/about'
        },
        {
            id: '2',
            name: 'Доставка и оплата',
            href: '/delivery'
        },
        {
            id: '3',
            name: 'Отзывы',
            href: '/reviews'
        },
        {
            id: '4',
            name: 'Контакты',
            href: '/contacts'
        },
        {
            id: '5',
            name: 'Новости',
            href: '/news'
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
        href: '/'
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
    <app-slider name=".header-nav" class="header-nav">
        <swiper-slide
                v-for="item in filter"
                :class="['header-nav__item', {'header-nav__item_highlight': item.highlight}]"
                :key="item.id"
        >
            <a class="header-nav__link" :href="item.href" v-if="!item.menu">
                {{ item.name }}
            </a>
            <template v-else>
<!--                <app-dropdown>-->
<!--                    <template v-slot:button>-->
<!--                        <div class="header-nav__link">-->
<!--                            {{ item.name }}-->
<!--                            <app-svg class="dropdown-arr" name="dropdown"></app-svg>-->
<!--                        </div>-->
<!--                    </template>-->
<!--                    <template v-slot:list>-->
<!--&lt;!&ndash;                        <CDropdownItem&ndash;&gt;-->
<!--&lt;!&ndash;                                v-for="item in NAV.menu"&ndash;&gt;-->
<!--&lt;!&ndash;                                :key="item.id"&ndash;&gt;-->
<!--&lt;!&ndash;                        >{{ item.name }}&ndash;&gt;-->
<!--&lt;!&ndash;                        </CDropdownItem>&ndash;&gt;-->
<!--                    </template>-->
<!--                </app-dropdown>-->
            </template>
        </swiper-slide>
    </app-slider>
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

  .dropdown-menu {
    min-width: max-content;
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