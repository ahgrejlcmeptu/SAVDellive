<script setup lang="ts">
import {onMounted, provide} from "vue";
import {Anchors} from "@app/utils/anchors";
import {blockInfo} from "@app/store/block";
import {favoritesList} from "@app/store/favorites.ts";

const anchors = new Anchors()
const props = defineProps(['data'])

blockInfo(props.data)
onMounted(async () => {
    blockInfo(props.data)
    await favoritesList.set(props.data.favorites)
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