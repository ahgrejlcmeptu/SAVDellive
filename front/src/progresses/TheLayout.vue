<script setup lang="ts">
import TheHeader from '@widgets/header/TheHeader.vue'
import TheFooter from '@widgets/footer/TheFooter.vue'
import ThePopupBasket from '@widgets/popup/ThePopupBasket.vue'
import ThePopupCall from '@widgets/popup/ThePopupCall.vue'
import ThePopupAuth from '@widgets/popup/ThePopupAuth.vue'
</script>

<template>
    <TheHeader/>
    <main>
        <slot/>
    </main>
    <TheFooter/>
    <ThePopupBasket/>
    <ThePopupCall/>
    <ThePopupAuth/>
</template>

<!--<div class="wrapper">-->
<!--<TheHeader client:load/>-->
<!--<main>-->
<!--    <slot/>-->
<!--</main>-->
<!--<TheFooter client:load/>-->
<!--<ThePopupBasket client:only/>-->
<!--<ThePopupCall client:only/>-->
<!--<ThePopupAuth client:only/>-->
<!--</div>-->