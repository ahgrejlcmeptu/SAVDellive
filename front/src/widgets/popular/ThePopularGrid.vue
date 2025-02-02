<script setup lang="ts">
import AppCardProduct from "@features/card/AppCardProduct.vue";
import AppLinkBottom from "@spared/AppLinkBottom.vue";
import AppTabsSlider from "@features/tabs/AppTabsSlider.vue";
import {computed, ref} from "vue";
const props = defineProps(['list', 'status', 'link'])


const active = props.status ? ref(props.status[0].id) : ref(null)
const filter = computed(() => {
    if (!props.status) return props.list
    return props.list.filter(({status}) => status.includes(active.value)).slice(0, 8)
})

</script>

<template>
    <AppTabsSlider v-if="status" :slides="status" v-model="active" />
    <TransitionGroup tag="div" class="popular-grid" name="cards">
        <AppCardProduct
                class="card-product_mobile"
                v-for="item in filter"
                :key="item.id"
                :data="item"
        />
    </TransitionGroup>
    <app-link-bottom v-if="status"><a :href="link || '/catalog'">Смотреть все</a></app-link-bottom>
</template>

<style lang="scss">
@use "@style/media";
@use "@style/transition";

.popular-grid {
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