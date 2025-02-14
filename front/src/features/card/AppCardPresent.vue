<script setup lang="ts">
import {computed, ref} from "vue";
import AppButton from "@spared/AppButton.vue";
import AppCurrency from "@spared/AppCurrency.vue";
import AppProgressCircle from "@spared/progress/AppProgressCircle.vue";
import {basketTotal} from "@app/store/basket";
import {useStore} from "@nanostores/vue";

const $basketTotal = useStore(basketTotal)
const props = defineProps(['data'])
const status = computed(() => $basketTotal.value < props.data.price)
const active = ref(false)
const check = () => {
    console.log('выбрали подарок')
}
</script>

<template>
    <div :class="['card-present', {active}]">
        <div class="card-present__top">
            <img class="card-present__img" :src="data.img" :alt="data.name">
            <img v-if="active" class="card-present__check" src="/img/present-check.svg" alt="">
        </div>
        <div class="card-present__body">
            <div class="card-present__info">
                <h6>{{ data.name }}</h6>
                <p class="text-15">{{ data.compound }}</p>
            </div>
            <div class="card-present__footer">
                <div v-if="status" class="card-present__status">
                    <div class="card-present__icon">
                        <app-progress-circle :progress="$basketTotal * 100 / data.price">%</app-progress-circle>
                    </div>
                    <p class="card-present__progress text-15">
                        <span class="active">Доступно при <br> заказе от {{ data.price }}<AppCurrency/></span>
                        <span class="hover">Не хватает <br> {{ data.price - $basketTotal }}<AppCurrency/></span>
                    </p>
                </div>
                <template v-else>
                    <template v-if="active">
                        <p class="text-15">Подарок добавлен в корзину, скорее оформляйте заказ</p>
                      <app-button full href="/order">Оформить заказ</app-button>
                    </template>
                    <app-button v-else full @action="check">Забрать подарок</app-button>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-present {
  width: 268px;
  min-height: 410px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius-30);
  border: 1px solid var(--border-color-1);

  @include media.respond-to(640) {
    width: 240px;
    min-height: 380px;
  }
  @include media.respond-to(360) {
    width: 220px;
    min-height: 330px;
  }

  &.active {
    background: var(--main-color-2);
    text-align: center;

    .card-present__info {
      display: none;
    }

    p {
      margin-bottom: 10px;
    }
  }

  @include media.hover {
    .card-present__progress {
      color: var(--main-color-1);

      .active {
        opacity: 0;
      }

      .hover {
        opacity: 1;
      }
    }
  }

  &__top {
    height: 214px;
    background: var(--main-color-2);
    position: relative;
    @include media.respond-to(640) {
      height: 190px;
    }
    @include media.respond-to(360) {
      height: 170px;
    }
  }

  &__check {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 30px 30px;
    @include media.respond-to(640) {
      padding: 10px 20px;
    }
    @include media.respond-to(360) {
      padding: 10px;
    }

    h6 {
      margin-bottom: 15px;
    }
  }

  &__footer {
    margin-top: auto;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__progress {
    position: relative;

    > * {
      transition: .3s;
    }

    .hover {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
}
</style>