<script setup>
const props = defineProps(['id', 'position', 'content', 'name'])
const emits = defineEmits(['close'])
import {useStore} from "@nanostores/vue";
import {popupActive} from "@app/store/popup";

const $popupActive = useStore(popupActive)
const close = () => {
    popupActive.setKey(props.name, undefined)
    emits('close')
}
</script>

<template>
    <transition :name="position">
        <div
                v-if="$popupActive[name]"
                class="popup"
                @mousedown="({target}) => target.classList.contains('popup') ? close() : false"
                :id="id"
        >
            <div :class="['popup-content', 'popup-content_' + position, content]">
                <div class="popup-close" @click="close">
                    <svg>
                        <use xlink:href="/sprite.svg#close"></use>
                    </svg>
                </div>
                <slot/>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
@use "@style/media";
//@use "@style/transition";

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  background: rgba(#000, .5);
  overflow-x: hidden;
  overflow-y: auto;

  &-content {
    width: var(--popup-content, 424px);
    max-width: 100%;
    background: var(--main-white);
    border-radius: var(--radius-30);
    padding: 60px 70px;
    margin: auto;
    position: relative;
    transition: .3s;
    @include media.respond-to(360) {
        padding: 30px var(--conteiner-padding);
    }

    &_right {
      margin-right: 0;
      height: 100%;
      border-radius: 0;
    }
  }

  &-close {
    cursor: pointer;
    position: absolute;
    top: 28px;
    right: 28px;
    transition: .3s;

    @media(hover) {
      &:hover {
        svg {
          fill: var(--main-color-1);
        }
      }
    }

    svg {
      display: block;
      width: 14px;
      height: 14px;
      transition: .3s;
      fill: var(--text-color-2);
    }
  }

  &-header {
    margin-bottom: 30px;

    &_center {
      text-align: center;
    }
  }

  &__inputs {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    > * {
      width: 100%;

      &._w50 {
        width: 40%;
        flex-grow: 1;
      }
    }
  }

  .app-checkbox {
    margin-top: 10px;
    justify-content: center;
  }
}
</style>