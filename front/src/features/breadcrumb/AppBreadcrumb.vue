<script setup lang="ts">
interface Item {
    label: string;
    link?: string;
}

defineProps<{
    list: Item[];
}>();
</script>

<template>
    <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol class="breadcrumb__list">
            <li class="breadcrumb__item">
                <a class="breadcrumb__link" href="/">Главная</a> → 
            </li>
            <li
                    class="breadcrumb__item"
                    v-for="item in list"
                    :key="item.href"
            >
                <template v-if="item.href">
                    <a class="breadcrumb__link" :href="item.href">{{ item.label }}</a> → 
                </template>
                <div v-else class="breadcrumb__link">{{ item.label }}</div>
            </li>
        </ol>
    </nav>
</template>

<style lang="scss">
@use "@style/media";

.breadcrumb {
  margin-bottom: 10px;
    margin-top: 20px;

  ol {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    font-size: media.sizeREM(15);
    color: var(--text-color-3);
    @include media.respond-to(640) {
      margin-bottom: 5px;
    }
    @include media.respond-to(360) {
      font-size: media.sizeREM(14);
    }
  }

  a {
    transition: .3s;
    @include media.hover {
      color: var(--main-color-1)
    }
  }

  &__item {
    &:last-child {
      color: var(--text-color-2)
    }
  }
}
</style>