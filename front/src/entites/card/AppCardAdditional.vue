<script setup lang="ts">
import AppCurrency from "@spared/AppCurrency.vue";
import type {CardAdditional} from "@app/utils/interfaces";
import AppSvg from "@spared/AppSvg.vue";

const props = defineProps<{
    data: CardAdditional;
}>();
</script>


<template>
    <div class="card-additional">
        <div class="card-additional__img">
            <img :src="data.img" :alt="data.name">
        </div>
        <div class="card-additional__body">
            <div class="card-additional__name">{{ data.name }}</div>
            <div class="card-additional__footer">
                <div class="card-additional__weight">{{ data.weight }}</div>
                <div class="card-additional__price">{{ data.price }}
                    <AppCurrency/>
                </div>
            </div>
        </div>
        <div class="card-additional__btn">
            <AppSvg name="plus"/>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-additional {
  border-radius: var(--radius-20);
  border: 1px solid var(--border-color-1);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 90px;
  gap: 10px;
  @include media.respond-to(640) {
    font-size: media.sizeREM(15);
  }

  &__img {
    width: 110px;
    height: 100%;
    flex-shrink: 0;
    background: var(--main-color-2);

    @include media.respond-to(640) {
      width: 90px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  &__body {
    width: 10%;
    flex-grow: 1;
    padding-right: 60px;
  }

  &__name {
    font-weight: 500;
  }

  &__weight {
    font-size: media.sizeREM(14);
    color: var(--text-color-3);
  }

  &__footer {
    margin-top: 4px;
    display: flex;
    align-items: center;
  }

  &__price {
    margin-left: auto;
    font-weight: 500;
  }

  &__btn {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 50px;
    height: 54px;
    display: flex;
    padding-left: 10px;

    @include media.respond-to(640) {
      width: 40px;
      height: 50px;
    }

    @include media.hover {
      svg {
        stroke: var(--main-white);
      }
      &:before {
        background: var(--main-color-1);
      }
    }

    svg {
      margin: auto;
      width: 14px;
      height: 13px;
      stroke: var(--main-color-1);
      transition: .3s;
    }

    &:before {
      transition: .3s;
      content: '';
      position: absolute;
      height: 100%;
      width: 100px;
      border-radius: 50%;
      top: 0;
      left: 0;
      z-index: -1;
      background: var(--main-color-2);
    }
  }
}
</style>