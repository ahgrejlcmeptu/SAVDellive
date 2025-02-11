<script setup lang="ts">
defineProps(['data'])
</script>

<template>
    <div class="card-basket">

    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-basket {
  border-radius: var(--radius-20);
  border: 1px solid var(--border-color-1);
  display: flex;
  align-items: center;
  transition: .3s;

  @include media.hover {
    border-color: var(--main-color-1);
    background: var(--main-color-2);
  }
}
</style>