<script setup lang="ts">
import AppTabsSlider from "@features/tabs/AppTabsSlider.vue";
import AppSlider from "@entites/slider/AppSlider.vue";
import {SwiperSlide} from "swiper/vue";
import {computed, ref, watch} from "vue";
import type {Swiper as SwiperType} from "swiper";

interface TabData {
    id: string;
    title: string;
    description: string;
    img: string;
}

const DATA: TabData[] = [
    {
        id: '1',
        title: 'Условия доставки',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at consequuntur deleniti deserunt eius eveniet ex facilis incidunt labore libero neque, officiis, pariatur praesentium quasi quis rerum velit voluptas voluptatum.</p>',
        img: '/img/seo.jpg'
    },
    {
        id: '2',
        title: 'Условия оплаты',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur eligendi, enim impedit in inventore iste necessitatibus neque rem voluptatibus?</p>',
        img: '/img/seo.jpg'
    },
    {
        id: '3',
        title: 'Связаться с оператором',
        description: '<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi asperiores, at ducimus eligendi iure laboriosam provident! Accusamus, beatae blanditiis ex fuga maxime minima necessitatibus nemo perspiciatis ratione soluta tenetur?</span><span>Alias corporis expedita laboriosam magnam minima! A assumenda at commodi cupiditate ea, est excepturi fuga id iusto maiores maxime nihil omnis optio perspiciatis possimus quia quos reprehenderit tempore voluptates, voluptatum?</span><span>A ab earum eius omnis quaerat repellat velit vero voluptas voluptatum! Aliquid molestias numquam officiis reprehenderit voluptatibus! Consequuntur et ex harum, illo ipsam nostrum, provident quibusdam saepe suscipit vero, vitae?</span><span>Ab architecto commodi corporis doloribus incidunt laborum maiores nobis officiis, pariatur porro provident qui quidem rerum saepe, sequi? Architecto, id molestiae natus officiis quibusdam ratione sint sunt tempora? Asperiores, nemo.</span><span>At culpa modi pariatur perspiciatis quia, sequi voluptas? Delectus deserunt dolorum ducimus est expedita fuga fugiat in itaque, laborum laudantium magnam, magni minima modi neque officia quis sed temporibus voluptatibus?</span><span>A adipisci alias asperiores, assumenda consectetur distinctio dolore eius eligendi ipsa laboriosam maxime minima modi natus non nulla perspiciatis praesentium provident quis, ratione rerum tempora vitae voluptatem? Laborum, odit unde.</span><span>Ab autem dolore dolorum exercitationem ipsum labore magnam neque nisi non officia, placeat quis quos repellendus sunt suscipit unde voluptatum! Ad cum distinctio ducimus illum, nisi nostrum obcaecati quibusdam repellendus.</span><span>Blanditiis harum neque perferendis perspiciatis quasi voluptas. Accusamus aliquid aspernatur at aut beatae debitis, dolor ducimus error exercitationem ipsa maiores, minima minus necessitatibus neque non quae quaerat repellat reprehenderit ullam?</span><span>Ab, debitis ea fuga magnam magni molestiae nostrum quas quisquam recusandae rem suscipit tempora, totam? Alias beatae blanditiis commodi dignissimos fugiat, ipsa ipsum neque non, recusandae reiciendis reprehenderit veniam voluptate!</span><span>Accusamus amet animi asperiores cupiditate dolorem doloremque, earum, enim excepturi harum impedit ipsa maiores necessitatibus officia, quis suscipit tempora voluptas! Beatae cum, eos excepturi facilis id perspiciatis similique temporibus totam!</span><span>A accusamus adipisci, assumenda atque commodi cumque delectus dolor eveniet exercitationem illo illum impedit inventore ipsa iusto laudantium minima, natus nihil nostrum odit quas quidem quis, rerum sequi suscipit voluptas?</span><span>Animi atque consequatur dolor expedita impedit ipsam maxime, vel. Consectetur, quis, tempora. Aliquam asperiores cum esse molestias mollitia officiis reprehenderit. Culpa deserunt harum modi molestias non, officiis repudiandae soluta vel?</span><span>Dolorum laborum quas quasi vero! A consequatur consequuntur corporis cupiditate debitis fuga ipsam iste, labore laboriosam nobis optio perferendis provident sequi voluptates voluptatum! Deserunt eaque ipsa nulla perferendis voluptas, voluptates?</span><span>A, alias animi aperiam blanditiis consectetur ducimus enim excepturi explicabo facilis necessitatibus nobis nostrum nulla officia porro possimus rerum sapiente sed totam ut voluptatibus. Accusantium cumque numquam odit quis repudiandae!</span><span>Animi eius, et facilis ipsum molestiae non obcaecati quia rerum velit veniam? Asperiores atque beatae deleniti dolorum itaque minus, nisi nobis obcaecati odit optio perferendis perspiciatis voluptates. Iste, officia, ullam?</span><span>Aliquam delectus deserunt earum eligendi eos harum itaque maiores molestias mollitia numquam omnis optio pariatur quaerat quisquam repudiandae unde, voluptas voluptates voluptatum! Doloribus esse, impedit nisi quod repellendus rerum similique!</span><span>Asperiores cumque doloremque dolorum ea enim ex facilis harum incidunt ipsum iste labore laborum maiores molestias necessitatibus nemo nisi officia, omnis pariatur quia similique sint suscipit totam veniam voluptatem voluptatum.</span><span>Doloribus ea id magni maxime nesciunt, placeat quas quisquam vel? Adipisci assumenda, delectus excepturi magnam minima molestiae molestias nihil nisi nobis numquam optio praesentium quasi rerum similique, tenetur. Labore, rerum!</span><span>Id ipsa, voluptatibus! Assumenda fugiat id inventore ipsa laboriosam saepe sed tenetur! Aliquam corporis, dignissimos, dolore excepturi, fugiat incidunt iusto libero maiores modi molestias pariatur perferendis quasi ratione repellat voluptatibus.</span><span>Aut deleniti repellendus sequi tempore ut. Ad aperiam cum ea earum eum molestiae sapiente soluta. Ad, at blanditiis eius fugit incidunt ipsam minima nihil nulla repudiandae voluptate. Laborum nobis, voluptas.</span></p>',
        img: '/img/seo.jpg'
    }
]
const TABS = computed(() => {
    return DATA.map(({id, title}) => ({id, name: title}))
})

