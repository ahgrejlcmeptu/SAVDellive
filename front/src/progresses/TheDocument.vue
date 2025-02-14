<script setup lang="ts">
import {onMounted} from "vue";
import {Anchors} from "@app/utils/anchors";
import {blockInfo} from "@app/store/block.ts";

const anchors = new Anchors()
const props = defineProps(['data'])

blockInfo(props.data)
onMounted(() => {
    blockInfo(props.data)
})


onMounted(()=> {
    document.addEventListener('click', (event: Event) => {
        anchors.click(event)
    })
})
</script>

<template>
<slot></slot>
</template>