<script setup lang="ts">
import AppPopup from "@spared/AppPopup.vue";
import AppSocials from "@entites/socials/AppSocials.vue";
import AppButton from "@spared/AppButton.vue";
import {popupOpen, popupClose} from "@app/store/popup.ts";
import {branchesActive, blockNavigation} from "@app/store/block";
import {useStore} from "@nanostores/vue";

const $branchesActive = useStore(branchesActive)
const $blockNavigation = useStore(blockNavigation)

</script>

<template>
    <app-popup name="burger" content="burger" position="right">
        <div class="burger__content">
            <div class="burger__nav">
                <div class="burger__link">
                    <a href="/catalog">Наше меню</a>
                </div>
                <div class="burger__link" v-for="item in $blockNavigation.links">
                    <a :href="item.href">{{item.name}}</a>
                </div>
            </div>
            <AppSocials/>
            <div class="burger__group">
                <div class="text-15">Режим работы</div>
                <div class="text-14">
                    <template v-for="item in $branchesActive.mode" :key="item">
                        {{ item }}<br>
                    </template>
                </div>
            </div>
            <div class="burger__group">
                <div class="text-15">Адрес</div>
                <div class="text-14">
                    {{ $branchesActive.city }}, <br>
                    {{ $branchesActive.street }}
                </div>
            </div>
            <div class="burger__group">
                <div class="text-15">Телефон</div>
                <div class="text-14">
                    <a :href="'tel:' + $branchesActive.phone">{{ $branchesActive.phone }}</a>
                </div>
            </div>
            <app-button full @action="popupOpen('auth'), popupClose('burger')">Войти</app-button>
        </div>
    </app-popup>
</template>

<style lang="scss">
@use "@style/media";

.burger {
  &__link {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__group {
    margin-top: 10px;

    .text-15 {
      margin-bottom: 4px;
    }

    .text-14 {
      color: var(--text-color-3);
    }
  }

  &__content {
    max-width: 175px;

    .socials {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .btn {
      margin-top: 20px;
    }
  }
}
</style>