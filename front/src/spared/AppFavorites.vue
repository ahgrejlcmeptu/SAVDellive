<template>
    <div class="app-favorites">
        <svg viewBox="0 0 20 18">
            <path d="M10.1466 2.75656C17.289 -3.62771 25.859 8.84118 10.1466 17C-5.56763 8.84061 2.05137 -3.62832 10.1466 2.75656Z"
                  stroke-width="1.5"/>
        </svg>

    </div>
</template>

<style lang="scss">
@use "/src/app/style/media";

.app-favorites {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1;

  @include media.hover {
    --icon-stroke: var(--main-color-1);
  }

  &.active {
    --icon-stroke: var(--main-color-1);
    --icon-fill: var(--main-color-1);
  }

  svg {
    display: block;
    width: 20px;
    height: 18px;
    transition: .3s;
    stroke: var(--icon-stroke, var(--text-color-3));
    fill: var(--icon-fill, transparent);
  }
}
</style>