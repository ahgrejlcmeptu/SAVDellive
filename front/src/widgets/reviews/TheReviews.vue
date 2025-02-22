<script setup lang="ts">
import AppSection from "@spared/AppSection.vue";
import AppCardReview from "@features/card/AppCardReview.vue";
import AppLinkBottom from "@spared/AppLinkBottom.vue";
import SwiperButton from "@spared/SwiperButton.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";

defineProps(['data'])
</script>

<template>
    <app-section class="mb-100" :title="data.title" header="center" v-if="data">
        <div class="reviews text-16">
            <swiper-button tablet prev/>
            <swiper-button tablet next/>
            <app-slider
                    :slider="{loop: true}"
                    name=".reviews"
            >
                <swiper-slide
                        v-for="item in data.list"
                        :key="item.documentId"
                >
                    <AppCardReview
                            :data="item"
                    />
                </swiper-slide>
            </app-slider>
        </div>
        <app-link-bottom v-if="data.link"><a :href="data.linkHref">{{data.linkText}}</a></app-link-bottom>
    </app-section>
</template>

<style lang="scss">
@use "@style/media";

.reviews {
  --button-pos: -100px;
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @include media.respond-to(960) {
    width: 100%;
    --button-pos: 0;
  }

  .swiper {
    overflow: visible;
    margin: 0;
    @include media.respond-from(640) {
      @include media.respond-to(960) {
        width: 71%;
        overflow: hidden;
      }
    }
  }

  .swiper-slide {
    width: calc(50% - 15px);
    flex-grow: 1;
    margin-right: 30px;
    transition: .3s transform;
    @include media.respond-to(960) {
      margin-right: 20px;
      width: 100%;
    }
    @include media.respond-to(360) {
      margin-right: 15px;
    }

    &-prev {
      transform: translateX(-160px);
    }

    &-next {
      + .swiper-slide {
        transform: translateX(160px);
      }
    }
  }
}
</style>