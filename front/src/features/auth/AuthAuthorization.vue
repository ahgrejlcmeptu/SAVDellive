<script setup lang="ts">
import AppInput from "@spared/AppInput.vue";
import AppButton from "@spared/AppButton.vue";
import {useField, useForm} from "vee-validate";
import {ref} from "vue";
import {toTypedSchema} from "@vee-validate/zod";
import {z} from "zod";
import {checkPassword} from "@app/utils/func.ts";
import {ERROR} from "@app/store/globalItems.ts";
import AppErrorText from "@spared/AppErrorText.vue";
import {Auth} from "@app/store/user.ts";
import {popupActive} from "@app/store/popup.ts";

const form = ref<null | HTMLElement>(null)
const formError = ref<null | string>(null)
const validationSchema = toTypedSchema(
    z.object({
        identifier: z.string({message: 'Обязательное поле'}).nonempty({message: 'Обязательное поле'}),
        password: z.string({message: 'Обязательное поле'}).min(8, 'Минимум 8 символов')
            .nonempty({message: 'Обязательное поле'})
            .refine(value => checkPassword(value) ? value : false, 'Пароль не соответствует требованиям (Латиница/Заглавная/Цифра)'),
    })
);
const {handleSubmit, errors} = useForm({
    validationSchema,
});
const {value: identifier} = useField('identifier');
const {value: password} = useField('password');

const onSubmit = handleSubmit(async values => {
    const result = await Auth.login(values)
    if (result.jwt) popupActive.setKey('auth', undefined)
    if (result.error) formError.value = result.error.message
});
</script>

<template>
    <form ref="form" :class="['page-form']" @submit="onSubmit">
        <div class="page-form__send">
            <div class="page-header">
                <h4>Вход в личный
                    кабинет</h4>
            </div>

            <div class="popup__inputs">
                <AppInput type="text" v-model="identifier" name="identifier" label="Логин или e-mail"
                          :error="errors.identifier"/>
                <AppInput type="password" v-model="password" name="password" label="Введите пароль"
                          :error="errors.password"/>
                <app-error-text v-if="formError">{{ ERROR[formError] }}</app-error-text>
            </div>
            <app-button type="submit" full size="big">Войти в кабинет</app-button>
        </div>
    </form>
</template>