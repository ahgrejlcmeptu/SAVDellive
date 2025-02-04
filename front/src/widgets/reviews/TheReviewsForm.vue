<script setup lang="ts">
import AppInput from "@spared/AppInput.vue";
import AppFile from "@entites/AppFile.vue";
import AppButton from "@spared/AppButton.vue";
import AppCheckbox from "@spared/AppCheckbox.vue";
import {reactive} from "vue";

const form = reactive({
    name: '',
    phone: '',
    review: '',
    file: null,
    politic: true
})
const submit = () => {
    console.log(555)
}
</script>

<template>
    <form @submit.prevent="submit" class="reviews-form">
        <div class="page-header page-header_center">
            <h3>Оставить отзыв</h3>
            <p class="text-16">Оставьте пожалуйста свой отзыв <br>
                о нас, Ваше мнение для нас очень важно.</p>
        </div>

        <div class="reviews-form__inputs">
            <AppInput class="_w50" color="white" v-model="form.name" label="Ваше имя"/>
            <AppInput class="_w50" color="white" type="tel" v-model="form.phone" placeholder="+7 ___ ___ __ __"/>
            <AppInput color="white" type="textarea" v-model="form.review" label="Напишите отзыв"/>
            <AppFile color="white" v-model="form.file" placeholder="Загрузить видео"/>
        </div>
        <div class="reviews-form__footer">
            <app-button type="submit" full size="big">Отправить заявку</app-button>
            <app-checkbox v-model="form.politic" name="politic" :value="true" required>Я ознакомлен <a href="#"
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