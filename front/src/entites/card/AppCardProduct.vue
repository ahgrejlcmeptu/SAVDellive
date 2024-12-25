<script setup lang="ts">
import AppFavorites from "@spared/AppFavorites.vue";
import AppStatus from "@spared/AppStatus.vue";
import AppButton from "@spared/AppButton.vue";
import AppSvg from "@spared/AppSvg.vue";

interface Props {
    data: {
        id: any;
        name: string;
        category: any;
        status: any;
        description: string;
        price: number;
        oldPrice?: number;
        weight: number;
        img: string;
    }
}

defineProps<Props>()
</script>

<template>
    <div class="card-product">
        <AppFavorites/>
        <div class="card-product__group">
            <div class="card-product__top">
                <app-status v-if="data.oldPrice">Акция</app-status>
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
                    <div class="card-product__price text-20">{{ data.price }}</div>
                    <s class="card-product__oldPrice text-14" v-if="data.oldPrice">{{ data.oldPrice }}</s>
                    <s class="card-product__weight text-14" v-if="data.weight">{{ data.weight }}</s>
                </div>
            </div>
        </div>
        <div class="card-product__footer">
            <app-button full>
                <AppSvg name="plus"/>
                В корзину
                <div class="card-product__amount">1</div>
            </app-button>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-product {
  position: relative;
  transition: .3s;
  border-radius: var(--radius-30) var(--radius-30) 0 0;
  display: flex;
  flex-direction: column;

  @include media.respond-to(640) {
    --radius-30: var(--radius-20)
  }

  @include media.hover {
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

  &__group {
    flex-grow: 1;
    border-radius: var(--radius-30) var(--radius-30) 0 0;
    border: 1px solid var(--border-color-1);
    background-color: var(--main-white);
    border-bottom-width: 0;
    display: flex;
    flex-direction: column;
    @media(hover) {
      border-radius: var(--radius-30);
      border-bottom-width: 1px;
    }
  }

  &__top {
    position: relative;
  }

  &__img {
    img {
      display: block;
      width: 100%;
      border-radius: var(--radius-30) var(--radius-30) 0 0;
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

  &__amount {
    min-width: 18px;
    height: 18px;
    padding: 3px 6px;
    text-align: center;
    border-radius: 50%;
    background-color: #EDE4FF;
    font-size: media.sizeREM(11);
    font-weight: 500;
    color: var(--main-color-1);
    opacity: .8;
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