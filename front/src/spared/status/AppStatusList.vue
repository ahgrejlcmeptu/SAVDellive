<template>
<div class="app-status-list"><slot/></div>
</template>

<style lang="scss">
@use '@style/media';

.app-status-list {
  position: absolute;
  top: var(--status-top, 20px);
  left: var(--status-left, 27px);
  display: flex;
  gap: var(--gap-top, 10px) var(--gap-left, 10px);
  flex-wrap: wrap;
}
</style>