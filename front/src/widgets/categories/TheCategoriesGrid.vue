<script setup lang="ts">
import AppCardCategory from "@features/card/AppCardCategory.vue";

defineProps(['data'])
</script>

<template>
    <div class="categories_grid">
        <AppCardCategory
            v-for="item in data.list"
            :key="item.documentId"
            :data="item"
        />
        <AppCardCategory
            v-if="data.lastCard"
            :data="{name: data.lastCardText, href: data.lastCardLink, all: true}"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.categories_grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px 30px;
    @include media.respond-to(960) {
        grid-gap: 30px 20px;
    }

    .card-category {
        height: 150px;
        @include media.respond-to(960) {
            height: 220px;
        }
        &:nth-child(1),
        &:nth-child(2) {
            @include media.respond-from(960) {
                grid-row: span 2;
                height: 320px;
            }
            @include media.respond-to(960) {
                padding-top: 35px;
                grid-column: span 2;
            }

            img {
                height: 250px;
                bottom: -30px;
                right: -100px;
                @include media.respond-to(960) {
                    height: 290px;
                    bottom: -90px;
                    right: -115px;
                }
            }
        }

        img {
            height: 160px;
            bottom: -40px;
            right: -50px;
        }
    }
}
</style>