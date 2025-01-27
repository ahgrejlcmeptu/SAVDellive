<script setup lang="ts">
defineProps(['value'])
</script>

<template>
<div v-if="value" class="app-amount">{{value}}</div>
</template>

<style lang="scss">
@use "@style/media";
.app-amount {
  min-width: 18px;
  height: 18px;
  padding: 3px 6px;
  text-align: center;
  border-radius: 50%;
  background-color: #EDE4FF;
  font-size: media.sizeREM(11);
  font-weight: 500;
  color: var(--main-color-1);
  opacity: .8;
}
</style>