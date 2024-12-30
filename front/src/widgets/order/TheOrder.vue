<script setup lang="ts">
import OrderList from "@features/order/OrderList.vue";
import OrderAdditional from "@features/order/OrderAdditional.vue";
import OrderForm from "@features/order/OrderForm.vue";
</script>

<template>
    <div class="order">
        <div class="order__left">
            <OrderList/>
            <OrderAdditional v-if="false"/>
        </div>
        <div class="order__right">
            <OrderForm/>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.order {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  &__left {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 40%;
    flex-grow: 1;
  }

  &__right {
    width: 470px;
    @include media.respond-to(960) {
      width: 440px;
    }
    @include media.respond-to(640) {
      width: 100%;
      order: -1
    }
  }
}
</style>