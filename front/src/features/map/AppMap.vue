<script setup lang="ts">

</script>

<template>
    <div class="map">

    </div>
</template>

<style lang="scss">
@use "@style/media";

.map {
  &_contacts {
    width: calc(100vw - var(--conteiner-padding) * 2);
    max-width: 1370px;
    height: 450px;
    overflow: hidden;
    border-radius: var(--radius-30);
    background: #aaa;
    margin-left: 50%;
    transform: translateX(-50%);
    @include media.respond-to(960) {
      height: 300px;
    }
    @include media.respond-to(640) {
      height: 290px;
      border-radius: var(--radius-20);
    }
    @include media.respond-to(360) {
      height: 200px;
    }
  }
}
</style>