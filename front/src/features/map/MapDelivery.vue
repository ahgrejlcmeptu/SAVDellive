<script setup lang="ts">
import type {MapDelivery} from "@app/utils/interfaces";

defineProps<{
    data: MapDelivery
}>()

</script>

<template>
<div class="map-delivery">
    <div class="text-20">{{data.label}}</div>
    <img :src="data.img" :alt="data.label">
</div>
</template>

<style lang="scss">
.map-delivery {
  .text-20 {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius-30);
    min-height: 220px;
    object-fit: cover;
  }
}
</style>