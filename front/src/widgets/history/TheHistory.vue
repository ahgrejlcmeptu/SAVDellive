<script setup lang="ts">
import HistoryTable from "@features/history/HistoryTable.vue";
defineProps(['data'])
</script>

<template>
    <div class="history">
        <div class="history__title">
            <h3>Ваши заказы</h3>
        </div>
        <HistoryTable :data/>
    </div>
</template>

<style lang="scss">
.history {
  border: 1px solid var(--border-color-1);
  border-radius: var(--radius-30);
  --padding-left: 40px;

  &__title {
    padding: 25px var(--padding-left);
  }
}
</style>