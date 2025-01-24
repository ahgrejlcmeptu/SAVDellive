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
                <div class="history-table__th">Дата</div>
                <div class="history-table__th history-table__name">Номер заказа</div>
                <div class="history-table__th">Бонусы</div>
                <div class="history-table__th">Итого</div>
                <div class="history-table__th">Статус</div>
                <div class="history-table__th history-table__show"></div>
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

  &__th {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: var(--padding-left);
    min-width: 128px;
  }

  &__td {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: var(--padding-left);
    width: 128px;
    flex-shrink: 0;

    &:last-child {
      padding-right: 20px;
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

  &__show {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 155px;


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
  }
}
</style>