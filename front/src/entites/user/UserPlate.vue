<script setup lang="ts">
import AppButton from "@spared/AppButton.vue";
import AppTooltipContainer from "@spared/tooltip/AppTooltipContainer.vue";
import {pageInfo} from "@app/store/block";
import {useStore} from "@nanostores/vue";
const user = useStore(pageInfo).value.user

</script>

<template>
    <div class="user-plate">
        <app-tooltip-container tongue>
            <a href="/lk" class="user-plate__top">
                <img :src="user.img" alt="">
                <span class="text-15">{{ user.name }}</span>
                <p class="text-15">{{ user.phone }}</p>
            </a>
            <div class="user-plate__bonus">
                <div class="text-30">{{ user.bonus }}</div>
                <div class="text-12">доступных <br> бонусов</div>
            </div>
            <app-button full>Выйти</app-button>
        </app-tooltip-container>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.user-plate {
  position: absolute;
  //width: 256px;
  //padding: 30px 20px;
  //box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  //background: var(--main-white);
  //border-radius: var(--radius-20);
  margin-top: 20px;
  top: 100%;
  left: -60px;

  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    p {
      font-weight: 500;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
  }

  &__bonus {
    margin-bottom: 15px;
    border-radius: var(--radius-10);
    background: linear-gradient(-90deg, var(--gradient));
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 30px;

    .text-30 {
      font-weight: 500;
      color: var(--main-color-1);
    }

    .text-12 {
      color: var(--text-color-3);
      line-height: 1.1;
    }

  }
}
</style>