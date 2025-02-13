<template>
    <a href="#app" class="button-top">
        <svg viewBox="0 0 47 47">
            <path d="M22.5408 30.2705C22.5408 30.6849 22.8767 31.0208 23.291 31.0208C23.7054 31.0208 24.0413 30.6849 24.0413 30.2705L22.5408 30.2705ZM23.8215 15.7354C23.5285 15.4425 23.0535 15.4425 22.7605 15.7354L17.986 20.51C17.693 20.803 17.693 21.278 17.986 21.571C18.279 21.864 18.754 21.864 19.047 21.571L23.291 17.327L27.535 21.571C27.828 21.864 28.3031 21.864 28.596 21.571C28.889 21.278 28.889 20.803 28.596 20.51L23.8215 15.7354ZM24.0413 30.2705L24.0413 16.266L22.5408 16.266L22.5408 30.2705L24.0413 30.2705Z"/>
        </svg>

    </a>
</template>

<style lang="scss">
@use "@style/media";

.button-top {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--main-color-1);
  transition: .3s;
  @include media.hover {
    background: var(--main-color-1-hover);
  }

  svg {
    width: 100%;
    height: 100%;
    stroke: none;
    fill: var(--main-white);
  }
}
</style>