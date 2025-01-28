<script setup lang="ts">
import AppCurrency from "@spared/AppCurrency.vue";
import AppFavorites from "@spared/AppFavorites.vue";
import AppStatus from "@spared/status/AppStatus.vue";
import AppStatusList from "@spared/status/AppStatusList.vue";
import AppButton from "@spared/AppButton.vue";
import AppSvg from "@spared/AppSvg.vue";
import AppAmount from "@spared/AppAmount.vue";
import type {Card} from "@app/utils/interfaces";
import type {PropType} from "vue";


defineProps({
    data: {
        type: Object as PropType<Card>,
        required: true
    },
    successfully: {
        type: Boolean,
        required: false
    }
})
</script>

<template>
    <div class="card-product">
        <AppFavorites/>
        <div class="card-product__group">
            <div class="card-product__top">
                <app-status-list>
                    <app-status v-if="data.oldPrice">Акция</app-status>
                </app-status-list>
                <div class="card-product__img">
                    <img :src="data.img" :alt="data.name">
                </div>
            </div>
            <div class="card-product__body">
                <div class="card-product__header">
                    <h6>{{ data.name }}</h6>
                    <p class="text-16">{{ data.description }}</p>
                </div>
                <div class="card-product__main">
                    <div class="card-product__price text-20">{{ data.price }} <AppCurrency /></div>
                    <s class="card-product__oldPrice text-14" v-if="data.oldPrice">{{ data.oldPrice }} <AppCurrency /></s>
                    <div class="card-product__weight text-14" v-if="data.weight">{{ data.weight }}</div>
                </div>
            </div>
        </div>
        <div class="card-product__footer" v-if="!successfully">
            <app-button full>
                <AppSvg name="plus"/>
                В корзину
                <AppAmount :value="1"/>
            </app-button>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-product {
  position: relative;
  transition: .3s;
  border-radius: var(--radius-30);
  display: flex;
  flex-direction: column;

  &:has(.card-product__footer) {
    border-radius: var(--radius-30) var(--radius-30) 0 0;

    .card-product {
        &__group {
            border-bottom-width: 0;
            border-radius: var(--radius-30) var(--radius-30) 0 0;
            @media(hover) {
                border-radius: var(--radius-30);
                border-bottom-width: 1px;
            }
        }
        &__img {
            border-radius: var(--radius-30) var(--radius-30) 0 0;
            @include media.respond-to(360) {
                border-radius: var(--radius-30) 0 0 0;
            }
        }
    }
  }

  @include media.hover {
    &:has(.card-product__footer) {
      box-shadow: 0 0 20px rgba(#000, .1);

      .card-product {
        &__group {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        &__footer {
          opacity: 1;
        }
      }
    }
  }

  &__group {
    border-radius: var(--radius-30);
    flex-grow: 1;
    border: 1px solid var(--border-color-1);
    background-color: var(--main-white);
    display: flex;
    flex-direction: column;
  }

  &__top {
    position: relative;
  }

  &__img {
    img {
      display: block;
      width: 100%;
      border-radius: var(--radius-30) var(--radius-30) 0 0;
        @include media.respond-to(360) {
            border-radius: var(--radius-30) 0 0 var(--radius-30);
        }
    }
  }

  &__body {
    padding: 15px 20px 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__header {
    p {
      margin-top: 10px;
    }
  }

  &__main {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    margin-top: 15px;
  }

  &__oldPrice {
    color: var(--text-color-3);
  }

  &__weight {
    margin-left: auto;
    color: var(--text-color-3);
  }

  &__footer {
    z-index: 1;
    transition: .3s;
    @media(hover) {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      opacity: 0;
    }

    .btn {
      height: 56px;
      border-radius: 0 0 var(--radius-30) var(--radius-30);
      font-size: media.sizeREM(15);
      @include media.respond-to(640) {
        height: 50px;
      }
      @include media.respond-to(360) {
        height: 40px;
      }

      svg {
        width: 14px;
        height: 14px;
        stroke: var(--main-white);
      }
    }
  }

  &_mobile {
    @include media.respond-to(360) {

      .app-favorites {
        top: 15px;

        svg {
          width: 15px;
          height: 14px;
        }
      }

      .app-status {
        top: 12px;
        left: 12px;
      }

      .card-product {
        &__footer {
          opacity: 1;
          position: relative;
          top: 0;
        }

        &__group {
          flex-direction: row;
        }

        &__top {
          width: 47%;
          flex-shrink: 0;
        }

        &__img {
          height: 100%;

          img {
            height: 100%;
            object-fit: cover;
          }
        }

        &__header {
          h6 {
            font-size: media.sizeREM(14);
            padding-right: 23px;
          }

          p {
            font-size: media.sizeREM(11);
          }
        }

        &__body {
          width: 50%;
          flex-grow: 1;
          padding: 15px;
        }

        &__price {
          font-size: media.sizeREM(15);
        }

        &__oldPrice,
        &__weight {
          font-size: media.sizeREM(12);
        }
      }
    }
  }
}
</style>