<script setup lang="ts">
import {onMounted} from "vue";
import {Anchors} from "@app/utils/anchors";
import {blockInfo} from "@app/store/block";
import {favoritesCookie} from "@app/store/favorites";

const anchors = new Anchors()
const props = defineProps(['data', 'cookies'])

blockInfo(props.data)
onMounted(async () => {
    favoritesCookie(props.cookies.favorites)
    favoritesCookie(props.cookies.favorites)
    blockInfo(props.data)
    document.addEventListener('click', (event: Event) => {
        anchors.click(event)
    })
})

</script>

<template>
    <div class="wrapper" id="app">
        <slot></slot>
    </div>
</template>