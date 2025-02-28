<script setup lang="ts">
import AppButton from "@spared/AppButton.vue";
import AppInput from "@spared/AppInput.vue";
import AppBoolean from "@spared/AppBoolean.vue";
import AppTabs from "@spared/tabs/AppTabs.vue";
import AppTabsItem from "@spared/tabs/AppTabsItem.vue";
import AppRadioList from "@spared/radio/AppRadioList.vue";
import AppRadio from "@spared/radio/AppRadio.vue";
import AppPaymentList from "@spared/payment/AppPaymentList.vue";
import AppPayment from "@spared/payment/AppPayment.vue";
import IconCash from "@spared/icons/IconCash.vue";
import IconCard from "@spared/icons/IconCard.vue";
import IconOnline from "@spared/icons/IconOnline.vue";
import AppInputSubmit from "@entites/inputSubmit/AppInputSubmit.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import AppNotifications from "@entites/notifications/AppNotifications.vue";
import AppTooltip from "@spared/tooltip/AppTooltip.vue";
import AppSelect from "@spared/select/AppSelect.vue";
import AppSvg from "@spared/AppSvg.vue";
import {markRaw, reactive, ref, watch} from "vue";
import type {FormOrder} from "@app/utils/interfaces";
import AppSelectItem from "@spared/select/AppSelectItem.vue";
import AppOrderFormList from "@spared/order/AppOrderFormList.vue";
import AppOrderFormItem from "@spared/order/AppOrderFormItem.vue";

const FILIALS = [
    {
        id: '1',
        name: 'ул. Байкальская, 289/2'
    },
    {
        id: '2',
        name: 'ул. Чернышевского, 8'
    },
    {
        id: '3',
        name: 'ул. Верхняя Набережная, 145/15'
    },
    {
        id: '4',
        name: 'ул. Чернышевского, 88'
    },
    {
        id: '5',
        name: 'ул. Верхняя Набережная, 145/156'
    }
]
const PAYMENT = [
    {
        id: '1',
        name: 'Наличными курьеру',
        icon: 'cash'
    },
    {
        id: '2',
        name: 'Картой курьеру',
        icon: 'card'
    },
    {
        id: '3',
        name: 'Оплата онлайн',
        icon: 'online'
    },
]
const DAY = [
    {
        id: '1',
        value: '17 января'
    },
    {
        id: '2',
        value: '18 января'
    },
    {
        id: '3',
        value: '19 января'
    },
    {
        id: '4',
        value: '20 января'
    },
    {
        id: '5',
        value: '21 января'
    },
    {
        id: '6',
        value: '22 января'
    },
    {
        id: '7',
        value: '23 января'
    },
]
const HOUR = [
    {
        id: '1',
        value: '15:00'
    },
    {
        id: '2',
        value: '15:30'
    },
    {
        id: '3',
        value: '16:00'
    },
    {
        id: '4',
        value: '16:30'
    },
    {
        id: '5',
        value: '17:00'
    },
    {
        id: '6',
        value: '17:30'
    },
    {
        id: '7',
        value: '18:00'
    },
]

const form = reactive<FormOrder>({
    name: '',
    phone: '',
    method: 'Доставка',
    address: '',
    payment: 'Наличными курьеру',
    time: 'Ближайшее',
    promo: '',
    bonus: ''
})
const additional = ref(false)
const icons = markRaw({
    cash: IconCash,
    card: IconCard,
    online: IconOnline
})



watch(additional, (value) => {
    if (value) {
        form.comment = ''
        form.persons = ''
    } else {
        delete form.comment
        delete form.persons
    }
})

watch(
    () => form.method,
    (value) => {
        delete form.address
        delete form.filial

        if (value === 'Доставка') return form.address = ''
        if (value === 'Самовывоз') return form.filial = FILIALS[0].name
    }
)
watch(
    () => form.time,
    (value) => {
        delete form.day
        delete form.hour

        if (value === 'Ближайшее') return;
        if (value === 'Выбрать время') {
            form.day = ''
            form.hour = ''
        }
    }
)

</script>

