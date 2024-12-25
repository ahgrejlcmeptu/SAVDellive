<script setup lang="ts">
defineEmits(['action'])
</script>

<template>
    <button @click="$emit('action')" class="tabs-button">
        <slot/>
    </button>
</template>

<style lang="scss">
@use "@style/media";

.tabs-button {
  padding: 0 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  outline: none;
  border: none;
  height: 40px;
  border-radius: var(--radius-10);
  font-weight: 500;
  transition: .3s;
  background: none;
  --color: var(--text-color-3);
  color: var(--color);

  @include media.hover {
    --color: var(--main-color-1);
  }

  @include media.respond-to(640) {
    font-size: media.sizeREM(15);
  }

  &.active {
    background-color: var(--main-color-1);
    --color: var(--main-white)
  }

  &:not(.active) {
    cursor: pointer;

    span {
      border-bottom: 1px solid var(--color);
    }
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: var(--color);
    fill: var(--color);
  }

}
</style>