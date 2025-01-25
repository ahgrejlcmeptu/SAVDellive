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
@use "@style/media";

.history {
  border: 1px solid var(--border-color-1);
  border-radius: var(--radius-30);
  --padding-left: 40px;
  @include media.respond-to(960) {
    --padding-left: 15px;
  }
  @include media.respond-to(360) {
    width: 100vw;
    --padding-left: var(--conteiner-padding);
    margin-left: calc(var(--conteiner-padding) * -1);
  }

  &__title {
    padding: 25px var(--padding-left);
    @include media.respond-to(640) {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
}
</style>