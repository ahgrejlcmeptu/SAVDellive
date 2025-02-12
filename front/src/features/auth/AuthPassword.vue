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
        identifier: z.string({message: 'Обязательное поле'}),
    })
);
const {value: identifier} = useField('identifier');
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
                <h4>Восстановление пароля</h4>
            </div>

            <div class="popup__inputs">
                <AppInput type="text" v-model="identifier" name="identifier" label="Логин или e-mail" :error="errors.identifier"/>
            </div>
            <app-button type="submit" full size="big">Выслать новый пароль</app-button>
        </div>
    </form>
</template>