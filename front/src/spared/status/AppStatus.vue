<template>
<div class="app-status"><slot/></div>
</template>

<style lang="scss">
@use '@style/media';

.app-status {
  text-transform: uppercase;
  font-size: media.sizeREM(11);
  line-height:  media.sizeREM(18);;
  font-weight: 500;
  padding: 1px 15px;
  border-radius: var(--radius-40);
  color: var(--main-white);
  background-color: var(--main-color-1);
}
</style>