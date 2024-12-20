<script setup>
defineProps(['name', 'href'])
</script>

<template>
  <svg>
      <use :xlink:href="name ? '/sprite.svg#' + name : href"></use>
  </svg>
</template>
