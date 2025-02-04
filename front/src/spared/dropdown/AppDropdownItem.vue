<script setup lang="ts">

</script>

<template>
    <div class="app-dropdown-item"><slot/></div>

</template>

<style lang="scss">
@use "@style/media";

.app-dropdown-item {
    cursor: pointer;
    display: block;
    padding: 5px 15px;
    transition: .3s;

    &.active {
        color: var(--main-color-1);
    }

    @include media.hover {
        color: var(--main-color-1);
    }

}
</style>