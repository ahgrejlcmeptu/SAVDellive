<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import {computed, onMounted, ref} from "vue";

defineProps(['data'])

const action = (item) => {
    if (item.href && item.href !== current) return location.href = item.href
    if (item.action) return item.action()
}
const isMobile = ref(false)
const current = location.pathname

const LINKS = [
    {
        icon: 'basket',
        name: 'Заказы и бонусы',
        href: '/lk'
    },
    {
        icon: 'favorites',
        name: 'Избранное',
        href: '/favorites'
    },
    {
        icon: 'user',
        name: 'Персональные данные',
        href: '/lk-personal'
    },
    {
        icon: 'logout',
        name: 'Выйти',
        action: () => {
            console.log('logout')
        }
    }
]
const sortLinks = computed(() => {
    if (!isMobile.value) return LINKS

    const arr = [...LINKS]
    const idx = arr.findIndex(i => i.href === current)
    const elem = arr.splice(idx, 1)[0];
    arr.splice(0, 0, elem)
    return arr;
})
const bodyHeight = ref<string>('')
const isOpen = ref<boolean>(false)


onMounted(() => {
    updateMobile()
    setHeight()
    window.addEventListener('resize', updateMobile)
})

const updateMobile = () => isMobile.value = innerWidth < 960
const setHeight = () => {
    const value = LINKS.reduce((sum) => sum + 50, 0)
    bodyHeight.value = value + 'px'
}

</script>

<template>
    <div class="lk-navbar text-15" v-if="data">
        <div class="lk-navbar__top">
            <div class="lk-navbar__img">
                <img :src="data.img" alt="">
                <div class="lk-navbar__bonus text-18">{{ data.bonus }} Б</div>
            </div>
            <div class="lk-navbar__text">{{ data.name }}</div>
            <div class="lk-navbar__text">{{ data.phone }}</div>
        </div>
        <div :class="['lk-navbar__body', {open: isOpen}]" :style="{'--height': bodyHeight}" @click="isOpen = !isOpen">
            <div
                    v-for="item in sortLinks"
                    :key="item.icon"
                    :class="['lk-navbar__link', 'lk-navbar__link_' + item.icon, {active: current === item.href}]"
                    @click="action(item)"
            >
                <i>
                    <AppSvg :name="item.icon"/>
                </i>
                {{ item.name }}
            </div>
            <div class="lk-navbar__select" v-if="isMobile">
                <AppSvg name="dropdown"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.lk-navbar {
  width: 270px;
  flex-shrink: 0;
  border-radius: var(--radius-30);
  border: 1px solid var(--border-color-1);
  overflow: hidden;
  padding-bottom: 25px;
  align-self: flex-start;

  @include media.respond-to(640) {
    width: 100%;
    border: none;
    padding-bottom: 0;
    overflow: visible;
  }

  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    font-weight: 500;
    background: var(--main-color-2);
    padding: 40px 0;
    margin-bottom: 20px;
    @include media.respond-to(640) {
      padding: 12px 0;
      border-radius: var(--radius-20);
      margin-bottom: 10px;
      --size-img: 77px;
      --img-margin: 5px
    }
  }

  &__img {
    margin-bottom: var(--img-margin, 10px);
    position: relative;

    img {
      width: var(--size-img, 118px);
      height: var(--size-img, 118px);
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__bonus {
    position: absolute;
    top: 0;
    left: 85px;
    color: var(--main-white);
    background: var(--main-color-1);
    padding: 6px 10px;
    border-radius: var(--radius-10);
    white-space: nowrap;
    @include media.respond-to(640) {
      padding: 6px;
      top: auto;
      bottom: 0;
      left: 46px;
    }
  }

  &__body {
    @include media.respond-to(640) {
      border: 1px solid var(--border-color-1);
      border-radius: 10px;
      height: 50px;
      overflow: hidden;
      transition: .3s;
      position: relative;

      &.open {
        height: var(--height, 50px);
        --svg-rotate: 180deg;
      }
    }
  }

  &__link {
    cursor: pointer;
    padding: 11px 30px;
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--color);
    --color: var(--text-color-2);

    @include media.respond-to(640) {
      height: 50px;
      padding: 0 20px;
    }

    @include media.hover {
      --color: var(--main-color-1);
    }

    &.active {
      @include media.respond-from(640) {
        background: var(--main-color-2);
        --color: var(--main-color-1);
      }
    }

    svg {
      transition: .3s;
      height: var(--svg-height);
      width: var(--svg-width);
      stroke: var(--color);
      fill: var(--color);
      display: block;
      margin: auto;
    }

    i {
      width: 21px;
    }

    &_basket {
      --svg-width: 21px;
      --svg-height: 20px;
    }

    &_favorites {
      --svg-width: 21px;
      --svg-height: 18px;
    }

    &_user {
      --svg-width: 15px;
      --svg-height: 18px;
    }

    &_logout {
      --svg-width: 18px;
      --svg-height: 19px;
    }
  }

  &__select {
    position: absolute;
    top: 0;
    right: 20px;
    height: 50px;
    display: flex;
    align-items: center;

    svg {
      width: 9px;
      height: 4px;
      stroke: var(--text-color-3);
      transition: .3s;
      transform: rotate(var(--svg-rotate, 0));
    }
  }
}
</style>