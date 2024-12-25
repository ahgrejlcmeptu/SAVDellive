<script setup lang="ts">
import AppCardNews from "@entites/card/AppCardNews.vue";

interface Props {
    list: object
}

defineProps<Props>()
</script>

<template>
    <div class="news_grid">
        <AppCardNews
                v-for="item in list"
                :key="item.id"
                :data="item"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.news_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @include media.respond-to(960) {
    gap: 30px 20px;
  }
  @include media.respond-to(360) {
    gap: 15px 20px;
    --width: 260px;
  }
}
</style>