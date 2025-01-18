<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";

defineProps(['percent', 'bonus'])
</script>

<template>
    <div class="card-successfully">
        <AppSvg name="logo"/>
        <div class="card-successfully__wrap">
            <div class="card-successfully__percent">
                <span>{{ percent }}%</span>
                <p>накопительная <br> бонусная скидка</p>
            </div>
        </div>
        <div class="card-successfully__bonus">+{{bonus}} Б</div>
        <div class="card-successfully__wrap">
            <p>бонуса(ов) будет <br> зачислено с заказа</p>
            <p>Для использования <br> бонусов перейдите <br> <a href="#">в личный кабинет</a></p>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-successfully {
  border-radius: var(--radius-30);
  background: linear-gradient(86.86deg, var(--gradient));
  backdrop-filter: blur(15px);
  padding: 35px 40px;
  font-size: media.sizeREM(12);
  line-height: 130%;

  &__wrap {
    padding: 0 20px;
  }

  &__percent {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      font-size: media.sizeREM(32);
      font-weight: 600;
      color: var(--main-color-1);
    }
  }

  &__bonus {
    border-radius: var(--radius-10);
    background: var(--main-color-1);
    color: var(--main-white);
    padding: 10px 20px;
    font-size: media.sizeREM(40);
    font-weight: 500;
    line-height: 70%;
    margin-bottom: 10px;
    display: inline-block;
  }

  svg {
    display: block;
    width: 102px;
    height: 28px;
    fill: var(--main-color-1);
    stroke: var(--main-color-1);
    margin-bottom: 35px;
  }

  p {
    margin-bottom: 35px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>