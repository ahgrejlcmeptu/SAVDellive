<script setup lang="ts">
import AppCurrency from "@spared/AppCurrency.vue";
import {computed} from "vue";
import {localeNumber} from "@app/utils/locale.ts";

const PERCENTS = [
    {
        id: 1,
        value: 1,
        total: 0
    },
    {
        id: 2,
        value: 3,
        total: 5000
    },
    {
        id: 3,
        value: 5,
        total: 10000
    }
]

const progress = computed((): number => {
    const val = 30;
    return val
})
</script>

<template>
    <div class="bonuses-progress" :style="{'--progress': progress + '%'}">
        <h3>Бонусная система</h3>
        <p class="text-16">Дарим бонусы в каждом заказе. Копите или используйте бонусы в последующих заказах. 1Б = 1₽,
            подробности тут</p>

        <div class="bonuses-progress__range">
            <div
                    class="bonuses-progress__item"
                    v-for="item in PERCENTS"
                    :key="item.id"
            >
                <div class="bonuses-progress__value text-18">{{ item.value }}%</div>
                <div class="bonuses-progress__total text-12">от {{ localeNumber(item.total)}}
                    <AppCurrency/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.bonuses-progress {
  width: 50%;
  flex-grow: 1;

  h3 {
    margin-bottom: 4px;
  }

  &__range {
    margin-top: 35px;
    position: relative;
    background: var(--text-color-4);
    height: 4px;
    border-radius: var(--radius-2);
    margin-bottom: 20px;

    &:before {
      content: '';
      position: absolute;
      height: 100%;
      border-radius: inherit;
      background: var(--main-color-1);
      width: var(--progress, 1%);
      max-width: 100%;
    }
  }

  &__item {
    position: absolute;
    bottom: 100%;
    margin-bottom: 3px;
    left: var(--pos, 50%);
    white-space: nowrap;
    transform: translateX(var(--pos-item, -50%));

    &:first-child {
      --pos: 0%;
      --pos-item: 0;
      --pos-total: 0;
      --left-total: 0;
    }

    &:last-child {
      --pos: 100%;
      --pos-item: -100%;
      --pos-total: -100%;
      --left-total: 100%;
    }
  }

  &__value {
    color: var(--main-color-1)
  }

  &__total {
    position: absolute;
    left: var(--left-total, 50%);
    top: 100%;
    margin-top: 12px;
    transform: translateX(var(--pos-total, -50%));
    color: var(--text-color-2);
  }
}
</style>