<script setup lang="ts">
// import {CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem} from '@coreui/vue';

</script>

<template>
<!--    <CDropdown>-->
<!--        <CDropdownToggle>-->
<!--            <slot name="button"/>-->
<!--        </CDropdownToggle>-->
<!--        <CDropdownMenu>-->
<!--            <div class="dropdown-menu__list">-->
<!--                <slot name="list"/>-->
<!--            </div>-->
<!--        </CDropdownMenu>-->
<!--    </CDropdown>-->
</template>

<style lang="scss">
@use "@style/media";

.btn-group {
  position: relative;

  .btn {
    cursor: pointer;
    border: none;
    display: block;
    padding: 0;
    text-align: left;
    background: none;
    outline: none;

    &.show {
      .dropdown-arr {
        transform: rotate(180deg);
      }
    }
  }
}

.dropdown-menu {
  z-index: 4;
  min-width: calc(100% + 20px);
  position: absolute;
  display: none;
  background: var(--main-white);
  border-radius: var(--radius-10);
  box-shadow: 0 0 20px rgba(#000, .1);
  left: -10px !important;
  top: 100%;
  max-height: 300px;
  overflow: hidden;
  flex-direction: column;
  padding-right: 2px;
  width: max-content;

  &__list {
    padding: 10px 0;
    overflow-x: hidden;
    overflow-y: auto;
    height: 10%;
    flex-grow: 1;
    color: var(--text-color-1);
    @include media.scroll;
  }
}

.dropdown-menu.show {
  display: flex;
}

.dropdown-item {
  cursor: pointer;
  display: block;
  padding: 5px 15px;
  transition: .3s;

  &.active {
    color: var(--main-color-1);
  }

  @include media.hover {
    color: var(--main-color-1);
  }
}
</style>