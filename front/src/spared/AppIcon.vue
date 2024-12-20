<script setup>
import AppSvg from "./AppSvg.vue";

defineProps(['name', 'color'])
</script>

<template>
    <div :class="['app-icon', color ? 'app-icon_' + color : ''] ">
        <app-svg :name="name"/>
    </div>
</template>

<style scoped lang="scss">
.app-icon {
  flex-shrink: 0;
  width: var(--size, 42px);
  height: var(--size, 42px);
  border-radius: 50%;
  background: var(--main-color-2);
  --icon-color: var(--main-color-3);

  svg {
    width: 100%;
    height: 100%;
    fill: var(--icon-color);
    stroke: var(--icon-color);
  }

  &_main {
    background: var(--main-color-1);
      --icon-color: var(--main-white);
  }
}
</style>