<script setup lang="ts">
import {useField, useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import {z} from 'zod';

import AppInput from "@spared/AppInput.vue";
import AppFile from "@entites/AppFile.vue";
import AppButton from "@spared/AppButton.vue";
import AppCheckbox from "@spared/AppCheckbox.vue";
import {ref} from "vue";

const form = ref(null)
const testInput = ref(null)
const validationSchema = toTypedSchema(
    z.object({
        phone: z.string({message: 'Обязательное поле'}).min(16, 'Введите номер полностью'),
        politic: z.boolean().default(true)
    })
);
// .optional() .refine
const {handleSubmit, errors} = useForm({
    validationSchema,
});

const {value: name} = useField('name');
const {value: phone} = useField('phone');
const {value: review} = useField('review');
const {value: file} = useField('file');
const {value: politic} = useField('politic');

const onSubmit = handleSubmit(values => {
    for (let [name, value] of new FormData(form.value)) {
        console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
    }
});
</script>

<template>
    <form ref="form" @submit="onSubmit" class="reviews-form">
        <div class="page-header page-header_center">
            <h3>Оставить отзыв</h3>
            <p class="text-16">Оставьте пожалуйста свой отзыв <br>
                о нас, Ваше мнение для нас очень важно.</p>
        </div>

        <div class="reviews-form__inputs">
            <AppInput class="_w50" color="white" v-model="name" name="name" label="Ваше имя"/>
            <AppInput ref="testInput" mask="phone" class="_w50" color="white" type="tel" v-model="phone" name="phone"
                      placeholder="+7(___)___-__-__" :error="errors.phone"/>
            <AppInput color="white" type="textarea" v-model="review" name="review" label="Напишите отзыв"/>
            <AppFile color="white" v-model="file" name="file" placeholder="Загрузить видео"/>
        </div>
        <div class="reviews-form__footer">
            <app-button type="submit" full size="big">Отправить заявку</app-button>
            <app-checkbox v-model="politic" name="politic" :value="true" required>Я ознакомлен <a href="#"
                                                                                                  target="_blank">
                с политикой <br>конфиденциальности</a></app-checkbox>
        </div>
    </form>
</template>

<style lang="scss">
@use "@style/media";

.reviews-form {
  align-self: flex-start;
  padding: 30px;
  border-radius: var(--radius-30);
  width: 370px;
  flex-shrink: 0;
  background: linear-gradient(95.04deg, var(--gradient));
  @include media.respond-to(960) {
    width: 360px;
  }
  @include media.respond-to(640) {
    width: 100%;
  }
  @include media.respond-to(360) {
    padding-left: 15px;
    padding-right: 15px;
  }

  &__inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__footer {
    margin-top: 20px;
    gap: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    @include media.respond-from(360) {
      @include media.respond-to(640) {
        .btn {
          width: 40%;
          flex-grow: 1;
          order: 1;
        }
        .app-checkbox {
          width: 40%;
          flex-grow: 1;
        }
      }
    }
  }

  .input, .input-file {
    width: 100%;
    flex-grow: 1;

    &._w50 {
      @include media.respond-from(360) {
        @include media.respond-to(640) {
          width: 40%;
        }
      }
    }
  }

  .page-header {
    margin-bottom: 20px;

    p {
      margin-top: 10px;
    }
  }
}
</style>