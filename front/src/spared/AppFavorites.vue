<script setup>
import AppSvg from "./AppSvg.vue";
import {favoritesToggle, favoritesList} from "@app/store/favorites";
import {useStore} from "@nanostores/vue";
defineProps(['id'])
const $favoritesList = useStore(favoritesList)

</script>
<template>
    <div :class="['app-favorites', {active: $favoritesList[id]}]" @click="favoritesToggle(id)">
        <AppSvg name="card-favorites"/>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.app-favorites {
  position: absolute;
  top: var(--favorites-pos, 20px);
  right: var(--favorites-pos, 20px);
  cursor: pointer;
  z-index: 1;

  @include media.hover {
    --icon-stroke: var(--main-color-1);
  }

  &.active {
    --icon-stroke: var(--main-color-1);
    --icon-fill: var(--main-color-1);
  }

  svg {
    display: block;
    width: 20px;
    height: 18px;
    transition: .3s;
    stroke: var(--icon-stroke, var(--text-color-3));
    fill: var(--icon-fill, transparent);
  }
}
</style>