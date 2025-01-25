<script setup lang="ts">
import AppHistoryTd from "@entites/history/AppHistoryTd.vue";
import {ref} from "vue";

defineProps(['data'])
const isOpen = ref(null)

</script>

<template>
    <div class="history-table">
        <div class="history-table__thead">
            <div class="history-table__tr">
                <div class="history-table__cell">Дата</div>
                <div class="history-table__cell history-table__name">Номер заказа</div>
                <div class="history-table__cell">Бонусы</div>
                <div class="history-table__cell history-table__total">Итого</div>
                <div class="history-table__cell history-table__status">Статус</div>
                <div class="history-table__cell history-table__show"></div>
            </div>
        </div>
        <AppHistoryTd
                v-for="item in data"
                :key="item.id"
                :data="item"
                v-model="isOpen"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.history-table {
  font-size: media.sizeREM(14);
  @include media.respond-to(360) {
    font-size: media.sizeREM(12);
  }


  &__thead {
    background: var(--main-color-2);
  }

  &__tbody {
    color: var(--text-color-2);

    &.active {
      --show-rotate: 180deg;
      background: var(--main-color-7);
    }
  }

  &__tr {
    display: flex;

    &_hr {
      border-bottom: 1px solid var(--border-color-1);
    }
  }

  &__cell {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: var(--padding-left);
    width: 128px;
    flex-shrink: 0;
    @include media.respond-to(960) {
      width: 100px;
    }
    @include media.respond-to(360) {
      width: 80px;
      &:not(:first-child) {
        padding-left: 10px;
      }
    }
    @include media.respond-to(320) {
      width: 70px;
    }

    img {
      width: 42px;
      height: 28px;
      object-fit: contain;
    }
  }

  &__header {
    cursor: pointer;
  }

  &__name {
    flex-grow: 1;
  }
  &__total {
    @include media.respond-to(360) {
      width: 60px;
    }
  }

  &__status {
    @include media.respond-to(360) {
      display: none;
    }
  }
  &__amount {
    @include media.respond-to(360) {
      width: 44px;
    }
    @include media.respond-to(320) {
      width: 35px;
    }
  }

  &__item {
    @include media.respond-to(360) {
      .history-table__show {
        display: none;
      }
    }
  }

  &__show {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 155px;
    padding-right: 20px;

    @include media.respond-to(960) {
      width: 44px;
      padding-right: var(--padding-left);
      span {
        display: none;
      }
    }
    @include media.respond-to(320) {
      width: 35px;
    }

    svg {
      transition: .3s;
      width: 14px;
      height: 8px;
      flex-shrink: 0;
      stroke: var(--text-color-2);
      transform: rotateX(var(--show-rotate, 0));
    }
  }

  &__footer {
    padding: 20px var(--padding-left);
    --btn-paddin: 50px;
    @include media.respond-to(640) {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    @include media.respond-to(360) {
      .btn {
        width: 100%;
      }
    }
  }
}
</style>