<script setup lang="ts">
import AppCardOrder from "@features/card/AppCardOrder.vue";
import {basketItems} from "@app/store/basket";
import {useStore} from "@nanostores/vue";

const $basketItems = useStore(basketItems)
</script>

<template>
    <div class="order-list">
        <div class="page-header">
            <h2>Состав заказа / 4 шт.</h2>
        </div>
        <AppCardOrder
                v-for="item in $basketItems"
                :key="item.id"
                :data="item"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.order-list {
  .page-header {
    display: none;
    @include media.respond-to(640) {
      display: block;
    }
  }
  .card-order {
    margin-bottom: 30px;
    @include media.respond-to(640) {
      margin-bottom: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>