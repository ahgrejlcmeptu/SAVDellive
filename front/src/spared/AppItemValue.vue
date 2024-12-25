<template>
<div class="item-value"><slot></slot></div>
</template>

<style lang="scss">
@use "@style/media";
.item-value {
  position: absolute;
  font-size: media.sizeREM(11);
  font-weight: 500;
  color: var(--main-white);
  background-color: var(--main-color-1);
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: -4px;
  left: 20px;
  @include media.respond-to(360) {
    left: 15px;
    top: -7px;
  }
}
</style>