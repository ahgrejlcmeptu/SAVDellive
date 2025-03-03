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
import AppSelectItem from "@spared/select/AppSelectItem.vue";
import AppOrderFormList from "@spared/order/AppOrderFormList.vue";
import AppOrderFormItem from "@spared/order/AppOrderFormItem.vue";
import {markRaw, reactive, ref, watch} from "vue";
import {toTypedSchema} from "@vee-validate/zod";
import {z} from "zod";
import {useField, useForm} from "vee-validate";
import {formEmptyValue} from "@app/utils/func.ts";
import {orderCreate} from "@app/store/orders.ts";
import {branches, pageInfo} from "@app/store/block.ts";
import {useStore} from "@nanostores/vue";
import AppErrorText from "@spared/AppErrorText.vue";
import {PAYMENT, DAY, HOUR} from "@app/store/globalItems.ts";

const $pageInfo = useStore(pageInfo)
const $branches = useStore(branches)
const USER = ref(false)
const additional = ref<boolean>(false)
const form = ref<null | HTMLElement>(null)
const icons = markRaw({
    cash: IconCash,
    card: IconCard,
    online: IconOnline
})
const formLoad = ref(false)

const validationSchema = toTypedSchema(
    z
        .object({
            name: z.string().optional(),
            phone: z.string({message: 'Обязательное поле'}).nonempty({message: 'Обязательное поле'}).min(16, 'Введите номер полностью'),
            method: z.string().default('Доставка'),
            address: z.string({message: 'Обязательное поле'}).nonempty({message: 'Обязательное поле'}),
            payment: z.string().default('Наличными курьеру'),
            time: z.string().default('Ближайшее'),
            day: z.string().optional().refine(
                (val) => {
                    if (time.value === 'Ближайшее') return true
                    return val
                },
                () => ({message: 'Обязательное поле'})
            ),
            hour: z.string().optional().refine(
                (val) => {
                    if (time.value === 'Ближайшее') return true
                    return val
                },
                () => ({message: 'Обязательное поле'})
            ),
            promo: z.string().optional(),
            comment: z.string().optional(),
            persons: z.string().optional(),
            // bonus: z.string()
        })
);


const {handleSubmit, errors} = useForm({validationSchema});

const {value: name} = useField('name');
const {value: phone} = useField('phone');
const {value: method} = useField('method');
const {value: address} = useField('address');
const {value: payment} = useField('payment');
const {value: time} = useField('time');
const {value: day} = useField('day');
const {value: hour} = useField('hour');
const {value: promo} = useField('promo');
const {value: comment} = useField('comment');
const {value: persons} = useField('persons');
// const {value: bonus} = useField('bonus');

const methodTabs = reactive({
    address: undefined,
    filial: undefined
})
const timeTabs = reactive({
    day: '',
    hour: ''
})

watch(
    () => method.value,
    (value) => {
        address.value = null
        if (value === 'Доставка') address.value = methodTabs.address
        if (value === 'Самовывоз') address.value = methodTabs.filial
    }
)
watch(
    () => methodTabs.address,
    (value) => {
        address.value = value
    }
)
watch(
    () => methodTabs.filial,
    (value) => {
        address.value = value
    }
)
watch(
    () => time.value,
    (value) => {
        day.value = undefined
        hour.value = undefined
        if (value !== 'Ближайшее') {
            day.value = timeTabs.day
            hour.value = timeTabs.hour
        }
    }
)
watch(
    () => timeTabs.day,
    (value) => {
        day.value = value
    }
)
watch(
    () => timeTabs.hour,
    (value) => {
        hour.value = value
    }
)

const onSubmit = handleSubmit(async values => {
    formLoad.value = true
    const val = formEmptyValue(values)
    const result = await orderCreate({data: val})
    if (result) location.href = '/successfully?id=' + result.documentId
    formLoad.value = false
});

</script>

