<script setup lang="ts">
import AppCardProduct from "@features/card/AppCardProduct.vue";
import {onMounted} from "vue";
import {favoritesItems, favoritesLoad} from "@app/store/favorites";
import {useStore} from "@nanostores/vue";

const $favoritesItems = useStore(favoritesItems)
const props = defineProps(['data'])
onMounted(() => {
    favoritesLoad(props.data)
})
</script>

<template>
    <template v-if="Object.keys($favoritesItems).length">
        <TransitionGroup tag="div" class="products" name="cards">
            <AppCardProduct
                    class="card-product_mobile"
                    v-for="item in $favoritesItems"
                    :key="item.id"
                    :data="item"
            />
        </TransitionGroup>
    </template>
    <p v-else class="text-18">Товаров в избранном нет</p>
</template>

<style lang="scss">
@use "@style/media";
@use "@style/transition";

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width, 270px), 1fr));
  grid-gap: 30px;
  @include media.respond-to(960) {
    grid-gap: 30px 20px;
    --card-width: 280px;
  }
  @include media.respond-to(640) {
    grid-gap: 20px;
    --card-width: 40%;
  }
  @include media.respond-to(360) {
    grid-gap: 10px;
    --card-width: 100%;
  }
}
</style>