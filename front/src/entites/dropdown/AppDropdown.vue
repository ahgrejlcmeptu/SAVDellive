<script setup lang="ts">
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue';

</script>

<template>
    <CDropdown>
        <CDropdownToggle>
            <slot name="button"/>
        </CDropdownToggle>
        <CDropdownMenu>
            <slot name="list"/>
        </CDropdownMenu>
    </CDropdown>
</template>

<style lang="scss">
.btn-group {
  position: relative;
  .btn {
    padding: 0;
  }
}
.dropdown-menu {
  z-index: 4;
  min-width: calc(100% + 20px);
  position: absolute;
  display: none;
  background: var(--main-white);
  padding: 10px 0;
  border-radius: var(--radius-10);
  box-shadow: 0 0 20px rgba(#000, .1);
  left: -10px!important;
  top: 100%;
}
.dropdown-menu.show {
  display: block;
}
.dropdown-item {
  display: block;
  padding: 5px 15px;
}
</style>