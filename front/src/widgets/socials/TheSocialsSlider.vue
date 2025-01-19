<script setup lang="ts">
import AppCardSocial from "@features/card/AppCardSocial.vue";
import {SwiperSlide} from "swiper/vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {computed} from "vue";
import {sortByLink} from "@app/utils/sorting";

const props = defineProps(['data'])

const filter = computed(() => sortByLink(props.data))
</script>

<template>
    <app-slider name=".socials_slider" class="socials_slider">
        <swiper-slide
                v-for="item in filter"
                :key="item.id"
        >
            <AppCardSocial :data="item"/>
        </swiper-slide>
    </app-slider>
</template>

<style scoped lang="scss">
@use "@style/media";

.socials_slider {
  overflow: visible;

  .swiper-slide {
    width: 355px;
    margin-right: 20px;
    @include media.respond-to(360) {
      margin-right: 16px;
        width: 264px;
        .card-social {
            height: 200px;
            padding: 0;
        }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>