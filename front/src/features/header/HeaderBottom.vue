<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import HeaderNav from "@entites/header/HeaderNav.vue";
import AppItemValue from "@spared/AppItemValue.vue";
import {popupOpen} from "@app/store/popup.ts";
import {pageInfo} from "@app/store/block.ts";
import {useStore} from "@nanostores/vue";

const $pageInfo = useStore(pageInfo)
</script>

<template>
    <div class="container">
        <div class="header-bottom">
            <HeaderNav/>
            <div class="header-bottom__controls">
                <a href="/favorites" class="header-bottom__btn header-bottom__btn_favorites">
                    <app-svg name="favorites"></app-svg>
                    <app-item-value>1</app-item-value>
                </a>
                <div class="header-bottom__btn header-bottom__btn_basket" @click="popupOpen('basket')">
                    <app-svg name="basket"></app-svg>
                    <app-item-value>1</app-item-value>
                </div>
                <div v-if="!$pageInfo.user" class="header-bottom__btn header-bottom__btn_auth"
                     @click="popupOpen('auth')">
                    <app-svg name="auth"></app-svg>
                </div>
                <div v-else class="header-bottom__btn header-bottom__btn_user"
                     @click="popupOpen('auth')">
                    <app-svg name="user"></app-svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.header-bottom {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @include media.respond-to(960) {
    padding: 15px 0;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 15px;
    @include media.respond-to(960) {
      display: none;
    }
  }

  &__btn {
    position: relative;
    cursor: pointer;
    padding: 0 5px;
    --color: var(--text-color-2);

    @include media.hover {
      --color: var(--main-color-1);
    }

    &_favorites {
      --svg-width: 21px;
      --svg-height: 18px;
    }

    &_basket {
      --svg-width: 21px;
      --svg-height: 20px;
    }

    &_auth {
      --svg-width: 12px;
      --svg-height: 19px;
    }

    &_user {
      --svg-width: 17px;
      --svg-height: 19px;
        svg {
            stroke-width: 1.5px;
        }
    }

    svg {
      transition: .3s;
      display: block;
      width: var(--svg-width);
      height: var(--svg-height);
      stroke: var(--color);
      fill: var(--color);
    }
  }
}
</style>
