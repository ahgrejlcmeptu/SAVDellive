<script setup lang="ts">
import AppPopup from "@spared/AppPopup.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import AppCardPresent from "@features/card/AppCardPresent.vue";
import {SwiperSlide} from "swiper/vue";
import {presents} from "@app/store/present";
import {useStore} from "@nanostores/vue";
const $presents = useStore(presents)

</script>

<template>
    <app-popup name="present" content="present">
        <div class="page-header">
            <h3>Выберите свой вкусный подарок!</h3>
            <p class="text-15">Вы можете выбрать любой подарок, который понравится. Он будет передан Вам вместе с
                заказом. <a href="#" target="_blank">Подробности и условия акции читайте здесь</a></p>
        </div>
        <app-slider name="present">
            <swiper-slide
                    v-for="item in $presents"
                    :key="item.id"
            >
                <AppCardPresent :data="item"/>
            </swiper-slide>
        </app-slider>
    </app-popup>
</template>

<style lang="scss">
@use "@style/media";

.present {
  --popup-content: 986px;
  padding: 45px;
  overflow: hidden;
  @include media.respond-to(960) {
    padding-inline: var(--conteiner-padding);
  }
  @include media.respond-to(640) {
    padding-bottom: 30px;
  }

  .page-header {
    max-width: 555px;
  }

  .swiper {
    overflow: visible;

    &-slide {
      width: auto;
      margin-right: 40px;
      @include media.respond-to(960) {
        margin-right: var(--gap-page);
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>