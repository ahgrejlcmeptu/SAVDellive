<script setup lang="ts">
import AppPopup from "@spared/AppPopup.vue";
import AppStatusList from "@spared/status/AppStatusList.vue";
import AppStatus from "@spared/status/AppStatus.vue";
import AppFavorites from "@spared/AppFavorites.vue";
import AppButton from "@spared/AppButton.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import {popupCard} from "@app/store/popup";
import {useStore} from "@nanostores/vue";

const data = useStore(popupCard)
</script>

<template>
    <app-popup name="card" content="popup-card" mobile>
        <div class="popup-card__img">
            <app-status-list>
                <app-status v-if="data.oldPrice">Акция</app-status>
            </app-status-list>
            <AppFavorites/>
            <img :src="data.img" :alt="data.name">
        </div>
        <div class="popup-card__body">
            <div class="popup-card__header text-15">
                <h6>{{ data.name }}</h6>
                <span>8 шт. 210 гр</span>
                <p class="text-16">{{ data.description }}</p>
            </div>
            <div class="popup-card__footer">
                <div class="text-20">{{ data.price }} <AppCurrency /></div>
                <s class="text-14" v-if="data.oldPrice">{{data.oldPrice}} <AppCurrency /></s>
                <app-button>В корзину</app-button>
            </div>
        </div>
    </app-popup>
</template>

<style lang="scss">
@use "@style/media";

.popup-card {
    --popup-content: 770px;
    display: flex;
    min-height: 328px;
    padding: 0;
    @include media.respond-to(360) {
        flex-direction: column;
        --popup-content: 400px;
    }

    &__img {
        background: var(--main-color-2);
        width: 370px;
        min-height: 100%;
        position: relative;
        border-radius: inherit;
        overflow: hidden;
        --status-top: 30px;
        --status-left: 30px;
        --favorites-pos: 30px;
        @include media.respond-to(360) {
            width: 100%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__header {
        max-width: 275px;

        h6 {
            margin-bottom: 15px;
        }

        span {
            color: var(--text-color-3);
        }

        p {
            margin-top: 15px;
        }
    }

    &__body {
        align-self: center;
        padding: 40px;
        width: 400px;
        @include media.respond-to(640) {
            padding: 30px;
        }
        @include media.respond-to(360) {
            width: 100%;
            padding: 20px;
        }
    }
    &__footer {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 40px;
        gap: 10px;

        s {
            color: var(--text-color-3);
        }

        .btn {
            margin-left: auto;
        }
    }
}

</style>