<script setup lang="ts">
import AppCardNews from "@features/card/AppCardNews.vue";

interface Props {
    data: object
}

defineProps<Props>()
</script>

<template>
    <div class="news_grid">
        <AppCardNews
                v-for="item in data"
                :key="item.id"
                :data="item"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.news_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--width, 30%), 1fr));
  gap: 30px;
  @include media.respond-to(960) {
    gap: 30px 20px;
  }
  @include media.respond-to(640) {
      --width: 40%;
  }
  @include media.respond-to(360) {
    gap: 20px;
    --width: 100%;
  }
}
</style>