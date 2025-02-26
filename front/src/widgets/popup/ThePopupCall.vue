<script setup lang="ts">
import AppPopup from "@spared/AppPopup.vue";
import AppInput from "@spared/AppInput.vue";
import AppButton from "@spared/AppButton.vue";
import AppCheckbox from "@spared/AppCheckbox.vue";
import {useField, useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import {z} from 'zod';
import {ref} from "vue";
import AppSocials from "@entites/socials/AppSocials.vue";
import {http} from "@app/utils/http.ts";

const form = ref<null | HTMLElement>(null)
const active = ref<boolean>(false)
const validationSchema = toTypedSchema(
    z.object({
        phone: z.string({message: 'Обязательное поле'}).min(16, 'Введите номер полностью'),
        politic: z.boolean().default(true)
    })
);
const {handleSubmit, errors} = useForm({
    validationSchema,
});

const {value: phone} = useField('phone');
const {value: politic} = useField('politic');

const onSubmit = handleSubmit(async values => {
    for (let [name, value] of new FormData(form.value)) {
        console.log(`${name} = ${value}`);
    }
    await http({url: '/api/pages/favorites'})
    active.value = true
    form.value.reset()
    setTimeout(() => {
        active.value = false
    }, import.meta.env.PUBLIC_FORM_TIMEOUT)
});
</script>

<template>
    <app-popup name="call" content="call" position="right">
        <form ref="form" :class="['page-form', {active}]" @submit="onSubmit">
            <div class="page-form__send">
                <div class="page-header">
                    <h4>Заявка на звонок</h4>
                    <p class="text-16">Укажите ваш номер телефона
                        и мы перезвоним в течение 5 минут</p>
                </div>

                <div class="popup__inputs">
                    <AppInput mask="phone" type="tel" v-model="phone" name="phone"
                              placeholder="+7(___)___-__-__" :error="errors.phone"/>
                </div>
                <app-button type="submit" full size="big">Отправить заявку</app-button>
                <app-checkbox v-model="politic" name="politic" :value="true" required>
                    Я ознакомлен <a href="#" target="_blank">
                    с политикой <br>конфиденциальности</a></app-checkbox>
            </div>
            <div class="page-form__ok" v-if="active">
                <div class="page-header">
                    <h4>Ваша заявка
                        успешно отправлена</h4>
                    <p class="text-15">В течение нескольких минут вам перезвонит наш сотрудник. Пожалуйста, оставайтесь на связи</p>
                </div>
                <p class="text-15">Присоединяйтесь к нашим сообществам
                    в социальных сетях. Там вас ждут скидки, розыгрыши и последние новости</p>
                <app-socials/>
            </div>
        </form>
        <img src="/img/call.png" alt="" class="call__img">
    </app-popup>
</template>

<style lang="scss">
@use "@style/media";

.call {
  &__img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>