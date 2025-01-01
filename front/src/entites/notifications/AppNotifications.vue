<script setup lang="ts">
import {computed} from "vue";

type Type = 'error'
interface Props {
    type?: Type;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'error',
})
defineEmits(['action'])
const type = computed(() => 'notifications_' + props.type)
</script>

<template>
    <div :class="['notifications', type]">
        <slot/>
    </div>
</template>

<style lang="scss">
@use "@style/media";

.notifications {
  padding: 15px 20px;
  border-radius: var(--radius-10);
  font-size: media.sizeREM(12);
  line-height: media.sizeREM(18);

  a {
    border-bottom: 1px solid var(--main-error-2);
  }
  &_error {
    color: var(--main-error-2);
    background: var(--main-error-1);
  }
}
</style>