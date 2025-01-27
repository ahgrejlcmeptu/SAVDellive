<script setup lang="ts">
import AppButton from "@spared/AppButton.vue";
import AppSvg from "@spared/AppSvg.vue";
import AppAmount from "@spared/AppAmount.vue";
import AppCurrency from "@spared/AppCurrency.vue";

const props = defineProps(['data'])
</script>

<template>
    <div class="product">
        <div class="product__left"></div>
        <div class="product__right">
            <div class="product__group">
                <div class="product__info"></div>
            </div>
            <div class="product__group">
                <div class="product__ingredients"></div>
            </div>
            <div class="product__group">
                <div class="product__description"></div>
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

  &__left {
    width: 500px;
    height: 100%;
  }

  &__right {
    padding: 30px 30px;
    width: 50%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
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
      svg {
        width: 14px;
        height: 14px;
        stroke: var(--main-white);
      }
    }
  }
}
</style>