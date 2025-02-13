<script setup lang="ts">
import AppInput from "@spared/AppInput.vue";
import AppButton from "@spared/AppButton.vue";
import {useField, useForm} from "vee-validate";
import {ref} from "vue";
import {toTypedSchema} from "@vee-validate/zod";
import {z} from "zod";

const form = ref<null | HTMLElement>(null)
const validationSchema = toTypedSchema(
    z.object({
        login: z.string({message: 'Обязательное поле'}),
        email: z.string({message: 'Обязательное поле'}),
        password: z.string({message: 'Обязательное поле'}),
    })
);
const {value: login} = useField('login');
const {value: email} = useField('email');
const {value: password} = useField('password');
const {handleSubmit, errors} = useForm({
    validationSchema,
});
const onSubmit = handleSubmit(values => {
    for (let [name, value] of new FormData(form.value)) {
        console.log(`${name} = ${value}`);
    }
});
</script>

<template>
    <form ref="form" :class="['page-form']" @submit="onSubmit">
        <div class="page-form__send">
            <div class="page-header">
                <h4>Регистрация</h4>
            </div>

            <div class="popup__inputs">
                <AppInput type="text" v-model="login" name="identifier" label="Логин" :error="errors.login"/>
                <AppInput type="email" v-model="email" name="identifier" label="E-mail" :error="errors.email"/>
                <AppInput type="password" v-model="password" name="password" label="Введите пароль" :error="errors.password"/>
            </div>
            <app-button type="submit" full size="big">Регистрация</app-button>
        </div>
    </form>
</template>