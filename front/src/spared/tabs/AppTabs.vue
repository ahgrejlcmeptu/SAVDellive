<script setup lang="ts">

</script>

<template>
    <div class="app-tabs">
        <slot/>
    </div>
</template>

<style lang="scss">
.app-tabs {
  display: flex;
  gap: 5px;
  padding: 4px;
  border: 1px solid var(--border-color-2);
  border-radius: var(--radius-10);
  margin-bottom: 20px;
}
</style>