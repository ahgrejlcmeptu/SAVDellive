<script setup lang="ts">
import AppInput from "@spared/AppInput.vue";
import AppButton from "@spared/AppButton.vue";
import AppTooltip from "@spared/AppTooltip.vue";
import {computed, reactive, ref} from "vue";
import AppSvg from "@spared/AppSvg.vue";

const props = defineProps(['data'])
const disabled = computed(() => {
    return true
})

const form = reactive({
    name: props.data.name,
    surname: props.data.surname,
    phone: props.data.phone,
    email: props.data.email,
    login: props.data.login,
    password: '',
    newPassword: '',
    repeatPassword: ''
})

</script>

<template>
    <div class="lk-personal">
        <div class="lk-personal__group mb-40">
            <div class="page-header">
                <h3>Персональные данные</h3>
                <p>В этом разделе в можете изменить данные <br> и параметры входа в личный кабинет</p>
            </div>
            <div class="lk-personal__inputs">
                <AppInput class="_w50" name="name" v-model="form.name" label="Имя"/>
                <AppInput class="_w50" name="surname" v-model="form.surname" label="Фамилия"/>
                <AppInput mask="phone" class="_w50" type="tel" name="phone" v-model="form.phone" label="Телефон"/>
                <AppInput class="_w50" type="email" name="email" v-model="form.email" label="E-mail"/>
            </div>
        </div>
        <div class="lk-personal__group">
            <div class="page-header">
                <h3>Данные для входа в личный кабинет</h3>
            </div>
            <div class="lk-personal__inputs mb-30">
                <AppInput class="_w50" name="login" v-model="form.login" label="Логин"/>
                <AppInput class="_w50" type="password" name="password" v-model="form.password" label="Пароль"/>
            </div>
            <div class="lk-personal__info">
                <app-tooltip class="full">
                    <template v-slot:btn>
                        <AppSvg name="question"/>
                    </template>
                    <template v-slot:default>
                        <ol class="text-15">
                            <li>минимальная длина - 8 символов</li>
                            <li>не может содержать только цифры</li>
                            <li>без кириллических символов</li>
                        </ol>
                    </template>
                </app-tooltip>
                <p>Для смены пароля задайте новый пароль</p>
            </div>
            <div class="lk-personal__password">
                <AppInput class="_w50" type="password" name="login" v-model="form.newPassword" label="Новый пароль"/>
                <AppInput class="_w50" type="password" name="password" v-model="form.repeatPassword"
                          label="Повторите новый пароль"/>
            </div>
        </div>

        <div class="lk-personal__footer">
            <app-button size="big" full class="_w50" type="submit" :disabled="disabled">Сохранить</app-button>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.lk-personal {
  max-width: 770px;
  --gap: 30px;

  @include media.respond-to(960) {
    --gap: 20px
  }

  .input {
    width: 100%;
  }

  ._w50 {
    @include media.respond-from(360) {
      width: calc(50% - var(--gap) / 2);
    }
  }

  .tooltip__btn {
    --tooltip-size: 26px;
  }

  &__inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px var(--gap);
  }

  &__password {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
  }

  &__footer {
    margin-top: 20px;
  }
}
</style>