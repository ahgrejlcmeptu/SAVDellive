<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import AppQuantity from "@spared/AppQuantity.vue";
import {HOST} from "@app/store/block.ts";
import {basketDecrement, basketIncrement, basketRemove} from "@app/store/basket";

defineProps(['data']);

</script>

<template>
    <div class="card-order">
        <div class="card-order__img">
            <img :src="HOST + data.img.url" :alt="data.name">
        </div>
        <div class="card-order__body">
            <div class="card-order__main">
                <div class="card-order__header">
                    <div class="card-order__name text-18">{{ data.name }}</div>
                </div>
                <div class="card-order__weight text-15">{{ data.weight }}</div>
                <div class="card-order__description" v-html="data.description"></div>
            </div>
            <div class="card-order__footer">
                <div class="card-order__price text-20">{{ data.price }}
                    <AppCurrency/>
                </div>
                <AppQuantity :value="data.amount" @decrement="basketDecrement(data.documentId)" @increment="basketIncrement(data.documentId)"/>
                <div class="card-order__total text-20">{{ data.price * data.amount }}
                    <AppCurrency/>
                </div>
            </div>
        </div>
        <div class="card-order__remove" @click="basketRemove(data.documentId)">
            <AppSvg name='close'/>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-order {
  min-height: 250px;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid var(--border-color-1);
  position: relative;
  @include media.respond-from(640) {
    @include media.respond-to(960) {
      min-height: 186px;
      .text-20,
      .text-18 {
        font-size: media.sizeREM(16);
      }
      .app-quantity__value {
        width: 30px;
      }
      .card-order__weight,
      .card-order__description {
        font-size: media.sizeREM(14);
      }
    }
  }
  @include media.respond-to(640) {
    min-height: 200px;
    border-radius: var(--radius-20);
  }
  @include media.respond-to(360) {
    min-height: 130px;

    .text-20,
    .text-18{
      font-size: media.sizeREM(15);
    }
  }

  &__img {
    width: 284px;
    flex-shrink: 0;
    background: var(--main-color-2);
    @include media.respond-to(960) {
      width: 195px;
    }
    @include media.respond-to(640) {
      width: 280px;
    }
    @include media.respond-to(360) {
      width: 100%;
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  &__body {
    width: 50%;
    flex-grow: 1;
    padding: 50px 35px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @include media.respond-to(960) {
      padding: 33px 25px;
    }
    @include media.respond-to(640) {
      padding: 30px 20px;
    }
    @include media.respond-to(360) {
      padding: 20px 15px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  &__name {

  }

  &__weight {
    font-weight: 300;
    color: var(--text-color-3);
    margin-bottom: 10px;
    font-size: media.sizeREM(15);
    @include media.respond-to(360) {
      font-size: media.sizeREM(12);
    }
  }

  &__description {
    color: var(--text-color-2);
    @include media.respond-to(360) {
      display: none;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: auto;

    .app-quantity {
      margin-left: auto;
    }
  }

  &__price {
    white-space: nowrap;
  }

  &__total {
    white-space: nowrap;
    text-align: right;
    min-width: 80px;
    @include media.respond-from(640) {
      @include media.respond-to(960) {
        min-width: 60px;
      }
    }
  }

  &__remove {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
    @include media.respond-to(960) {
      top: 20px;
      right: 20px;
    }
    @include media.respond-to(360) {
      top: 15px;
      right: 15px;
    }
    @include media.hover {
      svg {
        fill: var(--main-color-1)
      }
    }

    svg {
      transition: .3s;
      width: 14px;
      height: 14px;
      fill: var(--text-color-3);
      @include media.respond-to(960) {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>