<script setup lang="ts">
import AppTabsButton from "@entites/tabs/AppTabsButton.vue";
import AppSvg from "@spared/AppSvg.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";
import {computed} from "vue";

interface Data {
    data: {
        id: string | number;
        name: string;
        icon: string;
    }
}

interface Props {
    modelValue: string | number;
    slides: Data
}

const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])
const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    },
})

</script>

<template>
    <app-slider name=".tabs-slider" class="tabs-slider">
        <swiper-slide v-for="item in slides" :key="item.id">
            <app-tabs-button
                    :class="[{'active': model === item.id}]"
                    @action="model = item.id"
            >
                <AppSvg v-if="item.icon" :href="item.icon"/>
                <span>{{ item.name }}</span>
            </app-tabs-button>
        </swiper-slide>
    </app-slider>
</template>

<style lang="scss">
@use "@style/media";

.tabs-slider {
  overflow: visible;
  margin-bottom: 30px;
  @include media.respond-to(640) {
    margin-bottom: 25px;
  }
  @include media.respond-to(360) {
    margin-bottom: 20px;
  }

  .swiper-slide {
    width: auto;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>