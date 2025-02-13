<script setup lang="ts">
import {onMounted} from "vue";
import {Anchors} from "@app/utils/anchors";
const anchors = new Anchors()
onMounted(()=> {
    document.addEventListener('click', (event: Event) => {
        anchors.click(event)
    })
})
</script>

<template>
<slot></slot>
</template>