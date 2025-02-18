<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import AppIcon from "@spared/AppIcon.vue";
import AppItemValue from "@spared/AppItemValue.vue";
import AppSocials from "@entites/socials/AppSocials.vue";
import AppDropdown from "@spared/dropdown/AppDropdown.vue";
import AppDropdownItem from "@spared/dropdown/AppDropdownItem.vue";
import {popupOpen} from "@app/store/popup.ts";
import {branches, branchesActive, branchesChange, pageInfo} from "@app/store/block";
import {useStore} from "@nanostores/vue";
import {basketLength} from "@app/store/basket";
import {favoritesLength} from "@app/store/favorites";

const $basketLength = useStore(basketLength)
const $favoritesLength = useStore(favoritesLength)
const $pageInfo = useStore(pageInfo)
const $branches = useStore(branches)
const $branchesActive = useStore(branchesActive)
</script>

<template>
    <div class="container">
        <div class="header-top">
            <div class="header-top__wrap header-top__wrap_left">
                <app-dropdown class="header__item_city" v-if="$branchesActive">
                    <template v-slot:button>
                        <div class="header__item">
                            <AppIcon name="icon-pin"/>
                            <div class="header__item-body">
                                Ваш город <br>
                                <span>{{ $branchesActive.city }} <app-svg class="dropdown-arr" name="dropdown"/></span>
                            </div>
                        </div>
                    </template>
                    <template v-slot:list>
                        <app-dropdown-item
                                v-for="item in $branches"
                                :key="item.id"
                                :class="{active: item.id === $branchesActive.id}"
                                @click="branchesChange(item.id)"
                        >{{ item.city }}
                        </app-dropdown-item>
                    </template>
                </app-dropdown>
                <div class="header__item header__item_desktop">
                    <AppIcon name="icon-clock"/>
                    <div class="header__item-body">
                        <template v-for="item in $branchesActive.mode" :key="item">
                            {{ item }}<br>
                        </template>
                    </div>
                </div>
            </div>
            <div class="header-top__logo">
                <a href="/">
                    <app-svg name="logo"/>
                </a>
            </div>
            <div class="header-top__wrap header-top__wrap_right">
                <app-socials/>
                <a class="header__item header__item_phone header__item_desktop" :href="'tel:' + $branchesActive.phone"
                   @click.prevent="popupOpen('call')">
                    <AppIcon name="icon-phone"/>
                    <div class="header__item-body">
                        <span>{{ $branchesActive.phone }}</span>
                        <br>
                        Заказать звонок
                    </div>
                </a>
                <div class="header__item header__item_burger" @click="popupOpen('burger')">
                    <AppIcon color="main" name="icon-burger"/>
                </div>
            </div>
            <div class="header-top__wrap header-top__wrap_controls">
                <a href="/favorites" class="header__item header__item_favorites">
                    <AppIcon name="icon-favorites"/>
                    <app-item-value v-if="$favoritesLength">{{$favoritesLength}}</app-item-value>
                </a>
                <div class="header__item header__item_basket" @click="popupOpen('basket')" data-basket>
                    <AppIcon name="icon-basket"/>
                    <app-item-value v-if="$basketLength">{{$basketLength}}</app-item-value>
                </div>
                <a :href="'tel:' + $branchesActive.phone" class="header__item header__item_phone">
                    <AppIcon name="icon-phone"/>
                </a>
                <div v-if="!$pageInfo.user" class="header__item header__item_user" @click="popupOpen('auth')">
                    <AppIcon name="icon-user"/>
                </div>
                <a v-else href="/lk" class="header__item header__item_user">
                    <AppIcon name="icon-user"/>
                    <app-item-value>{{$pageInfo.user?.bonus}}Б</app-item-value>
                </a>

            </div>
        </div>
    </div>
</template>
