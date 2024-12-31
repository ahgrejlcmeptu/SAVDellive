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

import {reactive, ref, watch} from "vue";

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
    },
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
    },
]
const PAYMENT = [
    {
        id: '1',
        name: 'Наличными курьеру',
        icon: ''
    },
    {
        id: '2',
        name: 'Картой курьеру',
        icon: ''
    },
    {
        id: '3',
        name: 'Оплата онлайн',
        icon: ''
    },
]
const form = reactive({
    name: '',
    phone: '',
    method: 'Доставка',
    address: '',
    payment: '',
    time: 'Ближайшее',
})
const additional = ref(false)

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
                <AppInput v-model="form.name" label="Ваше имя"/>
                <AppInput type="tel" v-model="form.phone" placeholder="+7 ___ ___ __ __"/>
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
                    >{{item.name}}</app-tabs-item>
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
                      >{{item.name}}</app-radio>
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
                          :value="item.name">{{item.name}}</app-payment>
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
                    >{{item.name}}</app-tabs-item>
                </app-tabs>
                <template v-if="form.time === 'Ближайшее'">
                    <p>В течении часа ожидайте доставку</p>
                </template>
                <template v-if="form.time === 'Выбрать время'">

                </template>
            </div>
            <div class="order-form__group">
                <div class="order-form__group-header">
                    <div class="order-form__label">Дополнительная информация</div>
                    <AppBoolean v-model="additional"/>
                </div>
                <template v-if="additional">
                    <AppInput v-model="form.comment" label="Комментарий"/>
                    <AppInput v-model="form.persons" label="Количество персон"/>
                </template>
            </div>
            <div class="order-form__group">
                <div class="order-form__group-header">
                    <div class="order-form__label">Сделаем скидку по промокоду</div>
                </div>

            </div>
        </div>
        <div class="order-form__footer">
            <div class="order-form__submit">
                <app-button>Оформить заказ</app-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.order-form {
  border-radius: 30px;
  border: 1px solid var(--border-color-1);

  &__body {
    padding: 50px 80px 60px;
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

    .input {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-header {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  &__footer {
    padding: 40px 65px 50px;
    border-radius: inherit;
    background: var(--main-color-2);
  }

  &__submit {
    margin-top: 20px;

    .btn {
      height: 50px;
      width: 100%;
    }
  }
}
</style>