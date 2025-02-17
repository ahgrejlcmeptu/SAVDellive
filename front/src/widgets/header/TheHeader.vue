<script setup lang="ts">
import HeaderTop from "@features/header/HeaderTop.vue";
import HeaderBottom from "@features/header/HeaderBottom.vue";
import {onMounted, ref} from "vue";

const header = ref<HTMLElement | null>()
const bottom = ref<HTMLElement | null>()
const start = ref<number>(0)
const fixed = ref<boolean>(false)
onMounted(() => {
    bottom.value = header.value?.querySelector('header-bottom')
    start.value = bottom.value?.getBoundingClientRect().top || 0
    fixedInit()
    document.addEventListener('scroll', fixedInit)
})

function fixedInit() {
    if (pageYOffset > start.value) {
        fixed.value = true
        // headerCenter.classList.add('lock-padding')
        // header.style.setProperty('--center', headerCenter.clientHeight + 'px')
    } else {
        fixed.value = false
        // header.classList.remove('header_fixed')
        // headerCenter.classList.remove('lock-padding')
    }
}

</script>

<template>
    <header ref="header" :class="['header', {'header_fixed': fixed}]">
        <HeaderTop/>
        <div class="header__hr"></div>
        <HeaderBottom/>
    </header>
</template>

<style lang="scss">
@use "style";
</style>