<script setup lang="ts">
import AppCardProduct from "@entites/card/AppCardProduct.vue";
import AppCardSuccessfully from "@entites/card/AppCardSuccessfully.vue";
import {computed} from "vue";

const props = defineProps(['data', 'percent'])

const bonus = computed(() => {
    const total = props.data.reduce((sum, item) => sum + +item.price , 0)
    return Math.floor(total * props.percent / 100)
})
</script>

<template>
    <div class="successfully-order">
        <AppCardSuccessfully :percent="percent" :bonus="bonus"/>
        <AppCardProduct
                class="card-product_mobile"
                v-for="item in data"
                :key="item.id"
                :data="item"
                :successfully="true"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";
.successfully-order {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--card-width, 20%), 1fr));
    grid-gap: 30px;
    @include media.respond-to(960) {
        grid-gap: 30px 20px;
        --card-width: 30%;
    }
    @include media.respond-to(640) {
        grid-gap: 20px;
        --card-width: 40%;
    }
    @include media.respond-to(360) {
        grid-gap: 10px;
        --card-width: 100%;
    }
}
</style>