<template>
<div class="select-item"><slot/></div>
</template>

<style lang="scss">
@use '@style/media';

.select-item {
  cursor: pointer;
  padding: 5px 12px;
  border-radius: var(--radius-8);
  font-size: media.sizeREM(15);
  color: var(--text-color-2);

  &.active {
    background: var(--main-color-5);
    color: var(--main-color-1);
  }
}
</style>