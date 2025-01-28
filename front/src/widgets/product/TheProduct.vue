<script setup lang="ts">
import AppButton from "@spared/AppButton.vue";
import AppSvg from "@spared/AppSvg.vue";
import AppAmount from "@spared/AppAmount.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import AppStatus from "@spared/status/AppStatus.vue";
import AppStatusList from "@spared/status/AppStatusList.vue";
import AppFavorites from "@spared/AppFavorites.vue";

const props = defineProps(['data'])
</script>

<template>
    <div class="product">
        <div class="product__left">
            <app-status-list>
                <app-status>Акция</app-status>
            </app-status-list>
            <AppFavorites/>
            <div class="product__img">
                <img src="/img/products/1.jpg" alt="">
            </div>
        </div>
        <div class="product__right">
            <div class="product__group text-16">
                <div class="product__info">
                    <div>Количество:</div>
                    <span>8 шт.</span>
                </div>
                <div class="product__info">
                    <div>Вес:</div>
                    <span>140 гр.</span>
                </div>
                <div class="product__info">
                    <div>КБЖУ:</div>
                    <span>453/21/33/14</span>
                </div>
            </div>
            <div class="product__group text-16">
                <div class="product__label">Ингредиенты:</div>
                <p class="product__ingredients">Рис, филе лосося, авокадо, капуста, морковка</p>
            </div>
            <div class="product__group text-16">
                <div class="product__label ">Описание:</div>
                <p class="product__description">Надо брать! Надо брать! Надо брать! Надо брать! Надо брать! Надо брать!
                    Надо брать!</p>
            </div>

            <div class="product__footer">
                <div class="product__price">
                    <div class="text-20">250
                        <AppCurrency/>
                    </div>
                    <s class="text-14">350
                        <AppCurrency/>
                    </s>
                </div>
                <app-button>
                    <AppSvg name="plus"/>
                    В корзину
                    <AppAmount :value="1"/>
                </app-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.product {
  border-radius: var(--radius-30);
  border: 1px solid var(--border-color-1);
  display: flex;
  flex-wrap: wrap;

  &__left {
    width: 500px;
    position: relative;
    --status-left: 30px;
    --status-top: 30px;
    ----favorites-pos: 30px;
    @include media.respond-to(960) {
      width: 400px;
    }
    @include media.respond-to(640) {
      width: 280px;
    }
    @include media.respond-to(360) {
      width: 100%;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    background: var(--main-color-6);
    border-radius: var(--radius-30);
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: contain;
    }
  }

  &__label {
    margin-bottom: 5px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    max-width: 200px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }

    span {
      color: var(--text-color-2)
    }
  }

  &__right {
    padding: 30px;
    width: 50%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include media.respond-to(640) {
      padding: 20px;
      gap: 15px
    }
  }

  &__price {
    //display: flex;
    //align-items: flex-end;
    //gap: 10px;

    > * {
      display: inline-block;
    }

    .text-14 {
      margin-left: 10px;
    }
  }

  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .btn {
      white-space: nowrap;
      @include media.respond-to(640) {
        padding: 0 15px;
      }
      svg {
        width: 14px;
        height: 14px;
        stroke: var(--main-white);
      }
    }
  }
}
</style>