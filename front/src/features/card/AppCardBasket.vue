<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import AppQuantity from "@spared/AppQuantity.vue";
import {ref} from "vue";
import {localeNumber} from "@app/utils/toLocale.ts";

const props = defineProps(['data'])
const amount = ref(props.data.amount)
</script>

<template>
    <div class="card-basket">
        <div class="card-basket__img">
            <img :src="data.img" :alt="data.name">
        </div>
        <div class="card-basket__body">
            <div class="text-15">{{data.name}}</div>
            <div class="text-14">{{data.info}}</div>
        </div>
        <AppQuantity v-model="amount"/>
        <div class="card-basket__price text-18">
            {{ localeNumber(data.price) }} <AppCurrency/>
        </div>
        <div class="card-basket__remove">
            <AppSvg name="remove"/>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-basket {
  border-radius: var(--radius-20);
  border: 1px solid var(--border-color-1);
  display: flex;
  gap: 12px;
  align-items: center;
  transition: .3s;
  padding: 20px;
  @include media.respond-to(360) {
    padding: 12px 8px;
    gap: 10px;

    .app-quantity__value {
      width: 30px;
    }
  }
  @include media.respond-to(360) {
    padding: 12px var(--conteiner-padding);
  }

  @include media.hover {
    border-color: var(--main-color-1);
    background: var(--main-color-2);
  }

  &__img {
    img {
      display: block;
      width: 60px;
      height: 44px;
      object-fit: contain;
      @include media.respond-to(360) {
        width: 44px;
      }
    }
  }
  &__body {
    flex-grow: 1;

    .text-15 {
      font-weight: 500;
    }
    .text-14 {
      margin-top: 4px;
      color: var(--text-color-3);
    }
  }
  &__price {
    min-width: 65px;
    text-align: right;
    white-space: nowrap;
    @include media.respond-to(360) {
      min-width: auto;
    }
  }
  &__remove {
    cursor: pointer;
    color: var(--text-color-3);
    stroke: currentColor;
    transition: .3s;
    @include media.hover {
      color: var(--main-error-2);
    }
    svg {
      width: 10px;
      height: 12px;
    }
  }
}
</style>