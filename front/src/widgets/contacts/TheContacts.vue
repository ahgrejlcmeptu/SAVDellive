<script setup lang="ts">
defineProps(['data'])
</script>

<template>
    <div class="contacts">
        <div
                :class="['contacts__group', {'contacts__group_big': item.big}]"
                v-for="item in data"
                :key="item.id"
        >
            <div class="contacts__label">{{ item.label }}</div>

            <template v-if="item.link">
                <div class="contacts__value">
                    <template v-for="link in item.value">
                        <a :href="link.link + ':' + link">{{ link }}</a> <br>
                    </template>
                </div>
            </template>

            <template v-else-if="item.mode">
                <div class="contacts__value">
                    <template v-for="mode in item.value">
                        {{ mode }} <br>
                    </template>
                </div>
            </template>

            <template v-else>
                <div class="contacts__value" v-html="item.value"></div>
            </template>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.contacts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--width, 30%), 1fr));
  grid-gap: 30px;

  @include media.respond-to(640) {
    --width: 40%;
  }
  @include media.respond-to(360) {
    grid-gap: 20px;
    --width: 100%;
  }

  &__group {
    &_big {
      grid-row: span 2;
      @include media.respond-to(640) {
        order: 1;
        grid-row: auto;
      }
    }
  }

  &__label {
    margin-bottom: 10px;
    color: var(--text-color-2);
    @include media.respond-to(640) {
      font-size: media.sizeREM(15);
    }
  }

  &__value {
    font-size: media.sizeREM(20);
    line-height: 140%;

    @include media.respond-to(960) {
      font-size: media.sizeREM(18);
    }
    @include media.respond-to(640) {
      font-size: media.sizeREM(16);
    }
  }
}
</style>