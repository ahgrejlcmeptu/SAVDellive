<script setup lang="ts">
import AppIcon from "@spared/AppIcon.vue";

const LIST = [
    {
        name: 'od',
        href: '#'
    },
    {
        name: 'vk',
        href: '#'
    },
    {
        name: 'inst',
        href: '#'
    }
]
</script>

<template>
    <div class="socials">
        <a v-for="item in LIST" :key="item.name" :href="item.href">
            <app-icon :name="'icon-' + item.name"/>
        </a>
    </div>
</template>

<style lang="scss">
.socials {
  display: flex;
  gap: var(--socials-gap, 15px);
}
</style>