<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

const show = ref(false)
const handleClick = (event: Event) => {
    if (event.target.closest('.app-dropdown__toggle')) show.value = !show.value
    if (event.target.closest('.app-dropdown-item')) show.value = false
}
const handleMousedown = (event: Event) => {
    if (!event.target.closest('.app-dropdown.show')) show.value = false
}

onMounted(() => {
    document.addEventListener('mousedown', handleMousedown)
})
onUnmounted(() => {
    document.removeEventListener('mousedown', handleMousedown)
})


</script>

<template>
    <div :class="['app-dropdown', {'show': show}]" @click="handleClick">
        <div class="app-dropdown__toggle">
            <slot name="button"/>
        </div>
        <div class="app-dropdown__menu" v-if="show">
            <div class="app-dropdown__list">
                <slot name="list"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.app-dropdown {
  position: relative;

  &__toggle {
    cursor: pointer;
  }

  &__menu {
    z-index: 4;
    //min-width: calc(100% + 20px);
    position: absolute;
    background: var(--main-white);
    border-radius: var(--radius-10);
    box-shadow: 0 0 20px rgba(#000, .1);
    left: -10px;
    top: 100%;
    margin-top: 5px;
    max-height: 200px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: max-content;
    padding: 5px;
  }

  &__list {
    //padding: 5px 0;
    overflow-x: hidden;
    overflow-y: auto;
    height: 10%;
    flex-grow: 1;
    color: var(--text-color-1);
    @include media.scroll;
  }
}
</style>