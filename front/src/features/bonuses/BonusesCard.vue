<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
defineProps<{
    bonus: number,
    discount: number
}>()
</script>

<template>
    <div class="bonuses-card">
        <div class="bonuses-card__logo">
            <AppSvg name="logo"/>
        </div>
        <div class="bonuses-card__discount">
            <div class="text-12">текущая скидка</div>
            <div class="text-18">{{discount}}%</div>
        </div>
        <div class="bonuses-card__available">
            <div class="text-30">{{bonus.toLocaleString()}}</div>
            <div class="text-12">доступных <br> бонусов</div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.bonuses-card {
  padding: 22px 22px 26px;
  border-radius: var(--radius-30);
  background: linear-gradient(90deg, var(--gradient));
  width: 270px;
  height: 140px;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: var(--text-color-3);

  > * {
    width: 50%;
  }

  &__logo {
    svg {
      width: 62px;
      height: 18px;
      fill: var(--main-color-1);
      stroke: var(--main-color-1);
    }
  }

  &__discount {
    text-align: right;

    .text-18 {
      color: var(--main-color-1);
      margin-top: 4px;
    }
  }

  &__available {
    display: flex;
    align-items: center;
    margin-top: auto;
    gap: 5px;

    .text-12 {
      line-height: 1.2;
    }

    .text-30 {
      color: var(--main-color-1);
      font-weight: 500;
    }
  }
}
</style>