<script setup lang="ts">
import HeaderTop from "@features/header/HeaderTop.vue";
import HeaderBottom from "@features/header/HeaderBottom.vue";

</script>

<template>
    <header class="header">
        <HeaderTop/>
        <div class="header__hr"></div>
        <HeaderBottom/>
    </header>
</template>

<style lang="scss">
@use "style";
</style>