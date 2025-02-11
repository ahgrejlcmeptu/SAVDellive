<template>
    <div class="order-form__list-item">
        <slot/>
    </div>
</template>

<style lang="scss">
.order-form__list-item {
  display: flex;
  justify-content: space-between;
  gap: 4px;

  &:last-child {
    margin-bottom: 0 !important;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  > span:first-child {
    order: -1
  }

  &:before {
    content: '';
    display: block;
    width: 10%;
    flex-grow: 1;
    border-bottom: 1px dotted var(--border-color-2);
    pointer-events: none;
    transform: translateY(-4px);
  }

  &_total {
    margin-top: 15px;

    &:before {
      display: none;
    }
  }
}
</style>