<script setup lang="ts">
defineProps(['title', 'header'])
</script>

<template>
    <section>
        <div class="container">
            <div v-if="title" :class="['page-header', {'page-header_center': header === 'center'}]">
                <h2>{{ title}}</h2>
            </div>
            <slot/>
        </div>
    </section>
</template>