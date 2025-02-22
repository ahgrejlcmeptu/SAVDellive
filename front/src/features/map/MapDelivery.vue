<script setup lang="ts">
import {branchesActive, HOST} from "@app/store/block.ts";
import {useStore} from "@nanostores/vue";

defineProps<{
    label: string
}>()
const $branchesActive = useStore(branchesActive)
</script>

<template>
<div class="map-delivery">
    <div class="text-20">{{label}}</div>
    <img :src="HOST + $branchesActive.map?.url" :alt="label">
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