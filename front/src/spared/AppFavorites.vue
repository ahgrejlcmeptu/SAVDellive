<script setup>
import AppSvg from "./AppSvg.vue";
</script>
<template>
    <div class="app-favorites">
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