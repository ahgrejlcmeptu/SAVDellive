<script setup lang="ts">
import AppTooltipContainer from "@spared/tooltip/AppTooltipContainer.vue";
import AppButton from "@spared/AppButton.vue";
import {popupOpen} from "@app/store/popup.ts";
</script>

<template>
    <div class="user-auth">
        <app-tooltip-container>
            <p>Не забудьте авторизоваться, чтобы мы могли начислить бонусы за заказ</p>
            <app-button @action="popupOpen('auth')">Войти</app-button>
        </app-tooltip-container>
    </div>
</template>

<style lang="scss">
.user-auth {
  position: absolute;
  --tooltip-width: 376px;
  --tooltip-background: linear-gradient(95deg, var(--gradient-2));
  margin-top: 10px;
  top: 100%;
  left: -60px;

  .btn {
    margin-top: 12px;
  }
}
</style>