<script setup lang="ts">
import AppHistoryTd from "@entites/history/AppHistoryTd.vue";
defineProps(['data'])
</script>

<template>
    <div class="history-table">
        <div class="history-table__thead">
            <div class="history-table__tr">
                <div class="history-table__th">Дата</div>
                <div class="history-table__th">Номер заказа</div>
                <div class="history-table__th">Бонусы</div>
                <div class="history-table__th">Итого</div>
                <div class="history-table__th">Статус</div>
                <div class="history-table__th"></div>
            </div>
        </div>
        <AppHistoryTd
          v-for="item in data"
          :key="item.id"
          :data="item"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.history-table {
  display: table;
  width: 100%;
  font-size: media.sizeREM(14);


  &__thead {
    display: table-header-group;
    background: var(--main-color-2);
  }

  &__tbody {
    display: table-row-group;
    color: var(--text-color-2);
  }

  &__tr {
    display: table-row;
  }

  &__th {
    display: table-cell;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: var(--padding-left);
  }

  &__td {
    display: table-cell;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: var(--padding-left);
    min-width: 128px;

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

    &.active {
      --show-rotate: 180deg;
    }
  }

  &__name {
    width: 200%;
  }

  &__show {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 96px;
    svg {
      transition: .3s;
      width: 14px;
      height: 8px;
      stroke: var(--text-color-2);
      transform: rotateX(var(--show-rotate, 0));
    }
  }
}
</style>