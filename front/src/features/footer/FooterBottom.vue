<script setup lang="ts">
import {fullYear} from "@app/utils/date.ts";
</script>

<template>
    <div class="footer-bottom">
        <div class="container footer-bottom__wrapper">
            <div class="footer__column_one footer-bottom__item">© {{ fullYear() }} Dellive <br>
                ИП Тихонов
            </div>
            <div class="footer__column_two footer-bottom__item">
                <a href="#" target="_blank">Политика <br> конфиденциальности</a>
            </div>
            <div class="footer__column_three footer-bottom__item">
                <a href="#" target="_blank">Согласие на обработку <br> персональных данных</a>
            </div>
            <div class="footer__column_four footer-bottom__item">
                Разработка и поддержка <br> <a href="#" target="_blank">mirsaitov.net</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@style/media";

.footer-bottom {
  background-color: var(--main-color-2);
  padding: 20px 0;
  font-size: media.sizeREM(15);
  line-height: 135%;
  color: var(--text-color-2);
  @include media.respond-to(960) {
    padding: 30px 0;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @include media.respond-to(640) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__item {
    @include media.respond-from(960) {
      flex-grow: 1;
    }
  }

  a {
    text-decoration: underline;
  }
}
</style>