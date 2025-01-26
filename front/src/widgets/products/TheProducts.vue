<script setup lang="ts">
import AppCardProduct from "@features/card/AppCardProduct.vue";

const props = defineProps(['data'])
</script>

<template>
    <TransitionGroup tag="div" class="products" name="cards">
        <AppCardProduct
                class="card-product_mobile"
                v-for="item in data"
                :key="item.id"
                :data="item"
        />
    </TransitionGroup>
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