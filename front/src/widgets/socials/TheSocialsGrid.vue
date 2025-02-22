<script setup lang="ts">
import AppCardSocial from "@features/card/AppCardSocial.vue";
defineProps(['data'])
</script>

<template>
    <div class="socials_grid">
        <AppCardSocial
            v-for="(item, idx) in data.images"
            :key="item.documentId"
            :item
            :data
            :last="idx === data.images.length - 1"
        />
    </div>
</template>

<style lang="scss">
.socials_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--widht, 30%), 1fr));
  grid-gap: 30px 20px;
}
</style>