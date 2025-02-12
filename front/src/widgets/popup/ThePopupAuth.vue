<script setup lang="ts">
import AppPopup from "@spared/AppPopup.vue";
import AppInput from "@spared/AppInput.vue";
import AppButton from "@spared/AppButton.vue";
import {useField, useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import {z} from 'zod';
import {ref} from "vue";
import AppSocials from "@entites/socials/AppSocials.vue";

const form = ref<null | HTMLElement>(null)
const validationSchema = toTypedSchema(
    z.object({
        identifier: z.string({message: 'Обязательное поле'}),
        password: z.string({message: 'Обязательное поле'}),
    })
);
const {handleSubmit, errors} = useForm({
    validationSchema,
});

const {value: identifier} = useField('identifier');
const {value: password} = useField('password');

const onSubmit = handleSubmit(values => {
    for (let [name, value] of new FormData(form.value)) {
        console.log(`${name} = ${value}`);
    }
});
</script>

<template>
    <app-popup name="auth" content="auth" position="right">
        <form ref="form" :class="['page-form']" @submit="onSubmit">
            <div class="page-form__send">
                <div class="page-header">
                    <h4>Вход в личный
                        кабинет</h4>
                </div>

                <div class="popup__inputs">
                    <AppInput type="text" v-model="identifier" name="identifier" label="Логин или e-mail" :error="errors.identifier"/>
                    <AppInput type="password" v-model="password" name="password" label="Введите пароль" :error="errors.password"/>
                </div>
                <app-button type="submit" full size="big">Войти в кабинет</app-button>
            </div>
        </form>
    </app-popup>
</template>

<style lang="scss">
@use "@style/media";


</style>