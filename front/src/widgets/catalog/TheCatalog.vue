<script setup lang="ts">
import ThePopularGrid from "@widgets/popular/ThePopularGrid.vue";
import AppButton from "@spared/AppButton.vue";
import AppSvg from "@spared/AppSvg.vue";
import AppCatalogTabs from "@spared/catalog/AppCatalogTabs.vue";
import AppCatalogTab from "@spared/catalog/AppCatalogTab.vue";
import {SwiperSlide} from "swiper/vue";
import {computed, reactive} from "vue";

const props = defineProps(['catalog'])
const filter = reactive({
    categories: null
})

const filterItems = computed(() => {
    return props.catalog.filter(item => {
        if (!filter.categories) return true

        return filter.categories === item.name
    })
})


</script>

<template>
    <div class="catalog">
        {{filter}}
        <div class="catalog__header mb-50">
            <app-catalog-tabs>
                <SwiperSlide
                        v-for="item in catalog"
                        :key="item.id"
                >
                    <app-catalog-tab
                            :value="item.name"
                            name="categories"
                            v-model="filter.categories"
                    >{{ item.name }}
                    </app-catalog-tab>
                </SwiperSlide>
            </app-catalog-tabs>
            <div class="catalog__filter">
                <app-button>
                    <AppSvg name="filter"/>
                    Фильтр по ингредиентам
                </app-button>
            </div>
        </div>
        <div
                class="catalog__group mb-50"
                v-for="group in filterItems"
                :key="group.id"
        >
            <div class="page-header">
                <h2>{{ group.name }}</h2>
            </div>
            <ThePopularGrid :list="group.products"/>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.catalog {
  &__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--gap-page);

    .btn {
      svg {
        width: 16px;
        height: 18px;
      }
    }
  }

  &__group {
    &:last-child {
      margin-bottom: 0;
    }

  }
}
</style>