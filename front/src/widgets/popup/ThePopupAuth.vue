<script setup lang="ts">
import AppPopup from "@spared/AppPopup.vue";
import AuthAuthorization from "@features/auth/AuthAuthorization.vue";
import AuthRegistration from "@features/auth/AuthRegistration.vue";
import AuthPassword from "@features/auth/AuthPassword.vue";
import AppIcon from "@spared/AppIcon.vue";
import {markRaw, ref} from "vue";

const typeView = markRaw({
    authorization: AuthAuthorization,
    registration: AuthRegistration,
    password: AuthPassword
})
const typeActive = ref('authorization')
const tabs = ref([
    {
        name: 'Регистрация',
        type: 'registration'
    },
    {
        name: 'Авторизация',
        type: 'authorization'
    },
    {
        name: 'Забыли пароль?',
        type: 'password'
    }
])

</script>

<template>
    <app-popup name="auth" content="auth" position="right">
        <component :is="typeView[typeActive]"/>
        <div class="auth__tabs text-15">
            <a
                    href="#"
                    v-show="typeActive !== item.type"
                    @click.prevent="typeActive = item.type"
                    class="auth__item"
                    v-for="item in tabs"
                    :key="item.type"
            >{{ item.name }}</a>
        </div>
        <template v-if="typeActive === 'authorization'">
            <h6>Войти через соцсети</h6>
            <div class="auth__socials">
                <a href="#" @click.prevent>
                    <app-icon name="icon-vk"/>
                </a>
                <a href="#" @click.prevent>
                    <app-icon name="icon-fb"/>
                </a>
                <a href="#" @click.prevent>
                    <app-icon name="icon-ggl"/>
                </a>
                <a href="#" @click.prevent>
                    <app-icon name="icon-ya"/>
                </a>
            </div>
        </template>
    </app-popup>
</template>

<style lang="scss">
@use "@style/media";

.auth {
  &__tabs {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  &__item {
    cursor: pointer;
    color: var(--text-color-2);
    border-bottom: 1px solid var(--text-color-2);
  }

  &__socials {
    display: flex;
    gap: 25px;
  }

  h6 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
</style>