<script setup lang="ts">

</script>

<template>
<div class="swiper-pagination"></div>
</template>

<style lang="scss">
.swiper-pagination {
  display: flex;
  justify-content: center;
  gap: 6px;
  position: absolute;
  bottom: var(--pagination-pos, 0);
  width: 100%;
  left: 0;
  z-index: 2;

  &-bullet {
    width: var(--pagination-size, 6px);
    height: var(--pagination-size, 6px);
    border-radius: 50%;
    background-color: var(--main-white);

    &-active {
      background-color: var(--text-color-1);
    }
  }
}
</style>