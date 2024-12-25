<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
</script>

<template>
    <div class="app-play">
        <AppSvg name="play"/>
    </div>
</template>

<style lang="scss">
.app-play {
  width: var(--play-size, 40px);
  height: var(--play-size, 40px);
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--main-color-1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(var(--play-transform, -50%), var(--play-transform, -50%));

  svg {
    width: 100%;
    height: 100%;
    fill: var(--main-white);
  }
}
</style>