<template>
    <form ref="form" class="order-form" @submit="onSubmit">
        <div class="order-form__body">
            <div class="order-form__header">
                <h3>Оформление заявки</h3>
                <p>Проверьте ваш заказ и укажите контактные данные для связи. Мы перезвоним вам 
                    в течение 5 минут</p>
            </div>
            <div class="order-form__group">
                <div class="order-form__column order-form__column_tablet">
                    <AppInput v-model="name" label="Ваше имя"/>
                    <AppInput mask="phone" type="tel" name="phone" v-model="phone" placeholder="+7(___)___-__-__"
                              :error="errors.phone"/>
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
                            v-model="method"
                            :value="item.name"
                    >{{ item.name }}
                    </app-tabs-item>
                </app-tabs>
                <template v-if="method === 'Доставка'">
                    <AppInput v-model="methodTabs.address" label="Адрес доставки"/>
                </template>
                <template v-if="method === 'Самовывоз'">
                    <app-radio-list>
                        <app-radio
                                v-for="item in $branches"
                                v-model="methodTabs.filial"
                                :value="item.city + ', ' + item.street"
                                name="method"
                                :key="item.documentId"
                        >{{ item.city + ', ' + item.street }}
                        </app-radio>
                    </app-radio-list>
                </template>
                <app-error-text>{{ errors.address }}</app-error-text>
            </div>
            <div class="order-form__group">
                <app-payment-list>
                    <app-payment
                            v-for="item in PAYMENT"
                            :key="item.id"
                            name="payment"
                            v-model="payment"
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
                            v-model="time"
                            :value="item.name"
                    >{{ item.name }}
                    </app-tabs-item>
                </app-tabs>
                <template v-if="time === 'Ближайшее'">
                    <p>В течении часа ожидайте доставку</p>
                </template>
                <template v-if="time === 'Выбрать время'">
                    <div class="order-form__column">
                        <app-select
                                v-model="timeTabs.day"
                                placeholder="День"
                                :error="errors.day"
                        >
                            <app-select-item
                                    :class="{active: day === item.value}"
                                    v-for="item in DAY"
                                    :key="item.id"
                                    @click="timeTabs.day = item.value"
                            >{{ item.value }}
                            </app-select-item>
                        </app-select>
                        <app-select
                                v-model="timeTabs.hour"
                                :error="errors.hour"
                                placeholder="Время"
                        >
                            <app-select-item
                                    :class="{active: timeTabs.hour === item.value}"
                                    v-for="item in HOUR"
                                    :key="item.id"
                                    @click="timeTabs.hour = item.value"
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
                        <AppInput v-model="comment" label="Комментарий"/>
                        <AppInput v-model="persons" label="Количество персон"/>
                    </div>
                </template>
            </div>
            <div class="order-form__group" v-if="$pageInfo.promo">
                <div class="order-form__group-header">
                    <div class="order-form__label">Сделаем скидку по промокоду</div>
                </div>
                <AppInputSubmit v-model="promo" label="Промокод"/>
            </div>
        </div>
        <div class="order-form__footer">
            <template v-if="USER">
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
            </template>
            <app-order-form-list>
                <app-order-form-item><span>3 товара</span><span>2120 <AppCurrency/></span></app-order-form-item>
                <app-order-form-item v-if="USER"><span>Начислим бонусы</span><span>+10 Б</span></app-order-form-item>
                <app-order-form-item><span>Скидка</span><span>-150 <AppCurrency/></span></app-order-form-item>
                <app-order-form-item v-if="USER"><span>Бонусы</span><span>-50 Б</span></app-order-form-item>
                <app-order-form-item><span>Доставка</span><span>0 <AppCurrency/></span></app-order-form-item>
                <app-order-form-item class="order-form__list-item_total"><span class="text-18">Итог</span><span
                        class="text-20">1920 <AppCurrency/></span>
                </app-order-form-item>
            </app-order-form-list>
            <app-notifications type="error">Бесплатная доставка осуществляется от 1000 ₽.
                С условиями доставки вы можете ознакомиться
                <a href="#" target="_blank">по ссылке</a></app-notifications>
            <div class="order-form__submit">
                <app-button type="submit" full :disabled="formLoad">Оформить заказ</app-button>
            </div>
        </div>
    </form>
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