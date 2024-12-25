<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import AppIcon from "@spared/AppIcon.vue";
import AppItemValue from "@spared/AppItemValue.vue";
import AppSocials from "@entites/socials/AppSocials.vue";
</script>

<template>
    <div class="container">
        <div class="header-top">
            <div class="header-top__wrap header-top__wrap_left">
                <div class="header__item header__item_city">
                    <AppIcon name="icon-pin"/>
                    <div class="header__item-body">
                        Ваш город <br>
                        <span>Иркутск <app-svg name="dropdown"/></span>
                    </div>
                </div>
                <div class="header__item header__item_desktop">
                    <AppIcon name="icon-clock"/>
                    <div class="header__item-body">
                        с 10:00 до 24:00 <br>
                        пт-сб: 10:00 до 02:00
                    </div>
                </div>
            </div>
            <div class="header-top__logo">
                <a href="/">
                    <app-svg name="logo"/>
                </a>
            </div>
            <div class="header-top__wrap header-top__wrap_right">
                <app-socials />
                <a class="header__item header__item_phone header__item_desktop" href="tel:+79086509000">
                    <AppIcon name="icon-phone"/>
                    <div class="header__item-body">
                        <span>+7 908 650-90-00</span>
                        <br>
                        Заказать звонок
                    </div>
                </a>
                <div class="header__item header__item_burger">
                    <AppIcon color="main" name="icon-burger"/>
                </div>
            </div>
            <div class="header-top__wrap header-top__wrap_controls">
                <div class="header__item header__item_favorites">
                    <AppIcon name="icon-favorites"/>
                    <app-item-value>1</app-item-value>
                </div>
                <div class="header__item header__item_basket">
                    <AppIcon name="icon-basket"/>
                    <app-item-value>100</app-item-value>
                </div>
                <div class="header__item header__item_phone">
                    <AppIcon name="icon-phone"/>
                </div>
                <div class="header__item header__item_user">
                    <AppIcon name="icon-user"/>
                    <app-item-value>1000Б</app-item-value>
                </div>
            </div>
        </div>
    </div>
</template>
