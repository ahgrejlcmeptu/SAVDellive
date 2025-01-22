<script setup lang="ts">
import BonusesCard from "@features/bonuses/BonusesCard.vue";
import BonusesProgress from "@features/bonuses/BonusesProgress.vue";
defineProps(['data'])

</script>

<template>
    <div class="bonuses">
        <BonusesCard :bonus="data.bonus" :discount="data.discount"/>
        <BonusesProgress :data="data"/>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.bonuses {
    padding: 30px;
    border-radius: var(--radius-30);
    border: 1px solid var(--border-color-1);
    gap: 20px 35px;
    display: flex;
    flex-wrap: wrap;

    @include media.respond-to(960) {
        padding: 30px 20px;
        .bonuses-progress {
            width: 100%;
            order: -1;
        }
    }
    @include media.respond-to(360) {
        padding-left: 15px;
        padding-right: 15px;
    }
}
</style>