<template>
    <div class="order-form">
        <div class="order-form__body">
            <div class="order-form__header">
                <h3>Оформление заявки</h3>
                <p>Проверьте ваш заказ и укажите контактные данные для связи. Мы перезвоним вам 
                    в течение 5 минут</p>
            </div>
            <div class="order-form__group">
                <div class="order-form__column order-form__column_tablet">
                    <AppInput v-model="form.name" label="Ваше имя"/>
                    <AppInput mask="phone" type="tel" v-model="form.phone" placeholder="+7(___)___-__-__"/>
                </div>
            </div>
            <div class="order-form__group">
                <div class="order-form__group-header">
                    <div class="order-form__label">Доставка и оплата</div>
                </div>
                <app-tabs>
                    <app-tabs-item
                            v-for="item in [{name: 'Доставка'}, {name: 'Самовывоз'}]"
                            :key="item.name"
                            v-model="form.method"
                            :value="item.name"
                    >{{ item.name }}
                    </app-tabs-item>
                </app-tabs>
                <template v-if="form.method === 'Доставка'">
                    <AppInput v-model="form.address" label="Адрес доставки"/>
                </template>
                <template v-if="form.method === 'Самовывоз'">
                    <app-radio-list>
                        <app-radio
                                v-for="item in FILIALS"
                                v-model="form.filial"
                                :value="item.name"
                                name="method"
                                :key="item.id"
                        >{{ item.name }}
                        </app-radio>
                    </app-radio-list>
                </template>
            </div>
            <div class="order-form__group">
                <app-payment-list>
                    <app-payment
                            v-for="item in PAYMENT"
                            :key="item.id"
                            name="payment"
                            v-model="form.payment"
                            :value="item.name"
                    >
                        <component :is="icons[item.icon]"></component>
                        {{ item.name }}
                    </app-payment>
                </app-payment-list>
            </div>
            <div class="order-form__group">
                <div class="order-form__group-header">
                    <div class="order-form__label">Время доставки</div>
                </div>
                <app-tabs>
                    <app-tabs-item
                            v-for="item in [{name: 'Ближайшее'}, {name: 'Выбрать время'}]"
                            :key="item.name"
                            v-model="form.time"
                            :value="item.name"
                    >{{ item.name }}
                    </app-tabs-item>
                </app-tabs>
                <template v-if="form.time === 'Ближайшее'">
                    <p>В течении часа ожидайте доставку</p>
                </template>
                <template v-if="form.time === 'Выбрать время'">
                    <div class="order-form__column">
                        <app-select
                                v-model="form.day"
                                placeholder="День"
                        >
                            <app-select-item
                                    :class="{active: form.day === item.value}"
                                    v-for="item in DAY"
                                    :key="item.id"
                                    @click="form.day = item.value"
                            >{{ item.value }}
                            </app-select-item>
                        </app-select>
                        <app-select
                                v-model="form.hour"
                                placeholder="Время"
                        >
                            <app-select-item
                                    :class="{active: form.hour === item.value}"
                                    v-for="item in HOUR"
                                    :key="item.id"
                                    @click="form.hour = item.value"
                            >{{ item.value }}
                            </app-select-item>
                        </app-select>
                    </div>
                </template>
            </div>
            <div class="order-form__group">
                <div class="order-form__group-header">
                    <div class="order-form__label">Дополнительная информация</div>
                    <AppBoolean v-model="additional"/>
                </div>
                <template v-if="additional">
                    <div class="order-form__column order-form__column_tablet">
                        <AppInput v-model="form.comment" label="Комментарий"/>
                        <AppInput v-model="form.persons" label="Количество персон"/>
                    </div>
                </template>
            </div>
            <div class="order-form__group">
                <div class="order-form__group-header">
                    <div class="order-form__label">Сделаем скидку по промокоду</div>
                </div>
                <AppInputSubmit v-model="form.promo" label="Промокод"/>
            </div>
        </div>
        <div class="order-form__footer">
            <div class="order-form__bonus">
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
                259 Б доступно для списания
            </div>
            <AppInputSubmit v-model="form.bonus" label="Сколько списать?"/>
            <app-order-form-list>
                <app-order-form-item><span>3 товара</span><span>2120 <AppCurrency/></span></app-order-form-item>
                <app-order-form-item><span>Начислим бонусы</span><span>+10 Б</span></app-order-form-item>
                <app-order-form-item><span>Скидка</span><span>-150 <AppCurrency/></span></app-order-form-item>
                <app-order-form-item><span>Бонусы</span><span>-50 Б</span></app-order-form-item>
                <app-order-form-item><span>Доставка</span><span>0 <AppCurrency/></span></app-order-form-item>
                <app-order-form-item class="order-form__list-item_total"><span class="text-18">Итог</span><span class="text-20">1920 <AppCurrency/></span>
                </app-order-form-item>
            </app-order-form-list>
            <app-notifications type="error">Бесплатная доставка осуществляется от 1000 ₽.
                С условиями доставки вы можете ознакомиться
                <a href="#" target="_blank">по ссылке</a></app-notifications>
            <div class="order-form__submit">
                <app-button full>Оформить заказ</app-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.order-form {
  border-radius: 30px;
  border: 1px solid var(--border-color-1);
  @include media.respond-to(640) {
    border-radius: 20px;
  }
  @include media.respond-to(360) {
    border: none;
  }

  &__body {
    padding: 50px 80px 60px;
    @include media.respond-to(960) {
      padding: 50px;
    }
    @include media.respond-to(640) {
      padding: 40px 30px;
    }
    @include media.respond-to(360) {
      padding: 0;
      margin-bottom: 30px;
    }
  }

  &__header {
    margin-bottom: 30px;
    @include media.respond-to(360) {
      margin-bottom: 20px;
    }

    p {
      margin-top: 20px;
      font-size: media.sizeREM(15);
    }
  }

  &__group {
    margin-bottom: 50px;
    @include media.respond-to(360) {
      margin-bottom: 30px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &-header {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  &__column {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 15px;

    > * {
      width: 40%;
      flex-grow: 1;
      @include media.respond-to(360) {
        width: 100%;
      }
    }

    @include media.respond-from(640) {
      &_tablet {
        > * {
          width: 100%;
        }
      }
    }
  }

  &__footer {
    padding: 40px 65px 50px;
    border-radius: inherit;
    background: var(--main-color-2);
    @include media.respond-to(960) {
      padding: 40px 50px;
    }
    @include media.respond-to(640) {
      padding: 40px 30px;
    }
    @include media.respond-to(360) {
      padding: 30px var(--conteiner-padding);
      position: relative;
      width: 100vw;
      left: calc(var(--conteiner-padding) * -1);
    }

    .input-submit {
      margin-bottom: 20px;
    }
  }

  &__bonus {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: media.sizeREM(14);
  }

  &__list {
    margin-bottom: 20px;

    &-item {
      margin-bottom: 5px;
    }
  }

  &__submit {
    margin-top: 20px;

    .btn {
      height: 50px;
    }
  }
}
</style>