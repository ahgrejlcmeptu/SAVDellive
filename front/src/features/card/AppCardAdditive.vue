<script setup lang="ts">
import AppSvg from "@spared/AppSvg.vue";
import {ref} from "vue";

defineProps(['data'])
const active = ref(null)
</script>

<template>
    <div :class="['card-additive', {active}]">
        <div class="card-additive__active" v-if="active">
            <AppSvg name="check"/>
        </div>
        <div class="card-additive__img">
            <img :src="data.img" :alt="data.name">
        </div>
        <div class="card-additive__body">
            <div class="text-14">{{data.name}}</div>
            <div class="card-additive__footer">
                <div class="text-12">{{data.price}}</div>
                <div class="text-11">{{data.weight}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.card-additive {
  width: 104px;
  border: 1px solid var(--border-color-1);
  border-radius: var(--radius-10);
  transition: .3s;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  cursor: pointer;
  position: relative;

  @include media.hover {
    border-color: var(--main-color-1);
    background: var(--main-color-2);
  }

  &__active {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--main-color-1);
    right: 10px;
    top: -10px;
    display: flex;

    svg {
      height: 8px;
      margin: auto;
      width: 11px;
      fill: var(--main-white);
    }
  }

  &__img {
    img {
      width: 100%;
      height: 80px;
      display: block;
      object-fit: contain;
      border-radius: var(--radius-10);
    }
  }

  &__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px 10px;
    gap: 5px;
    
    .text-14 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 500;
      line-height: 120%;
      min-height: 2.4em;
      vertical-align: middle;
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text-11 {
      color: var(--text-color-3);
    }
  }
}
</style>