const activeTabs = ref<string | number>(TABS.value[0].id)
const slider = ref<SwiperType | null>(null)
watch(activeTabs, (value) => {
    const index = DATA.findIndex(({id}) => id === value)
    slider.value.slideTo(index)
})

const onSwiperInit = (swiper: SwiperType) => slider.value = swiper;
</script>

<template>
    <div class="seo">
        <AppTabsSlider :slides="TABS" v-model="activeTabs"/>
        <app-slider
                @swiper="onSwiperInit"
                class="seo__slider"
                name=".seo"
                :slider="{
                    effect: 'fade',
                    'allow-touch-move': false,
                    'auto-height': true
                }"
        >
            <swiper-slide class="clearfix" v-for="item in DATA" :key="item.id">
                <div class="seo__img">
                    <img :src="item.img" :alt="item.title">
                </div>
                <div class="seo__body">
                    <h2>{{ item.title }}</h2>
                    <div class="seo__description" v-html="item.description"></div>
                </div>
            </swiper-slide>
        </app-slider>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.seo {
  position: relative;

  .tabs-slider {
    position: absolute;
    width: 57%;
    right: 0;
    top: 0;
    z-index: 2;
    @include media.respond-to(960) {
      position: relative;
      width: 100%;
    }

    + .seo__slider .seo__body {
      padding-top: 70px;
    }
  }

  &__slider {
    width: 100%;

    .swiper-slide {
      height: auto;
      background-color: var(--main-white);
    }
  }

  &__img {
    float: left;
    width: 40%;
    margin-right: 35px;
    margin-bottom: 10px;
    @include media.respond-to(960) {
      display: none;
    }

    img {
      width: 100%;
      border-radius: var(--radius-30);
    }
  }

  &__body {
    @include media.respond-to(960) {
      float: none;
      width: 100%;
    }

    h2 {
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 15px;
      line-height: 160%;
    }
  }
}
</style>