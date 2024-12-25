<script setup lang="ts">

</script>

<template>
    <div class="link-bottom text-16">
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.link-bottom {
  margin-top: 40px;
  text-align: center;
  @include media.respond-to(640) {
      margin-top: 35px;
  }
    @include media.respond-to(360) {
        margin-top: 20px;
    }

  a {
    color: var(--main-color-1);
    border-bottom: 1px solid var(--main-color-1);
  }
}
</style>