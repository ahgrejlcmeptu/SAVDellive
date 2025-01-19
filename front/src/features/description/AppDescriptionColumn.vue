<script setup lang="ts">
defineProps(['data'])
</script>

<template>
    <div class="description-column">
        <h3 v-if="data.title">{{ data.title }}</h3>
        <div class="description-column__block" v-html="data.description"></div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.description-column {
  h3 {
    margin-bottom: 20px;
  }

  &__block {
    columns: 2 auto;
    column-gap: 30px;
    @include media.respond-to(640) {
      columns: auto;
    }

      p {
          margin-bottom: 15px;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          break-inside: avoid;
          line-height: 160%;
          &:last-child {
              margin-bottom: 0;
          }
      }
  }
}
</style>