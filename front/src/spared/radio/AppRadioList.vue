<template>
    <div class="radio-list">
        <div class="radio-list__scroll scroll-container">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss">
.radio-list {
  padding: 8px;
  border-radius: var(--radius-10);

  border: 1px solid var(--border-color-2);

  &__scroll {
    max-height: 190px;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>