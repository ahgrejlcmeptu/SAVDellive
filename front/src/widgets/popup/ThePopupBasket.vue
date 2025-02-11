<script setup lang="ts">
import AppPopup from "@spared/AppPopup.vue";
import AppButton from "@spared/AppButton.vue";
import AppOrderFormList from "@spared/order/AppOrderFormList.vue";
import AppOrderFormItem from "@spared/order/AppOrderFormItem.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import AppSvg from "@spared/AppSvg.vue";
import AppTooltip from "@spared/AppTooltip.vue";
import AppInputSubmit from "@entites/inputSubmit/AppInputSubmit.vue";
import {ref} from "vue";

const promo = ref(null)
</script>

<template>
    <app-popup name="basket" content="basket" position="right">
        <div class="basket__header">
            <div class="popup-header">
                <div class="text-26">Корзина товаров</div>
            </div>
        </div>
        <div class="basket__body">
            <div class="basket__item"></div>
            <div class="basket__item">
                <div class="popup-header">
                    <div class="text-20">Не забудьте добавить к заказу</div>
                </div>
            </div>
            <div class="basket__item">
                <AppInputSubmit v-model="promo" label="Напишите промокод"/>
            </div>
        </div>
        <div class="basket__footer">
            <app-order-form-list>
                <app-order-form-item><span>Промокод</span><span>-150 <AppCurrency/></span></app-order-form-item>
                <app-order-form-item><span>Начислим бонусы
                  <app-tooltip>
                    <template v-slot:btn>
                        <AppSvg name="question"/>
                    </template>
                    <template v-slot:default>
                        <h6>Общее количество Ваших бонусов: <span>259 Б</span></h6>
                        <p>Ознакомиться с условиями начисления
                            и списания бонусных баллов можно <a href="#" target="_blank">по ссылке</a>
                        </p>
                    </template>
                </app-tooltip>
                </span><span>+10 Б</span></app-order-form-item>
                <app-order-form-item class="order-form__list-item_total"><span class="text-18">Итого</span><span
                        class="text-20">1920 <AppCurrency/></span>
                </app-order-form-item>
            </app-order-form-list>
            <app-button href="/order" full>Оформить заказ</app-button>
        </div>
    </app-popup>
</template>

<style lang="scss">
.basket {
  --popup-content: 567px;
  display: flex;
  flex-direction: column;
  --padding: 70px;

  &.popup-content {
    padding: 60px 0 0;
  }

  &__header {
    padding: 0 var(--padding);
  }

  &__body {
    padding: 0 var(--padding);
    height: 50%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &__footer {
    margin-top: auto;
    padding: 30px var(--padding);
    background: var(--main-color-2);
  }

  .order-form__list {
    margin-bottom: 30px;
  }

  .order-form__list-item_total {
    margin-top: 0;
  }

  .order-form__list-item {
    margin-bottom: 10px;
    --tooltip-size: 16px;
  }
}
</style>