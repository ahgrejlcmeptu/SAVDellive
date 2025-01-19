<script setup lang="ts">
import AppCardSocial from "@features/card/AppCardSocial.vue";
defineProps(['data'])
</script>

<template>
    <div class="socials_grid">
        <AppCardSocial
            v-for="item in data"
            :key="item.id"
            :data="item"
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