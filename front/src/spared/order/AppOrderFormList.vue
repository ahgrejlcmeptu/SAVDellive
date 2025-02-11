<template>
<div class="order-form__list">
    <slot />
</div>
</template>

<style lang="scss">
@use "@style/media";
.order-form__list {
  font-size: media.sizeREM(14);
  line-height: media.sizeREM(18);
}
</style>