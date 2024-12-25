<script setup lang="ts">
import FooterTop from "@features/footer/FooterTop.vue";
import FooterBottom from "@features/footer/FooterBottom.vue";
</script>

<template>
    <footer class="footer">
        <FooterTop/>
        <FooterBottom/>
    </footer>
</template>

<style lang="scss">
@use "@style/media";

.footer {
  border-top: 1px solid var(--text-color-4);

  @include media.respond-from(960) {
    &__column {
      &_one {
        width: 6%;
      }

      &_two {
        width: 20%;
      }

      &_three {
        width: 20%;
      }

      &_four {
        width: 6%;
      }
    }
  }
}
</style>