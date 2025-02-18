<script setup lang="ts">
import {onMounted} from "vue";
import {Anchors} from "@app/utils/anchors";
import {blockInfo} from "@app/store/block";

const anchors = new Anchors()
const props = defineProps(['data'])

blockInfo(props.data)
onMounted(() => {
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