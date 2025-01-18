<script setup lang="ts">
import AppCardFeedback from "@features/card/AppCardFeedback.vue";
import {onMounted, ref} from "vue";

defineProps(['data'])
const active = ref(null)
onMounted(() => {
    active.value = location.hash
})

</script>

<template>
    <div class="reviews-list">
        <AppCardFeedback
                v-for="item in data"
                :key="item.id"
                :data="item"
                :active="active"
        />
    </div>
</template>

<style lang="scss">
@use "@style/media";

.reviews-list {
  width: 50%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 24px;
  @include media.respond-to(640) {
    padding-left: 18px;
    &:has(.card-feedback_ask) {
      padding-right: 18px;
    }
  }
}
</style>