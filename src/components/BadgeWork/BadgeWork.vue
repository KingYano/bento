<template>
  <a href="#" class="badge-work" :class="isOpen ? 'badge-work-open' : 'badge-work-not-open'">
    <p class="badge-work-message">{{ isOpen ? 'Open to work' : 'Already in work' }}</p>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  isOpen: Boolean,
});
</script>

<style lang="scss">
  @import 'BadgeWork.scss';
</style>
