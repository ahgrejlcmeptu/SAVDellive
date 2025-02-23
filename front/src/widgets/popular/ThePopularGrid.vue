<script setup lang="ts">
import AppSection from "@spared/AppSection.vue";
import AppCardProduct from "@features/card/AppCardProduct.vue";
import AppCardDeclaration from "@features/card/AppCardDeclaration.vue";
import AppLinkBottom from "@spared/AppLinkBottom.vue";
import AppTabsSlider from "@features/tabs/AppTabsSlider.vue";
import {computed, ref} from "vue";

const props = defineProps(['data'])

const statuses = ref(props.data.statuses)
const products = ref(props.data.products)

const active = ref(statuses.value[0].documentId)
const filter = computed(() => {
    return products.value.filter(({statuses}) => statuses.find(i => i.documentId === active.value)).slice(0, 8)
})

</script>

<template>
    <app-section class="mb-100" :title="data.title" header="center">
        <AppTabsSlider v-if="statuses.length > 1" :slides="statuses" v-model="active"/>
        <TransitionGroup tag="div" class="popular-grid" name="cards">
            <template
                    v-for="item in filter"
                    :key="item.id"
            >
                <AppCardProduct
                        v-if="item.type !== 'declaration'"
                        class="card-product_mobile"
                        :data="item"
                />
                <AppCardDeclaration v-else :data="item"/>
            </template>
        </TransitionGroup>
        <app-link-bottom v-if="data.linkBottom"><a :href="data.linkBottomHref || '/catalog'">{{ data.linkBottomText || 'Смотретьвсе' }}</a></app-link-bottom>
    </app-section>
</template>

<style lang="scss">
@use "@style/media";
@use "@style/transition";

.popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width, 20%), 1fr));
  grid-gap: 30px;
  @include media.respond-to(960) {
    grid-gap: 30px 20px;
    --card-width: 30%;
    .card-product {
      &:nth-child(n+7) {
        display: none;
      }
    }
  }
  @include media.respond-to(640) {
    grid-gap: 20px;
    --card-width: 40%;
  }
  @include media.respond-to(360) {
    grid-gap: 10px;
    --card-width: 100%;
    .card-product {
      &:nth-child(n+5) {
        display: none;
      }
    }
  }
}
</style>