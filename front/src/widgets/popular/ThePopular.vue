<script setup lang="ts">
import AppCardProduct from "@entites/card/AppCardProduct.vue";
import AppLinkBottom from "@spared/AppLinkBottom.vue";
import AppTabsSlider from "@features/tabs/AppTabsSlider.vue";
import {computed, ref} from "vue";
const props = defineProps(['list'])

const STATUS = [
    {
        id: 1,
        name: 'Популярные',
        icon: '/status.svg#popular'
    },
    {
        id: 2,
        name: 'Рекомендованные',
        icon: '/status.svg#recommended'
    },
    {
        id: 3,
        name: 'Новинки',
        icon: '/status.svg#new'
    }
]
const active = ref(STATUS[0].id)
const filter = computed(() => props.list.filter(({status}) => status.includes(active.value)).slice(0, 8))
</script>

<template>
    <AppTabsSlider :slides="STATUS" v-model="active" />
    <TransitionGroup tag="div" class="popular" name="cards">
        <AppCardProduct
                class="card-product_mobile"
                v-for="item in filter"
                :key="item.id"
                :data="item"
        />
    </TransitionGroup>
    <app-link-bottom><a href="#">Смотреть все</a></app-link-bottom>
</template>

<style lang="scss">
@use "@style/media";
@use "@style/transition";

.popular {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width, 20%), 1fr));
  grid-gap: 30px;
  @include media.respond-to(960) {
    grid-gap: 30px 20px;
    --card-width: 30%;
    .card-product {
      &:nth-child(n+7) {
        display: none;
      }
    }
  }
  @include media.respond-to(640) {
    grid-gap: 20px;
    --card-width: 40%;
  }
  @include media.respond-to(360) {
    grid-gap: 10px;
    --card-width: 100%;
    .card-product {
      &:nth-child(n+5) {
        display: none;
      }
    }
  }
}
</style>