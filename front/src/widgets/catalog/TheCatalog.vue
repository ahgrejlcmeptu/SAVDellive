<script setup lang="ts">
import ThePopularGrid from "@widgets/popular/ThePopularGrid.vue";
import AppButton from "@spared/AppButton.vue";
import AppSvg from "@spared/AppSvg.vue";
import AppCatalogTabs from "@spared/catalog/AppCatalogTabs.vue";
import AppCatalogTab from "@spared/catalog/AppCatalogTab.vue";
import {SwiperSlide} from "swiper/vue";
import {computed, onMounted, reactive, ref, watch} from "vue";
import AppDropdown from "@spared/dropdown/AppDropdown.vue";
import AppIngredientItem from "@spared/ingredient/AppIngredientItem.vue";
import {updateLocationSearch} from "@app/utils/updateLocationSearch.ts";

const props = defineProps(['catalog', 'declaration'])
const filter = reactive({
    categories: null,
    ingredient: {}
})
const ingredientFilter = reactive({})
const ingredient = ref([
    {
        id: 1,
        name: 'Рис с короткими зернами'
    },
    {
        id: 2,
        name: 'Рис закругленными зернами'
    },
    {
        id: 3,
        name: 'Филе лосося'
    },
    {
        id: 4,
        name: 'Филе тунца'
    },
    {
        id: 5,
        name: 'Крем-сыр «Филадельфия»'
    },
    {
        id: 6,
        name: 'Огурец'
    },
    {
        id: 7,
        name: 'Авокадо'
    },
    {
        id: 8,
        name: 'Рисовый уксус'
    }
])

const filterItems = computed(() => {
    return props.catalog.filter(item => {
        if (!filter.categories) return true

        return filter.categories === item.name
    })
})

watch(
    () => filter.categories,
    (val) => {
        updateLocationSearch(val, 'categories')
    }
)

onMounted(() => {
    const currentUrl = new URL(window.location.href);
    const params = new URLSearchParams(currentUrl.search);
    filter.categories = params.get('categories')
    const ingredient = JSON.parse(params.get('ingredient'))
    if (!ingredient) return

    filter.ingredient = ingredient
    for (let key in ingredient) ingredientFilter[key] = ingredient[key]
})

const add = () => {
    filter.ingredient = {...ingredientFilter}
    updateLocationSearch(JSON.stringify(ingredientFilter), 'ingredient')
}
const reset = () => {
    for (let i in ingredientFilter) delete ingredientFilter[i]
    filter.ingredient = {...ingredientFilter}
    updateLocationSearch(null, 'ingredient')
}

</script>

<template>
    <div class="catalog">
        <div class="catalog__header mb-50">
            <app-catalog-tabs>
                <SwiperSlide
                        v-for="item in catalog"
                        :key="item.id"
                >
                    <app-catalog-tab
                            :value="item.name"
                            v-model="filter.categories"
                    >{{ item.name }}
                    </app-catalog-tab>
                </SwiperSlide>
            </app-catalog-tabs>
            <div class="catalog__filter">
                <app-dropdown>
                    <template v-slot:button>
                        <app-button>
                            <AppSvg name="filter"/>
                            Фильтр по ингредиентам
                        </app-button>
                    </template>
                    <template v-slot:list>
                        <app-ingredient-item
                                v-for="item in ingredient"
                                :key="item.id"
                                v-model="ingredientFilter"
                                :id="item.id"
                        >{{ item.name }}
                        </app-ingredient-item>
                    </template>
                    <template v-slot:footer>
                        <div class="catalog_ingredient">
                            <app-button @action="add" data-dropdown-close>Применить</app-button>
                            <app-button color="border" @action="reset" data-dropdown-close>Сбросить</app-button>
                        </div>
                    </template>
                </app-dropdown>
            </div>
        </div>
        <div
                class="catalog__group mb-50"
                v-for="(group, idx) in filterItems"
                :key="group.id"
        >
            <div class="page-header">
                <h2>{{ group.name }}</h2>
            </div>
            <ThePopularGrid :list="[{...declaration, type: 'declaration'}, ...group.products]" v-if="declaration && idx === 0"/>
            <ThePopularGrid :list="group.products" v-else/>
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
      @include media.respond-to(360) {
        width: 100%;
      }
      svg {
        width: 16px;
        height: 18px;
      }
    }
  }

  &__filter {
    @include media.respond-to(360) {
      width: 100%;
    }
  }

  &__group {
    &:last-child {
      margin-bottom: 0;
    }

  }

  .app-dropdown {
    &__menu {
      width: 100%;
      min-width: 330px;

      max-height: 416px;
      padding: 20px 10px;
      @include media.respond-from(960) {
        left: auto;
        right: 0;
      }
      @include media.respond-to(360) {
        min-width: auto;
        left: 0;
      }
    }

    &__list {
      padding-bottom: 10px;
    }
  }

  &_ingredient {
    padding-top: 15px;
    border-top: 1px solid var(--border-color-1);
    display: flex;
    align-items: center;
    gap: 15px;

    * {
      width: 40%;
      flex-grow: 1;
    }
  }
}
</style>